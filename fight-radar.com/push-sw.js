/**
 * Web-push handlers, appended to the generated Workbox service worker via
 * `workbox.importScripts` (the PWA uses generateSW, so this file is the only
 * hand-written SW code).
 *
 * Payload contract (sent by __DATA_MAINTENANCE__/send_push.ts):
 *   { title: string, body: string, url: string }  — url is a hash route,
 *   e.g. "/#/my-picks?recap=27-06-2026".
 */
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
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      data: { url: data.url || "/" },
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((windows) => {
        // Reuse an open tab when possible (navigate keeps the SPA warm).
        for (const win of windows) {
          if ("focus" in win) {
            win.focus();
            if ("navigate" in win) return win.navigate(url);
            return undefined;
          }
        }
        return clients.openWindow(url);
      }),
  );
});
