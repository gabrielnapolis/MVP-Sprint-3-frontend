# Frontend Angular

# Apresentação 

Esse é o MVP, projeto final do 3° módulo da Pós-Graduação em Engenharia de Software da PUC-RIO.

Os requisitos desse projeto eram que fosse desenvolvida uma aplicação, utilizando componentização.

Nesse contexto foi utilizado todo o conteúdo apresentado ao longo das aulas das matérias de Arquitetura e Projeto de Software, Arquitetura de Microsserviços e Arquitetura de Nuvem e DevOps

<img src="src\assets\img\requisitos.png">



## Execução via Docker

1° - Criar imagem Docker:

    No diretório raiz do projeto, execute o seguinte comando:
    
        docker build -t frontend .

2° - Executar container

        docker run -p 8080:80 frontend



