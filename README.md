# DOE
Aplicacao criada a partir da 3ª Maratona Dev da Rocketseat
Instrutor: [Mayk Brito] ("https://github.com/maykbrito")

## Tecnologias Utilizadas

### Front-end
- **HTML5**
- **CSS3**
- **JS**
- **SQL**
### Back-end
- **JS**
- **Servidor Node.js**
  - Com as dependências **Express, Nodemon e Nunjucks**
- **Banco de Dados Postgres**

## Lista de comandos para o BD
`npm install pg`
`npm start` (realiza a inicialização do BD no terminal Node, utilizado para inicializar a aplicação)

## Dependências

- **express** (para o servidor web)
- **nodemon** (para escutar os arquivos e diretórios, sem precisar reiniciar o nodejs a cada alteração) 
- **nunjucks** (para organizar e manipular os conteúdos HTML de forma dinâmica, através de templates engines).

### Banco de dados Postgres
Ligação através do cliente PostgreSQL para node.

`npm install pg`

Foi criado um banco chamado doe, com uma tabela donors e com as linhas id, name, email e blood.

## Validação de Campos
Se caso algum campo não for preenchido no formulario, então retorna:

`Todos os campos são obrigatórios.`

E se caso houver algum erro no Banco de Dados, então:

`Erro no banco de dados.`

## Footer

Ao final de nossa página existe a exibição dos ultimos doadores, caso sejam preenchidas corretamente todas as infos e houver o click no botão de quero ajudar, logo, será exibido o nome da ultima pessoa que fez o preenchimento do formulario.


