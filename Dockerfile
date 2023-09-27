FROM node:18.12.1 AS build

# Cria diretório
RUN mkdir /app

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json para instalar as dependências
COPY package.json package-lock.json ./

# Instala dependencias utilizando o gerenciador de pacotes do NodeJs
RUN npm install

# Copia os arquivos de dependências para diretório do container
COPY . .

# Gera o build da aplicação
RUN npm run build

FROM nginx:alpine

# Copia arquivo de parametrização do Nginx para o diretório necessário
COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove página index padrão do nginx
RUN rm -rf /var/www/frontend/*

# Copia o build para o diretório do Nginx
COPY --from=build /app/dist/frontend /var/www/frontend

# Expõe a aplicação na porta 80
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]