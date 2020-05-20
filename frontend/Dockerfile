# FASE BUILD
FROM node:12-slim AS build
WORKDIR /app
COPY  package*.json ./
COPY src/ src/
RUN npm install -g parcel-bundler
RUN parcel build src/index.html -d dist



# FASE PRODUCTION
FROM nginx:1.17.6
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]