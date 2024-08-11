
# Bookstore Management

Este é um projeto simples de gerenciamento de uma livraria usando Node.js e Express, com integração ao banco de dados MongoDB através do Mongoose.

## Descrição

O **Bookstore Management** é uma API que permite gerenciar autores e livros em uma livraria. A API fornece endpoints para criar, ler, atualizar e deletar informações sobre autores e livros.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
BOOKSTORE
├── src
│   ├── config
│   │   └── dbConnect.js       # Conexão com o banco de dados MongoDB
│   ├── controllers
│   │   ├── authorController.js # Controlador para autores
│   │   └── bookController.js   # Controlador para livros
│   ├── models
│   │   ├── author.js           # Modelo de Autor
│   │   └── book.js             # Modelo de Livro
│   ├── routes
│   │   ├── authorRoutes.js     # Rotas relacionadas aos autores
│   │   └── bookRoutes.js       # Rotas relacionadas aos livros
│   └── app.js                 # Configuração do aplicativo Express
├── .env                        # Variáveis de ambiente
├── .gitignore                  # Arquivos e pastas ignorados pelo Git
├── package.json                # Configurações do NPM e dependências
├── package-lock.json           # Lockfile do NPM
└── server.js                   # Inicialização do servidor Express
```

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   https://github.com/RodigoLima/BookStore.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd bookstore
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```bash
   MONGODB_URI=<sua_uri_mongodb>
   PORT=3000
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3000`.

## Dependências

- **dotenv**: Gerenciamento de variáveis de ambiente.
- **express**: Framework para construir aplicações web em Node.js.
- **mongodb**: Driver oficial do MongoDB para Node.js.
- **mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.
- **nodemon**: Utilitário para reiniciar automaticamente o servidor ao detectar mudanças nos arquivos.

## Scripts

No `package.json`, você encontrará os seguintes scripts:

- **dev**: Inicia o servidor usando o Nodemon, que reinicia automaticamente o servidor ao detectar mudanças.

## Autor

Rodrigo Lima

## Licença

Este projeto está licenciado sob a licença ISC.
