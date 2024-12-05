# Usar una imagen base más reciente de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Instalar netcat para verificar conectividad
RUN apt-get update && apt-get install -y netcat

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Exponer el puerto que la aplicación va a usar
EXPOSE 3000

# Ejecutar la aplicación
CMD ["node", "src/app.js"]
