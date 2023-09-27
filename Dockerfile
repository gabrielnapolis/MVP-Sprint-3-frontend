FROM node:18.12.1 AS build

RUN mkdir /app
# Define diretório de trabalho dentro do container
WORKDIR /app

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Instala dependencias utilizando o gerenciador de pacotes do NodeJs
RUN npm install

# Copia os arquivos de dependências para diretório do container
COPY . .

# Gera o build da aplicação
RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/frontend/*

# Copy from the stage 1
COPY --from=build /app/dist/frontend /var/www/frontend

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]