# Gestion Mantix

Sistema web de mantenimiento, soporte tecnico e inventario para organizaciones. El proyecto esta desarrollado con Django y funciona como una landing/prototipo profesional para mostrar una solucion tipo SaaS orientada a mesa de ayuda, control de activos, ordenes de trabajo y seguimiento operativo.

La prioridad visual del proyecto es que se vea presentable en portafolio: oscuro, corporativo, tecnologico, responsive y con una interfaz que parezca un producto real, no una maqueta vacia.

## Vista General

Gestion Mantix permite representar el flujo completo de una plataforma interna de mantenimiento:

- Registro de solicitudes de soporte.
- Control de equipos e inventario.
- Asignacion de responsables.
- Seguimiento de mantenciones.
- Dashboard visual con tickets, SLA, stock y estados.
- Guardado temporal local para pruebas rapidas.

Actualmente la interfaz guarda datos demo en `localStorage`. La estructura esta preparada para evolucionar hacia modelos Django, autenticacion, roles, CRUD real y persistencia en SQLite o una base de datos productiva.

## Capturas

Las capturas actualizadas estan en:

```text
docs/screenshots/
```

| Vista | Archivo |
| --- | --- |
| Escritorio | `docs/screenshots/home-desktop.png` |
| Movil responsive | `docs/screenshots/home-mobile.png` |

![Vista escritorio](docs/screenshots/home-desktop.png)

![Vista movil](docs/screenshots/home-mobile.png)

## Responsive

La pagina esta pensada como desktop first, pero fue ajustada para tablet y movil:

- Desktop: hero en dos columnas, dashboard operacional y metricas horizontales.
- Tablet: secciones en una o dos columnas segun el ancho disponible.
- Movil: menu vertical, botones a ancho completo, cards apiladas y dashboard adaptado sin cortes laterales.
- Tablas anchas: usan scroll horizontal controlado para evitar romper el layout.
- Formularios: pasan a una columna en pantallas chicas.

Se regeneraron capturas en escritorio y movil despues de los ajustes responsive.

## Sistema Visual

Paleta corporativa dark tech usada en la interfaz:

| Uso | Color |
| --- | --- |
| Fondo principal | `#0F172A` |
| Cards | `#1E293B` |
| Hover | `#334155` |
| Primario | `#2563EB` |
| Secundario | `#3B82F6` |
| Texto | `#F8FAFC` |
| Texto secundario | `#94A3B8` |
| Exito | `#10B981` |
| Advertencia | `#F59E0B` |
| Error | `#EF4444` |

## Funcionalidades

- Landing profesional dark mode.
- Logo SVG propio acorde a la identidad visual.
- Hero con dashboard realista del sistema.
- Cards de servicios: incidencias, equipos, inventario y mantenimiento.
- Vista de producto con login visual, roles, CRUD, dashboard y ordenes.
- Panel operativo con tickets, prioridades, responsables y stock.
- Formularios demo para solicitudes, equipos y tareas.
- Persistencia temporal local con `localStorage`.
- Eliminacion individual de registros y limpieza completa.
- Flujo operacional: Solicitud -> Diagnostico -> Asignacion -> Reparacion -> Cierre.

## Modulos Representados

| Modulo | Estado actual | Objetivo |
| --- | --- | --- |
| Landing | Implementado | Presentar el sistema como producto SaaS profesional. |
| Login | Visual estatico | Representar futuro acceso por usuario y clave. |
| Roles | Visual estatico | Mostrar perfiles: administrador, supervisor y tecnico. |
| CRUD inventario | Visual + demo local | Comunicar gestion de activos, estados y acciones. |
| Solicitudes | Demo funcional local | Registrar tickets temporales en el navegador. |
| Equipos | Demo funcional local | Registrar activos con codigo, responsable y condicion. |
| Mantenciones | Demo funcional local | Registrar tareas, encargados y fechas. |
| Dashboard | Visual + contadores | Resumir tickets, activos, tareas, SLA y stock. |
| Flujo | Visual estatico | Explicar el proceso completo de atencion. |

## Logica de la Aplicacion

1. El usuario entra a `/`.
2. Django ejecuta la vista `home`.
3. La vista renderiza `templates/mantenimiento/home.html`.
4. La plantilla carga `static/css/site.css`.
5. La plantilla carga `static/js/dashboard.js`.
6. JavaScript escucha los formularios de la demo.
7. Los datos se guardan temporalmente en `localStorage`.
8. La interfaz actualiza listas, contadores y estado local.

Clave usada en navegador:

```text
gestionMantenimientoLocal
```

## Tecnologias

- Python
- Django
- HTML5
- CSS3 responsive
- JavaScript
- SQLite
- SVG
- LocalStorage

## Instalacion

No abras `templates/mantenimiento/home.html` directamente. Es una plantilla Django y debe ejecutarse desde el servidor.

