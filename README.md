
# Pokemon Storage System

O Pokemon Storage System é uma API de armazenamento de usuários e seus respectivos Pokémon, criada em Javascript utilizando o padrão REST.

O objetivo do projeto era treinar os conceitos de criptografia simétrica e assimétrica, portanto, todas as rotas de requisição requerem validação por meio de login, senha e/ou token.



## Autores

- [@hiproenca](https://github.com/hiproenca)


## Requisitos de configuração

Todos os dados são armazenados em um sistema de banco de dados relacional PostgreSQL. Utilizei o Beekeeper para a criação do banco de dados e das tabelas. Para testar os endpoints, utilizei o Insomnia. Com a devida adaptação, você pode fazer o código funcionar com o software de sua preferência.

### Bibliotecas utilizadas

[Express](https://expressjs.com/en/5x/api.html)

[Nodemon](https://nodemon.io/)

[Node.bcrypt](https://www.npmjs.com/package/bcrypt)

[JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519)

[node-postgres](https://www.npmjs.com/package/pg)


## Instalação

Todos os pacotes foram instalados diretamente do terminal com o comando npm install. Lista de comandos disponíveis nos requisitos de configuração.


```bash
  npm install 
  
```

para instalar o nodemon como dependência de desenvolvimento: 

```bash
  npm install nodemon -D
  
```
## Documentação da API



#### Login de usuário e senha

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `/login` | `string` | Login de usuário e senha |

#### Cadastro de usuários

```http
  POST /cadastro

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `/cadastro` | `string` | Cadastro de novos usuários|

#### Cadastro de pokemon

```http
  POST /addpokemon
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `/addpokemon` | `string` | Cadastro de novos pokemon|

#### Alterar apelido de pokemon

```http
  PATCH /apelido
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `/addpokemon` | `string` | altera o apelido do pokemon|



#### Retorna lista  de Pokémon

```http
  GET /listar
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | Listar os pokemon do usuário |

#### Deletar um Pokémon

```http
  DEL /deletarpkmn
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token, id`      | `String ,Number` | **Obrigatório**. ID do Pokémon |


## Referência

 - [MDN Docs](https://developer.mozilla.org/pt-BR/)
