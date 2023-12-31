# Apresentação 

Esse é o MVP, projeto final do 3° módulo da Pós-Graduação em Engenharia de Software da PUC-RIO.

Os requisitos deste projeto eram que fosse desenvolvida uma aplicação, utilizando componentização.

Como mostrado na imagem a seguir, era necessário o desenvolvimento de 03 componentes, sendo eles:

* **Componente A:** Desenvolvimento de uma API REST implementada em Python e Flask ou uma interface do usuário, utilizando HTML, CSS e JavaScript com alguma biblioteca ou framework de sua preferência (Angular, React, Vue, etc).

* **Componente B:** Uso de uma API externa pública e que ofereça um serviço não pago.

* **Componente C:** API REST ou GraphQL. 

Nesse contexto foi utilizado todo o conteúdo apresentado ao longo das matérias de Arquitetura e Projeto de Software, Arquitetura de Microsserviços e Arquitetura de Nuvem e DevOps.

<img src="src\assets\img\requisitos.png">

## Para esse projeto, foi utilizada a seguinte arquitetura

* **Componente A:** Frontend em Angular.

* **Componente B:** PokeApi, API pública onde é possível consultar todos os pokemons, juntamente com seus atributos como: imagens, habilidades, tipos, altura, peso, fraquezas. Documentação: https://pokeapi.co/

* **Componente C:** API REST desenvolvida com Python e Flask. 
Repositório: https://github.com/gabrielnapolis/MVP-Sprint-3-backend

## Sobre este repositório

Esse repositório é referente ao Componente A, o frontend da aplicação, desenvolvido em Angular. Através dele, realizamos chamadas para o Componente C, o backend da aplicação, e também para o Componente B, a PokeApi.

O intuito desse sistema foi realizar um cadastro de treinadores Pokemon, onde é possível realizar seu cadastro e adicionar pokemons a sua pokédex.

<img src="src\assets\img\portfolio-login.png">

Após isso, o treinador pode adicionar e remover pokemons de sua pokédex.

Na página onde são listados todos os Pokemons, foi usado os seguintes endpoints:

Endpoint onde é possível consultar uma determinada quantidade de pokemons, informando a quantidade no parâmetro "limit"
    
    Exemplo: https://pokeapi.co/api/v2/pokemon/?limit=100

Com essa chamada, é realizada a listagem inicial, mostrando todos os pokemons disponíveis para o treinador adicionar a sua pokédex.

<img src="src\assets\img\portfolio.png">


Após a chamada de todos, é possível realizar uma chamada indivídual, clicando no ícone de informações.

    Exemplo: https://pokeapi.co/api/v2/pokemon/1

Com essa chamada, passando o código do pokemon, é realizada a consulta de informações como: tipos, fraquezas, peso, altura, habilidades, e imagens.

Dessa forma, é exibido o seguinte modal na tela:

<img src="src\assets\img\portfolio2.png">


## Execução via Docker

1° - Criar imagem Docker:

    No diretório raiz do projeto, execute o seguinte comando:
    
        docker build -t frontend .

2° - Executar container

        docker run -p 80:80 frontend



