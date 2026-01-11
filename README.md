# Visma Challenge Backend

## 📋 Prerequisitos

- **Node.js** (versión 16 o superior)
- **MySQL** (versión 5.7 o superior)
- **npm** (incluido con Node.js)

El puerto 3000 (localhost) debe estar disponible para la correcta ejecución.

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd vismaChallengeBack
```

2. **Instalar dependencias**
```bash
npm install
```

## 📦 Dependencias

### Dependencias de producción:
- **express** - Framework web para Node.js
- **mysql2** - Driver MySQL para Node.js
- **cors** - Middleware para habilitar CORS
- **dotenv** - Manejo de variables de entorno

### Dependencias de desarrollo:
- **nodemon** - Monitor de cambios para desarrollo

3. **Configurar variables de entorno**
Crear archivo `.env` en la raíz del proyecto (ver sección [Variables de Entorno](#-variables-de-entorno))

4. **Configurar base de datos**
Asegurarse de que MySQL esté ejecutándose y crear la base de datos necesaria.

## 🔧 Scripts disponibles

```bash
# Iniciar servidor en producción
npm start

# Iniciar servidor en modo desarrollo (con nodemon)
npm run dev
```

## 🔐 Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
# Configuración de Base de Datos
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password_mysql
DB_NAME=ToDoApp

```

### ⚠️ Importante:
- Reemplazar `tu_password_mysql` con tu password real de MySQL
- El archivo `.env` está en `.gitignore` por seguridad
- Asegurarse de que la base de datos `ToDoApp` exista en MySQL

## 🗄️ Configuración de Base de Datos

### Conexión requerida:
- **Host**: 127.0.0.1 (localhost)
- **Puerto**: 3306
- **Usuario**: root
- **Base de datos**: ToDoApp

### Tablas necesarias:
El proyecto asume que las siguientes tablas ya están creadas:

- **users** (con columnas: id, name, email, active, created_at)
- **tasks** (con columnas: id, title, description, completed, active, completed_at, user_id)

Caso contrario, ejecutar los siguientes comandos:

CREATE DATABASE app_to_do;

USE app_to_do;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    active BOOLEAN,
    CONSTRAINT pk_users PRIMARY KEY (id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(500),
    assigned_user_id INT NOT NULL,
    status BOOLEAN NOT NULL,
    created_at DATETIME NOT NULL,
    CONSTRAINT pk_tasks PRIMARY KEY (id),
    CONSTRAINT fk_tasks_users
        FOREIGN KEY (assigned_user_id)
        REFERENCES users(id)
);

## 🚀 Uso

1. **Iniciar el servidor**
```bash
npm run dev
```

2. **Verificar conexión**
El servidor estará disponible en `http://localhost:3000`
En consola deberías ver: "✅ Conexión a MySQL exitosa"

## 📡 API Endpoints

### Usuarios
- `POST /users` - Crear nuevo usuario
- `GET /getUsers` - Obtener lista de usuarios activos

### Tareas
- `POST /task` - Crear nueva tarea
- `GET /getTasks` - Obtener lista de tareas
- `PUT /tasks/:id/complete` - Marcar tarea como completa

### General
- `GET /` - Endpoint de prueba

## 🛠️ Desarrollo

Para desarrollo activo, usar:
```bash
npm run dev
```

Esto iniciará el servidor con nodemon, que se reiniciará automáticamente cuando detecte cambios en los archivos.

## 🔒 Seguridad

- Las queries están parametrizadas para prevenir SQL injection
- Variables sensibles están en `.env` y no se suben al repositorio
- CORS configurado para permitir solo orígenes específicos

## 🐛 Troubleshooting

### Error de conexión MySQL:
- Verificar que MySQL esté ejecutándose
- Comprobar credenciales en `.env`
- Asegurar que la base de datos `ToDoApp` existe

### Puerto ocupado:
- Cambiar puerto en `.env` agregando `PORT=otro_puerto`

### Dependencias:
- Ejecutar `npm install` si faltan dependencias
- Verificar versión de Node.js (mínimo v16)

