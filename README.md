# Frontend Angular

Para executar esse projeto local é necessário:

1° - Instalação do NodeJS:
    
    https://nodejs.org/en/download

2° - Instalação do CLI do Angular:
    
    https://angular.io/guide/setup-local

        - npm install -g @angular/cli

3° - Instalação de dependencias do projeto:

    No diretório raiz, execute o seguinte comando: 
        
        - npm install

4° - Executar o projeto:

    No mesmo diretório, execute o seguinte comando:

        - ng serve


## Execução via Docker

1° - Criar imagem Docker:

    No diretório raiz do projeto, execute o seguinte comando:
    
        docker build -t frontend .

2° - Executar container

    docker run -p 8080:80 frontend