1. Crear entorno virtual:

```powershell
python -m venv .venv
```

2. Activar entorno virtual:

```powershell
.venv\Scripts\Activate.ps1
```

3. Instalar dependencias:

```powershell
pip install -r requirements.txt
```

4. Ejecutar servidor:

```powershell
cd pagina_curso
python manage.py runserver
```

5. Abrir:

```text
http://127.0.0.1:8000/
```

Tambien puedes usar:

```powershell
.\abrir_pagina.bat
```

## Estructura

```text
.
|-- README.md
|-- abrir_pagina.bat
|-- requirements.txt
|-- docs/
|   `-- screenshots/
|       |-- home-desktop.png
|       `-- home-mobile.png
`-- pagina_curso/
    |-- manage.py
    |-- db.sqlite3
    |-- pagina_curso/
    |-- mantenimiento/
    |-- contactos/
    |-- quienes_son/
    |-- cursos365/
    |-- static/
    |   |-- css/site.css
    |   |-- js/dashboard.js
    |   `-- img/logo-gm.svg
    `-- templates/
        `-- mantenimiento/home.html
```

## Archivos Frontend

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/templates/mantenimiento/home.html` | Plantilla principal. Define la landing, hero, dashboard visual, servicios, panel operativo, formularios y flujo. |
| `pagina_curso/static/css/site.css` | Estilos del sistema: dark mode, responsive, layout, cards, dashboard, formularios, tablas, menu y estados visuales. |
| `pagina_curso/static/js/dashboard.js` | Logica demo: guarda datos en `localStorage`, renderiza registros, actualiza contadores y elimina datos. |
| `pagina_curso/static/img/logo-gm.svg` | Logo vectorial del proyecto, alineado con la paleta dark tech. |
| `abrir_pagina.bat` | Acceso rapido para levantar el servidor local en Windows. |

## Archivos Python

### Raiz Django

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/manage.py` | Comando principal de Django. Sirve para ejecutar servidor, migraciones, tests y tareas administrativas. |

### Configuracion del Proyecto

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/pagina_curso/settings.py` | Configura apps instaladas, base de datos, estaticos, plantillas, idioma y zona horaria. |
| `pagina_curso/pagina_curso/urls.py` | Define las rutas principales del proyecto, incluyendo `/` y `/admin/`. |
| `pagina_curso/pagina_curso/asgi.py` | Punto de entrada ASGI para servidores asincronos. |
| `pagina_curso/pagina_curso/wsgi.py` | Punto de entrada WSGI para despliegues tradicionales. |
| `pagina_curso/pagina_curso/__init__.py` | Marca la carpeta como paquete Python. |

### App `mantenimiento`

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/mantenimiento/views.py` | Contiene la vista `home`, encargada de renderizar la interfaz principal. |
| `pagina_curso/mantenimiento/apps.py` | Configura la app `mantenimiento` dentro de Django. |
| `pagina_curso/mantenimiento/models.py` | Reservado para futuros modelos como Equipo, Solicitud, OrdenTrabajo, Inventario y Mantencion. |
| `pagina_curso/mantenimiento/admin.py` | Preparado para registrar modelos en Django Admin cuando exista CRUD real. |
| `pagina_curso/mantenimiento/tests.py` | Base para pruebas automatizadas de vistas, modelos y flujos. |
| `pagina_curso/mantenimiento/migrations/__init__.py` | Inicializa el paquete de migraciones de la app. |
| `pagina_curso/mantenimiento/__init__.py` | Marca la app como paquete Python. |

### Apps Secundarias

Las apps `contactos`, `quienes_son` y `cursos365` estan creadas como estructura base para crecimiento futuro.

| Archivo | Funcion |
| --- | --- |
| `admin.py` | Registro futuro de modelos en el panel administrativo. |
| `apps.py` | Configuracion de cada app. |
| `models.py` | Definicion futura de tablas. |
| `views.py` | Vistas futuras para paginas o endpoints. |
| `tests.py` | Pruebas automatizadas. |
| `migrations/__init__.py` | Paquete de migraciones. |
| `__init__.py` | Paquete Python. |

## Roadmap

Para convertir este prototipo en un sistema real:

1. Crear modelos Django para usuarios, roles, equipos, solicitudes, ordenes e inventario.
2. Implementar login y permisos por rol.
3. Reemplazar `localStorage` por persistencia en base de datos.
4. Crear CRUD real para solicitudes, equipos, stock y ordenes.
5. Conectar dashboard a datos reales.
6. Agregar busqueda, filtros, paginacion y exportacion.
7. Preparar despliegue publico para portafolio.

## Estado Actual

Proyecto presentable como prototipo visual y funcional local. La interfaz ya es responsive, tiene identidad visual propia, dashboard creible y documentacion preparada para mostrar la logica del sistema.
