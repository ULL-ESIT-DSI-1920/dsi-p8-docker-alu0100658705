FROM node:12-slim
LABEL author="Pablo Beth"

# Directorio para la app
WORKDIR /usr/src/app

# Copiamos los ficheros fuentes e instalamos las dependencias
COPY  package*.json ./
COPY data.json .
COPY server.js .

RUN npm install

# Indicamos el puerto que se abre
EXPOSE 8081

CMD [ "node", "server.js"]