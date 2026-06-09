# 🌿 VainillaTech Chocó - Sistema de Gestión (Backend)

API RESTful desarrollada con **NestJS** y **PostgreSQL** para la gestión, trazabilidad y control de calidad del curado de vainilla, diseñada para erradicar pérdidas por humedad extrema.

## 🚀 Tecnologías Core
- **Framework:** NestJS 11
- **Base de Datos:** PostgreSQL
- **ORM:** TypeORM
- **Validación:** class-validator & class-transformer

## ⚙️ Configuración del Entorno Local

Para que la API funcione correctamente en tu máquina, sigue estos pasos:

1. **Clonar e instalar dependencias:**
   Abre la terminal en esta carpeta y ejecuta:
   ```bash
   npm install

Base de Datos (PostgreSQL):
Abre pgAdmin y crea una base de datos. Regla estricta: El nombre debe ser exactamente vainillaTech (respetando la "T" mayúscula).

Variables de Entorno:
Crea un archivo .env en la raíz de esta carpeta (backend-gestion) con tus credenciales locales:

Fragmento de código
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=tu_contraseña_aqui
DB_NAME=vainillaTech


Levantar el Servidor:

npm run start:dev


Nota: El servidor corre en el puerto 3001 para evitar conflictos, y tiene CORS habilitado para conectar con Angular sin bloqueos.

🧪 Pruebas de Endpoints
Puedes probar las rutas de creación (/usuarios, /lotes, /logs-proceso, /reportes-calidad) utilizando Postman o el archivo api-tests.http incluido en este repositorio (requiere la extensión REST Client).

---
