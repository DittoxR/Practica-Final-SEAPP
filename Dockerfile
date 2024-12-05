# Usar una imagen base de Node.js
FROM node:20

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

# Comando para iniciar la app
CMD ["node", "src/app.js"]
