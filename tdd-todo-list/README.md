<h1 align="center">
   <a href="#" alt="">Test Driven Development com Node</a>
</h1>
 
<h4 align="center">
 🚧 concluído 🚀 🚧
</h4>

  * [Sobre o projeto](#-sobre-o-projeto)
  * [Funcionalidades](#-funcionalidades)
  * [Como executar o projeto](#-como-executar-o-projeto)
    * [Pré-requisitos](#pré-requisitos)
    * [Rodando a aplicação](#user-content--rodando-a-aplicação)
  * [Tecnologias](#-tecnologias)

---
## 💻 Sobre o projeto
 
Projeto desenvolvido para mostrar a importância e impacto de teste unitário na aplicação.
 
---
## ⚙️ Funcionalidades
 
- [x] 100% código coberto por testes usando as bibliotecas: mocha, chai, locks, nyc, sinon.
- [x] teste seguindo o modelo de negócios de todo-list.
- [x] usando lokijs é possível testar sem banco de dados.
---
## 🚀 Como executar o projeto
### Pré-requisitos
 
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js ver 14.x.x](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
 
#### 🎲 Rodando a aplicação
 
```bash
 
# Clone este repositório
$ git clone git@github.com:leandrojsantos/javascript.git

# Acesse a pasta do projeto no terminal/cmd
$ cd tdd-todo-list

# Instale as dependências
$ npm install

# Executa a aplicação em modo de teste
$ npm test

# Executa a aplicação em modo de teste mas com reload ligado do mocha, para alterações
$ npm run test:dev

# Executa a aplicação em modo de test e também executa com converage/nyc, onde se tem cobertura dos testes em html na pasta que eles criam 
$ npm run test:cov
 
```
 
---
## 🛠 Tecnologias
 
As seguintes ferramentas foram usadas na construção do projeto:
 - [NodeJS](https://nodejs.org/en/)
 - [mocha](https://mochajs.org/),
 - [chai](https://www.chaijs.com/),
 - [lokijs](https://loki.js.org/),
 - [nyc](https://istanbul.js.org/si),
 - [sinon](https://sinonjs.org/)