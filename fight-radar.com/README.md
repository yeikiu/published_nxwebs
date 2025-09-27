# UFC Radar - Mantenimiento del Dataset

## Programación de Mantenimiento del Dataset

### Semanal (cada 7 días) - **OBLIGATORIO**
```bash
# Actualizar luchadores existentes con datos de peleas recientes
node scripts/update_all_fighters.js --verbose
```
- **Tiempo de ejecución**: 2-6 horas dependiendo del tamaño del roster
- **Propósito**: Actualiza todas las estadísticas de luchadores con peleas recientes (ventana de 36 meses)
- **Auto-limpieza**: Remueve luchadores inactivos (sin peleas en 36 meses)

### Mensual (cada 30 días) - **OBLIGATORIO**
```bash
# Agregar nuevos luchadores activos de UFC a la base de datos
node scripts/check_fighters_and_divisions.js --verbose
```
- **Tiempo de ejecución**: 3-8 horas
- **Propósito**: Descubre y agrega nuevos luchadores activos del roster de UFC
- **Solo procesa**: Luchadores con actividad en los últimos 36 meses
- **Sincronización completa**: Remueve luchadores que ya no aparecen en UFC Stats

### Actualizaciones de Luchadores Individuales - **SEGÚN NECESIDAD**
```bash
# Actualizar luchador específico
node scripts/ufc_data_crawler.js "http://ufcstats.com/fighter-details/[fighter-id]" --persist --verbose
```
- **Cuándo**: Después de peleas importantes o cambios en el roster
- **Tiempo de ejecución**: 30-60 segundos por luchador

## Orden de Ejecución de Scripts

1. **Mantenimiento Primario** (ejecutar semanalmente):
   ```bash
   node scripts/update_all_fighters.js --verbose
   ```

2. **Descubrimiento de Nuevos Luchadores** (ejecutar mensualmente):
   ```bash
   node scripts/check_fighters_and_divisions.js --verbose
   ```

3. **Actualizaciones Individuales** (ejecutar según necesidad):
   ```bash
   node scripts/ufc_data_crawler.js "[fighter-url]" --persist --verbose
   ```

## Detalles de Scripts

### `update_all_fighters.js` - **Herramienta de Mantenimiento Principal**
- **Invocación del usuario**: Requerida semanalmente
- **Llamadas internas**: Usa `ufc_data_crawler.js` automáticamente
- **Limitación de velocidad**: Demoras de 5-15 segundos entre luchadores
- **Auto-limpieza**: Remueve luchadores inactivos al completar
- **Reanudable**: Puede especificar rangos con `start_index end_index`

#### Banderas Disponibles:
```bash
# Ejemplos de uso
node scripts/update_all_fighters.js                              # Procesar todos los luchadores
node scripts/update_all_fighters.js 1 10                         # Procesar luchadores del 1 al 10
node scripts/update_all_fighters.js --verbose                    # Mostrar logs detallados
node scripts/update_all_fighters.js --reverse                    # Procesar en orden inverso (último a primero)
node scripts/update_all_fighters.js --clean-inactive             # Solo remover luchadores inactivos, sin actualizar
node scripts/update_all_fighters.js --picture-only               # Solo actualizar campo picture_url
node scripts/update_all_fighters.js --no-delay                   # Deshabilitar pausas para procesamiento más rápido
node scripts/update_all_fighters.js 1 5 --no-delay --verbose     # Combinar múltiples banderas
```

**Banderas:**
- `--verbose` / `-v`: Mostrar registro detallado
- `--reverse`: Procesar luchadores en orden inverso
- `--clean-inactive`: Solo limpiar luchadores inactivos, sin actualizar
- `--picture-only`: Solo actualizar imágenes de cada luchador
- `--no-delay`: Deshabilitar las pausas entre luchadores para procesamiento más rápido

### `check_fighters_and_divisions.js` - **Descubrimiento de Nuevos Luchadores**
- **Invocación del usuario**: Requerida mensualmente
- **Llamadas internas**: Usa `ufc_data_crawler.js` automáticamente
- **Limitación de velocidad**: Demoras de 15-45 segundos entre luchadores
- **Solo-activos**: Solo procesa luchadores con actividad reciente
- **Incremental**: Puede dirigirse a letras específicas con `[letters]`
- **Sincronización completa**: Detecta y remueve luchadores faltantes de la fuente

