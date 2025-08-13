
# Teste Outsera Back-end - API Golden Raspberry Awards
Projeto de API REST para possibilitar a leitura da lista de indicados e vencedores da categoria Pior Filme do Golden Raspberry Awards.

## Descritivo dos requisitos
- API construída seguindo o nível 2 de maturidade de Richardson
- Testes de integração que garantem o retorno esperado dos dados da aplicação
- Toda vez que o proejto é iniciado, ele cria a base de dados no SQLite, cria a tabela "movies" e popula com o dados do arquivo `/data/movielist.csv`. Caso a base já tenha sido criado, apenas faz a conexão com a mesma, e ignora a criação da tabela e importação dos dados

## Stack
- Framework: Express.js
- Banco de dados em memoria: SQLite
- Testes de integração: Jest + supertest

## Pré-requisitos para execução
- NodeJS v18 ou maior

## Estrutura de pastas
- `/data`  Arquivo CSV para popular a base de dados do projeto
- `/tests`  Testes automatizados
- `/src`  Código fonte do projeto
    - `/controllers`  Arquivos responsáveis pela entra e saída de dados, gerando sucesso ou erro na chamada
    - `/database`  Arquivos para setup e conexão com a base local SQLite
    - `/models`  Arquivos para manipulação de dados direto com o banco de dados (CRUD)
    - `/routes`  Arquivos de rotas HTTP
    - `/services`  Arquivos contendo a lógica de negócio do projeto, responsáveis pelo processamento de dados

## Execução do projeto

1. Instalar as dependências do projeto usando o NPM:
```
npm install
```

2. Iniciar o projeto:
```
npm start
```

3. Após rodar o projeto, acessar o endpoint no link:
`http://localhost:3000/producers/interval-awards`

## Exemplo de retorno
```json
{
  "min": [
    {
      "producer": "Producer A",
      "interval": 1,
      "previousWin": 2000,
      "followingWin": 2001
    }
  ],
  "max": [
    {
      "producer": "Producer B",
      "interval": 10,
      "previousWin": 1990,
      "followingWin": 2000
    }
  ]
}
```

## Testes de integração

Escrevi um teste para garantir que o retorno da API está conforme solicitado nos requisitos do projeto e sempre será a mesma, independente dos dados que são importados no CSV.

Para rodar os testes de integração, execute o comando abaixo:
```
npm test
```

## Solução de problemas

A porta padrão do projeto é 3000. Para altera-la, execute o comando abaixo:
```
PORT=8000 npm start
```