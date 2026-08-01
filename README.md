# CRUD Contact List API

API REST simple para gestionar una lista de contactos (Create, Read, Update, Delete), construida con Node.js y Express.

## Instalación

```bash
npm install
npm start
```

Servidor disponible en `http://localhost:3000`.

## Interfaz gráfica

Al entrar a `http://localhost:3000` en el navegador se muestra una interfaz web
(HTML + JS, servida por Express desde `public/index.html`) para agregar, editar,
listar y eliminar contactos sin necesidad de usar curl o Postman.

## Endpoints

| Método | Ruta            | Descripción                  |
|--------|-----------------|-------------------------------|
| POST   | /contacts       | Crear un contacto             |
| GET    | /contacts       | Listar todos los contactos    |
| GET    | /contacts/:id   | Obtener un contacto por ID    |
| PUT    | /contacts/:id   | Actualizar un contacto        |
| DELETE | /contacts/:id   | Eliminar un contacto          |

## Ejemplo de body (POST/PUT)

```json
{
  "name": "Ana Pérez",
  "phone": "809-555-1234",
  "email": "ana.perez@example.com"
}
```

## Flujo de trabajo

Este proyecto sigue la metodología **Git Flow**:

- `main`: versión estable / producción.
- `develop`: integración de nuevas funcionalidades.
- `qa`: validación previa a producción.
- `feature/*`: nuevas funcionalidades.
- `hotfix/*`: correcciones urgentes.