#### Banderas Disponibles:
```bash
# Ejemplos de uso
node scripts/check_fighters_and_divisions.js                     # Verificar todas las letras A-Z (solo luchadores activos)
node scripts/check_fighters_and_divisions.js a                   # Verificar solo letra A
node scripts/check_fighters_and_divisions.js abc                 # Verificar letras A, B, C
node scripts/check_fighters_and_divisions.js a --verbose         # Verificar A con logs detallados
node scripts/check_fighters_and_divisions.js --no-delay          # Saltar demoras para procesamiento más rápido
node scripts/check_fighters_and_divisions.js abc --no-delay --verbose # Combinar banderas
```

**Banderas:**
- `--verbose` / `-v`: Mostrar registro detallado
- `--no-delay`: Saltar demoras entre luchadores y letras para procesamiento más rápido

**Operaciones que realiza:**
1. **Agrega nuevos luchadores activos** encontrados en UFC Stats pero no en CSV
2. **Actualiza luchadores activos existentes** con datos frescos de UFC Stats
3. **Remueve luchadores inactivos** que siguen en UFC Stats pero sin peleas en 36 meses
4. **Remueve luchadores faltantes** que han desaparecido completamente de UFC Stats

### `ufc_data_crawler.js` - **Motor de Datos Principal**
- **Invocación del usuario**: Solo para luchadores individuales
- **Llamadas internas**: Llamado por otros scripts automáticamente
- **Nunca ejecutar manualmente**: Para operaciones en lote (usar scripts padre)
- **Formato de salida**: Incluye fechas de nacimiento en formato DD-MM-YYYY

#### Banderas Disponibles:
```bash
# Ejemplos de uso
node scripts/ufc_data_crawler.js "http://ufcstats.com/fighter-details/[fighter-id]"
node scripts/ufc_data_crawler.js "[fighter-url]" --verbose       # Mostrar logs detallados
node scripts/ufc_data_crawler.js "[fighter-url]" --persist       # Actualizar CSV con datos frescos
node scripts/ufc_data_crawler.js "[fighter-url]" --picture-only  # Solo actualizar picture_url
node scripts/ufc_data_crawler.js "[fighter-url]" --no-delay      # Sin demoras para procesamiento más rápido
```

**Banderas:**
- `--verbose`: Mostrar logs detallados
- `--persist`: Actualizar CSV con datos frescos preservando campos específicos
- `--picture-only`: Solo actualizar el campo picture_url del luchador
- `--no-delay`: Deshabilitar pausas internas para procesamiento más rápido

### `ufc_picture_crawler.js` - **Script de Utilidad**
- **Invocación del usuario**: Raramente necesario (herramienta interna)
- **Propósito**: Obtención independiente de URLs de imágenes
- **Llamado por**: `ufc_data_crawler.js` automáticamente

## Nuevas Características

### Seguimiento de Fechas de Nacimiento
- **Extracción automática**: Los scripts ahora extraen fechas de nacimiento de UFC Stats
- **Formato**: Almacenado como DD-MM-YYYY en CSV
- **Cálculo de edad**: Disponible en la interfaz de usuario
- **Columnas UI**: Birth Date y Age disponibles en Data Center

### Sincronización Mejorada
- **Detección de faltantes**: `check_fighters_and_divisions.js` ahora detecta luchadores que han desaparecido de UFC Stats
- **Limpieza automática**: Remueve registros huérfanos que ya no existen en la fuente
- **Sincronización completa**: Mantiene el CSV perfectamente sincronizado con UFC Stats

## Notas Críticas

- **Nunca ejecutar scripts en paralelo** - Riesgo de limitación de velocidad/bloqueos de IP
- **Siempre usar `--verbose`** - Esencial para monitorear progreso
- **Monitorear límites de velocidad** - Los scripts incluyen demoras para prevenir bloqueos
- **Respaldo automático de CSV** - Los scripts preservan la integridad de los datos
- **Usar `--no-delay` con precaución** - Para procesamiento más rápido pero mayor riesgo de bloqueos

## Ubicación de Datos
- **Base de Datos CSV**: `public/data/ALL_DIVISIONS_DATA_WITH_URLS.csv`
- **Formato**: Mejorado con columna Birth_Date como 3era columna
- **Auto-limpieza**: Luchadores inactivos removidos automáticamente
- **Estructura**: Fighter,Division,Birth_Date,Career_Record,...

## Solución de Problemas

### Si un script se cuelga o falla:
1. **Usar Ctrl+C** para detener el proceso
2. **Verificar logs** para identificar el último luchador procesado
3. **Reanudar** desde un punto específico usando índices de inicio/fin
4. **Usar `--no-delay`** si el servidor UFC Stats responde lentamente

### Si hay errores de red:
1. **Verificar conexión a internet**
2. **Esperar** y reintentar (UFC Stats puede estar temporalmente no disponible)
3. **Ejecutar en lotes más pequeños** usando rangos de índices