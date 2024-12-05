# Usar una imagen base de Node.js
FROM node:20

# Instalar MySQL
RUN apt-get update && apt-get install -y mysql-server

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package*.json ./ 

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto 3000 (configurado en tu app)
EXPOSE 3000

# Comando para iniciar la app y MySQL
CMD service mysql start && node src/app.js
