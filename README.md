# Apresentação 

Esse é o MVP, projeto final do 3° módulo da Pós-Graduação em Engenharia de Software da PUC-RIO.

Os requisitos desse projeto eram que fosse desenvolvida uma aplicação, utilizando componentização.

Como mostrado na imagem a seguir, era necessário o desenvolvimento de 03 componentes, sendo eles:

**Componente A:** Desenvolvimento de uma API REST implementada em Python e Flask ou uma interface do usuário, utilizando HTML, CSS e JavaScript com alguma biblioteca ou framework de sua preferência (Angular, React, Vue, etc).

**Componente B:** Uso de uma API externa pública e que ofereça um serviço não pago.

**Componente C:** API REST ou GraphQL. 

Nesse contexto foi utilizado todo o conteúdo apresentado ao longo das matérias de Arquitetura e Projeto de Software, Arquitetura de Microsserviços e Arquitetura de Nuvem e DevOps.

<img src="src\assets\img\requisitos.png">

Para esse projeto, foi utilizada a seguinte arquitetura:

**Componente A:** Frontend em Angular

**Componente B:** PokeApi, API pública onde é possível consultar todos os pokemons, juntamente com seus atributos como: imagens, habilitades, tipos, altura, peso, fraquezas.

**Componente C:** API REST desenvolvida com Python e Flask

## Execução via Docker

1° - Criar imagem Docker:

    No diretório raiz do projeto, execute o seguinte comando:
    
        docker build -t frontend .

2° - Executar container

        docker run -p 8080:80 frontend



