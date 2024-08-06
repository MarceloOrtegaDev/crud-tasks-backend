# Trabajo Integrador - TLP II

## Setup

1. Clona el repositorio en tu máquina local usando 
```bash
git clone https://github.com/MarceloOrtegaDev/crud-tasks-backend.git
```
2. Navega a la carpeta del proyecto usando 
```bash
cd crud-tasks-backend
```
3. Instala todas las dependencias necesarias usando `npm i`.
4. Crea una base de datos MySQL.

## Init

Para iniciar el servidor, sigue estos pasos:

1. Asegúrate de que estás en la carpeta del proyecto en la terminal.
2. Ejecuta esto iniciará el servidor en el puerto que hayas configurado. 

```bash
npm run dev
```

## Endpoints

- `GET /tasks`: Obtiene todas las tareas.
- `GET /tasks/:id`: Obtiene una tarea por su ID.
- `POST /tasks`: Crea una nueva tarea. Requiere un cuerpo de solicitud con los campos `title`, `description` y `isComplete`.
- `PUT /tasks/:id`: Actualiza una tarea existente. Requiere un cuerpo de solicitud con los campos `title`, `description` y `isComplete`.
- `DELETE /tasks/:id`: Elimina una tarea por su ID.
