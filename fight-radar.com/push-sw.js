/**
 * Web-push handlers, appended to the generated Workbox service worker via
 * `workbox.importScripts` (the PWA uses generateSW, so this file is the only
 * hand-written SW code).
 *
 * Payload contract (built by __DATA_MAINTENANCE__/helpers/push_delivery.ts):
 *   { title: string, body: string, url: string }  — url is a hash route
 *   RELATIVE TO THE APP ROOT, e.g. "#/es/my-picks?recap=27-06-2026".
 *
 * NEVER origin-absolute: the app is not always served from the origin root
 * (QA lives under /published_nxwebs/fight-radar.com/, see vite.config.js
 * `base`), so "/#/…" opened the origin root instead of the app. Everything is
 * resolved against the SW scope below, which IS the app root in every
 * environment.
 */

/** Hash route (or asset path) from the payload → absolute URL inside THIS deployment. */
function appUrl(raw) {
  const scope = self.registration.scope;
  // The leading slash of the legacy form ("/#/…") is stripped: it would make
  // new URL() discard the scope's path and land outside the app again. Stripping
  // the whole run also defuses "//host/x", which URL() would read as a
  // protocol-relative address to someone else's origin.
  const rel = String(raw || "").replace(/^\/+/, "");
  let href;
  try {
    href = new URL(rel, scope).href;
  } catch {
    return scope;
  }
  // A payload is ours (signed by our VAPID pair) but this is the one place the
  // SW turns data into navigation, so it stays closed: anything that resolves
  // outside the app — an absolute "https://…" in the payload would — falls back
  // to the app root rather than opening it.
  return href.startsWith(scope) ? href : scope;
}

// Same file the PWA manifest ships. It used to point at "/pwa-192x192.png",
// which exists in NO environment (the real assets are android-chrome-*), so
// every notification rendered with the browser's default icon.
const ICON = "android-chrome-192x192.png";

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    /* malformed payload → generic notification */
  }
  const title = data.title || "Fight-Radar";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: data.body || "",
      icon: appUrl(ICON),
      badge: appUrl(ICON),
      data: { url: appUrl(data.url) },
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = appUrl(
    (event.notification.data && event.notification.data.url) || "",
  );
  event.waitUntil(
    (async () => {
      const windows = await clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      // Reuse an open tab when possible (navigate keeps the SPA warm), but only
      // one that is actually THIS app: the origin can host other sites
      // (github.io user pages), and focusing one of those would look like the
      // notification led somewhere random.
      for (const win of windows) {
        if (!win.url.startsWith(self.registration.scope)) continue;
        try {
          // navigate() rejects for clients this SW doesn't control; fall through
          // to openWindow rather than focusing a tab still on the old route.
          await win.navigate(url);
          return await win.focus();
        } catch {
          break;
        }
      }
      return clients.openWindow(url);
    })(),
  );
});
