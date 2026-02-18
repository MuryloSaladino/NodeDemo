# Anotações sobre o tutorial:

## package.json 

+ Para instalar as dependencias (bibliotecas) que se encontram no `"dependencies"`, use `npm i <nome da lib>`.
+ Para instalar as dependencias (bibliotecas) que se encontram no `"devDependencies"`, use `npm i -D <nome da lib>`.
+ Os atributos que se encontram no `"scripts"` são comandos que rodamos escrevendo `npm run <nome do comando>`.

## package-lock.json

+ Não se preocupe com esse, é só informações sobre a instalação das dependencias.

## .env & .env.example

+ Configuração de variáveis personalizadas do ambiente. Como o `.env` está no `.gitignore`, o `.env.example` serve para dizer quais variáveis devem ser configuradas para o funcionamento correto da aplicação.

## src

+ Toda a lógica da aplicação
