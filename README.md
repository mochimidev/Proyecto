# Gestion de Mantenimiento

Aplicacion web desarrollada con Django para organizar solicitudes de soporte, equipos y tareas de mantenimiento. El proyecto funciona como una base visual y funcional para una mesa de ayuda interna, area tecnica, institucion o pequena organizacion.

La pagina principal incluye paneles conectados que permiten registrar informacion de manera temporal en el navegador mediante `localStorage`. Esto sirve para probar el flujo sin configurar todavia modelos de base de datos para solicitudes, equipos o tareas.

## Vista General

![Vista escritorio](docs/screenshots/home-desktop.png)

![Vista movil](docs/screenshots/home-mobile.png)

## Funcionalidades

- Pagina principal responsive y adaptable a escritorio, tablet y movil.
- Logo propio en formato SVG dentro de los archivos estaticos.
- Panel operativo con contadores conectados a los registros locales.
- Formulario para solicitudes de soporte.
- Formulario para registro de equipos o activos.
- Formulario para tareas de mantenimiento.
- Listado dinamico de registros agregados.
- Eliminacion individual de registros.
- Limpieza completa de datos locales.
- Secciones informativas de servicios, flujo de trabajo y contacto.
- Configuracion regional para Chile: idioma `es-cl` y zona horaria `America/Santiago`.

## Logica de la Aplicacion

El proyecto combina Django para servir la pagina y JavaScript para manejar la interaccion del panel operativo.

1. El usuario entra a `/`.
2. Django ejecuta la vista `home` en `mantenimiento/views.py`.
3. La vista entrega a la plantilla datos estaticos como servicios y pasos del flujo de trabajo.
4. La plantilla `home.html` renderiza el sitio, los formularios y las secciones principales.
5. El archivo `dashboard.js` captura los formularios, guarda los datos en `localStorage` y actualiza contadores/listas en pantalla.
6. El CSS en `site.css` define la identidad visual, responsive design, tarjetas, formularios y paneles.

Actualmente los datos no se guardan en SQLite. Se guardan temporalmente en el navegador. Para persistencia real, el siguiente paso seria crear modelos Django para solicitudes, equipos y tareas.

## Tecnologias

- Python
- Django
- HTML
- CSS
- JavaScript
- SQLite
- SVG

## Instalacion

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

4. Entrar al proyecto Django:

```powershell
cd pagina_curso
```

5. Validar configuracion:

```powershell
python manage.py check
```

6. Ejecutar servidor:

```powershell
python manage.py runserver
```

7. Abrir en el navegador:

```text
http://127.0.0.1:8000/
```

## Estructura Principal

```text
.
|-- README.md
|-- requirements.txt
|-- docs/
|   `-- screenshots/
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
| `pagina_curso/templates/mantenimiento/home.html` | Plantilla principal. Define el header, hero, paneles, formularios, servicios, flujo y contacto. |
| `pagina_curso/static/css/site.css` | Estilos visuales del proyecto: layout responsive, tarjetas, botones, formularios y paneles. |
| `pagina_curso/static/js/dashboard.js` | Logica del panel temporal. Guarda, lee, elimina y renderiza datos desde `localStorage`. |
| `pagina_curso/static/img/logo-gm.svg` | Logo vectorial del sistema. Se usa en la barra superior. |

## Archivos Python

### Raiz Django

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/manage.py` | Utilidad de comandos de Django. Sirve para ejecutar el servidor, validar el proyecto, crear migraciones, correr tests y administrar tareas internas. |

### Configuracion del Proyecto

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/pagina_curso/settings.py` | Configuracion central: apps instaladas, base de datos SQLite, archivos estaticos, idioma, zona horaria, middlewares y plantillas. |
| `pagina_curso/pagina_curso/urls.py` | Define las rutas principales. Conecta `/` con la vista `home` y `/admin/` con el panel administrativo de Django. |
| `pagina_curso/pagina_curso/asgi.py` | Punto de entrada ASGI. Se usa para despliegues asincronos o servidores compatibles con ASGI. |
| `pagina_curso/pagina_curso/wsgi.py` | Punto de entrada WSGI. Se usa para despliegues tradicionales de Django en servidores web. |
| `pagina_curso/pagina_curso/__init__.py` | Marca la carpeta como paquete Python. |

### App `mantenimiento`

| Archivo | Funcion |
| --- | --- |
| `pagina_curso/mantenimiento/views.py` | Contiene la vista `home`. Prepara datos de servicios y flujo de trabajo, y renderiza `home.html`. |
| `pagina_curso/mantenimiento/apps.py` | Configuracion de la app `mantenimiento` para que Django la reconozca. |
| `pagina_curso/mantenimiento/models.py` | Espacio reservado para futuros modelos de mantenimiento, solicitudes, equipos o tareas. Actualmente no define tablas. |
| `pagina_curso/mantenimiento/admin.py` | Archivo para registrar modelos en el panel admin de Django cuando existan modelos reales. |
| `pagina_curso/mantenimiento/tests.py` | Archivo preparado para pruebas automatizadas de la app. |
| `pagina_curso/mantenimiento/migrations/__init__.py` | Inicializa el paquete de migraciones de base de datos. |
| `pagina_curso/mantenimiento/__init__.py` | Marca la app como paquete Python. |

### Apps `contactos`, `quienes_son` y `cursos365`

Estas apps estan creadas como modulos independientes, pero por ahora funcionan como estructura base. Sus archivos cumplen la misma funcion en cada app:

| Archivo | Funcion |
| --- | --- |
| `admin.py` | Permitira registrar modelos en el administrador de Django. |
| `apps.py` | Configura el nombre y metadatos de la app. |
| `models.py` | Espacio para definir tablas de base de datos en el futuro. |
| `views.py` | Espacio para crear vistas y pantallas propias de la app. |
| `tests.py` | Archivo para pruebas automatizadas. |
| `migrations/__init__.py` | Inicializa las migraciones de la app. |
| `__init__.py` | Marca la carpeta como paquete Python. |

## Almacenamiento Temporal

Los paneles actuales guardan informacion con esta clave de navegador:

```text
gestionMantenimientoLocal
```

Esto significa:

- Los datos quedan en el mismo navegador y computador.
- Los datos no se comparten con otros usuarios.
- Los datos no llegan a SQLite ni al servidor Django.
- Al presionar "Limpiar datos", se elimina esa informacion local.

## Proximos Pasos Recomendados

- Crear modelos Django para `Solicitud`, `Equipo` y `Tarea`.
- Reemplazar `localStorage` por guardado real en SQLite.
- Agregar formularios Django o endpoints JSON para registrar datos desde el servidor.
- Conectar los registros al panel admin.
- Agregar autenticacion para usuarios tecnicos y administradores.
- Crear pruebas para vistas, modelos y flujos principales.
