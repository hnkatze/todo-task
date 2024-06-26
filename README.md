# Todo Task App

Este proyecto es una aplicación de gestión de tareas (todo task) construida con Next.js, Prisma (utilizando SQLite como base de datos) y ShadCN UI. La aplicación está diseñada para operar únicamente con acciones del servidor, evitando el uso de hooks de clientes.

## Tecnologías Utilizadas

- **Next.js**: Framework para React.
- **Prisma**: ORM para Node.js y TypeScript.
- **SQLite**: Base de datos relacional ligera.
- **ShadCN UI**: Biblioteca de componentes de interfaz de usuario.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- Node.js (v20.11.1 o superior)
- npm o yarn

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/tu-usuario/todo-task-app.git
   cd todo-task-app
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

   o si usas yarn:

   ```sh
   yarn install
   ```

3. **Configura Prisma:**

   Genera el archivo de configuración de Prisma:

   ```sh
   npx prisma init
   ```

   Luego, en `prisma/schema.prisma`, define tu esquema de base de datos:

   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }

   generator client {
     provider = "prisma-client-js"
   }

   model Task {
     id          Int      @id @default(autoincrement())
     name        String
     description String
     priority    String @deaful("low")
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
   }
   ```

4. **Migra la base de datos:**

   ```sh
   npx prisma migrate dev --name init
   ```

5. **Genera el cliente de Prisma:**

   ```sh
   npx prisma generate
   ```

## Desarrollo

Para ejecutar la aplicación en modo de desarrollo:

```sh
npm run dev
```
