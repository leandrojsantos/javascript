# Intruções para inicialização do projeto (utilizando Docker com Postgres e Sequelize)

**Acessando Diretório**

    $ cd backend

**Baixando dependências**

    $ yarn install

**Criando base de dados com Container Docker: (obs: substituir "nome-database" e "senha-database" para nomes e senhas de sua escolha)**

    $ docker run --name "nome-database" -e POSTGRES_PASSWORD="senha-database" -p 5432:5432 -d postgres:11

Obs: Dentro da database é criado por padrão um bando com o nome "postgres", caso desejo outro nome, necessário alterar ou criar outro utilizando um gerenciador.

**Inicializando a base de dados:**

    $ docker start "nome-database"

**Definindo as variáveis de ambiente:**

Criar arquivo .env na raiz do projeto, seguindo o exemplo do arquivo .env.example, configurando de acordo com suas informações previamente criadas

**Rodando as migrations do projeto, para criação das tabelas (utilizando Sequelize):**

    $ yarn sequelize db:migrate


**Inicializando API:**

    $ yarn run dev
