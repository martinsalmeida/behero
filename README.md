<h1 align="center">
  <img  alt="BeTheHero" src = "https://user-images.githubusercontent.com/42298239/78999032-31080300-7b20-11ea-8323-dca6117d5f33.png"/>
  <br>
  BE THE HERO
  <h3 align="center">Aplicação para Ongs desenvolvida com ReactJs e React Native 11 Semana OmniStack - RocketSeat</h3>
</h1>

## :computer: Telas da aplicação Web

<h4 align="center">
  <img  alt="BeTheHero" src = "https://user-images.githubusercontent.com/42298239/78999734-a4f6db00-7b21-11ea-9d45-be7e4d9425b7.png"/>
   <br>
  <img  alt="BeTheHero" src = "https://user-images.githubusercontent.com/42298239/78999809-c788f400-7b21-11ea-9fc0-4bde51486cce.png"/>
  <br>
</h4>
  
## :iphone: Telas da aplicação Mobile  
<h4 align="center">  
  <img  alt="BeTheHero" src = "https://user-images.githubusercontent.com/42298239/79001409-cd340900-7b24-11ea-86b5-cb5200516009.png"/>
  <br>
</h4>

## :rocket: Tecnologias

Projeto desenvolvido na 11ª Semana Omnistack, acrescentando a funcionalidade de editar casos, utilizando as seguintes tecnologias:
- ReactJs
- React-Native
- Express
- NodeJS
- Knex
- Mysql
- Celebrate 

## :information_source: Como usar

Para clonar e rodar a aplicação, você precisará [Git](https://git-scm.com), Node.js v10.16 ou superior + Yarn v1.13 ou superior + Expo Desktop e Expo Mobile, Banco de Dados MySql rodando:

```bash
# Clone este repositório
$ git clone https://github.com/martinsalmeida/behero.git

------------------------ Backend ----------------------------
# Entre no repositório backend e instale as dependências
$ cd backend
$ yarn install

# Rode o Mysql e crie um banco de dados com o nome - behero

# Altere o arquivo knesfile.js com as suas configurações:

      connection: {
            database: 'behero',
            user: '<SEU USUÁRIO>',
            password: '<SUA SENHA>'
          },

# Execute as migrations Knex
$ knex migrate:latest

# Rode o backend
$ yarn start

------------------------ Frontend ----------------------------

# Entre no repositório frontend e instale as dependências
$ cd frontend
$ yarn install

# Rode o Fronted
$ yarn start

-------------------------- Mobile ----------------------------

# Entre no repositório mobile e instale as dependências
$ cd mobile
$ yarn install

# Rode o mobile
$ expo start

Obs.: É necessário ter o app do Expo instalado no celular ou o  que simulador do android ou ios,
      já estejam rodando na máquina.  
```

Made with :blush: by Daniel Augusto

