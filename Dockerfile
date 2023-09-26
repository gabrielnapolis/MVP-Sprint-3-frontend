FROM node:18.12.1 AS build

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para diretório do container
COPY . .

# Instala dependencias utilizando o gerenciador de pacotes do NodeJs
RUN npm install

# Gera o build da aplicação
RUN npm run build

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY nginx-custom.conf /etc/nginx/nginx-custom.conf

COPY --from=build /app/dist/frontend /usr/share/nginx/html/

EXPOSE 80
