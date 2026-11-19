
![Avance 2](https://img.shields.io/badge/avance-2-brightgreen?style=flat-square)

# ConectaVoluntariado CR

**Proyecto Integrador 1 · SOFT-11C1 · 2026-C3**

## Equipo 04

- Leidy Fajardo Sanchez — lfajardos@ucenfotec.ac.cr
- David Cordero Navarro — davidcnc22@gmail.com
- Mario Castro Chacon — mcastroch@ucenfotec.ac.cr

## Descripción del proyecto

ConectaVoluntariado CR es una plataforma web orientada a
conectar personas interesadas en el voluntariado con
actividades comunitarias en Costa Rica.

El proyecto permite consultar actividades, filtrarlas
por área temática y completar un formulario de
inscripción con validaciones mediante JavaScript.

## Avance 2 - Implementación Frontend

En este avance se implementaron las siguientes
funcionalidades:

- Página de inicio con navegación.
- Visualización dinámica de actividades.
- Carga de datos mediante fetch() y response.json().
- Lectura de actividades desde un archivo JSON local.
- Filtro de actividades por área temática.
- Visualización de fecha, cupos y estado.
- Formulario de inscripción.
- Selección dinámica de actividades disponibles.
- Validaciones mediante JavaScript y expresiones regulares.
- Mensajes de error y éxito utilizando SweetAlert2.
- Creación de un objeto JavaScript de inscripción.
- Conversión del objeto mediante JSON.stringify().
- Diseño adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- SweetAlert2
- Visual Studio Code
- Live Server
- Git y GitHub

## Estructura del proyecto

```text
Conecta-voluntariado-cr-equipo4/
├── css/
│   └── estilos.css
├── data/
│   └── actividades.json
├── docs/
│   ├── requerimientos/
│   └── requirements/
├── html/
│   ├── index.html
│   ├── actividades.html
│   └── inscripcion.html
├── js/
│   ├── actividades.js
│   ├── data_actividades.js
│   └── inscripcion.js
└── README.md
```

Nota: data_actividades.js es un archivo de una
implementación anterior. Las páginas de actividades
e inscripción cargan sus datos desde actividades.json.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio desde GitHub.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar la extensión Live Server si no está instalada.
4. Abrir el archivo html/index.html.
5. Hacer clic derecho y seleccionar
   "Open with Live Server".
6. Utilizar el menú de navegación para acceder
   a las páginas Actividades e Inscripción.

No se recomienda abrir los archivos HTML directamente
con file://, ya que fetch() necesita un servidor local.

## Pruebas de funcionamiento

### Actividades

- Cargar las cinco actividades desde actividades.json.
- Filtrar actividades por área temática.
- Mostrar un mensaje cuando no existan resultados.
- Visualizar fecha, cupos y estado.

### Inscripción

- Validar que el nombre tenga al menos 3 caracteres.
- Validar el formato del correo mediante RegExp.
- Validar que el teléfono tenga exactamente 8 dígitos.
- Exigir la selección de una actividad válida.
- Validar que la motivación tenga al menos 20 caracteres.
- Exigir la confirmación de la información.
- Mostrar mensajes mediante SweetAlert2.
- Generar el objeto de inscripción en la consola.
- Convertir el objeto utilizando JSON.stringify().

Las inscripciones son demostrativas y no se almacenan
de forma permanente.

## Documentación

La documentación del proyecto se encuentra en docs/.

### Especificación de Requisitos de Software (ERS)

[Consultar ERS del Avance 1](https://github.com/lfajardos-crypto/Conecta-voluntariado-cr-equipo4/blob/63f4800b8a72aba293f2d53696f639d44fb412b7/docs/requirements/ERS-ConectaVoluntariado-Equipo04-v1.0..docx)

La ERS se actualizará con las correcciones
solicitadas por el docente.

## Repositorio

https://github.com/lfajardos-crypto/Conecta-voluntariado-cr-equipo4
```
