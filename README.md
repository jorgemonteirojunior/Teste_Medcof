# Descrição
Este repositório contém testes automatizados usando o Cypress para validar a funcionalidade de cadastro na MedCof Simulado. Certifique-se de seguir as instruções de configuração e execução dos testes para garantir a qualidade do software.

## Como instalar e executar
1. Clone o projeto
2. Rode o comando `npm install` para instalar as dependencias
3. Use npx cypress open para abrir a aplicação 
4. Use o comando `npm run recordTestDashCypress ` para rodar em modo headlees e gerar as evidencias 
4. Acesse o link https://cloud.cypress.io/projects/pc2qqc para visualizar as evidencias e o dashboard



## Pré-requisitos
Antes de executar os testes Cypress, certifique-se de que o seguinte esteja configurado em seu ambiente de desenvolvimento:

- Node.js instalado ([Node.js](https://nodejs.org/))
- Cypress instalado globalmente ou localmente no projeto ([Cypress](https://www.cypress.io/))

## Estrutura do Projeto
O projeto de automação é organizado da seguinte forma:

- `cypress/e2e`: Esta pasta contém os arquivos de teste Cypress.
- `cypress/support`: Aqui esta armazenado, comandos personalizados e elementos separados por pagina.
- `cypress.json`: Arquivo de configuração Cypress para definir configurações globais.

## Testes e Validações Disponíveis

### Validação da Página Inicial
- `validarPaginaInicialCarregada()`: Este teste verifica se a página inicial foi carregada corretamente, verificando a visibilidade de elementos chave.

### Ação de ir para pagina do Simulado
- `clicaLinkMdCofSimulado()`: Este teste executa a ação de clicar no link para redirecionamento para a pagania de Simulado, validando antes se estou clicando no link com o nome do conteudo desejado.

### Valido se estou na pagina correta
- `validaEDirecionaParaAcessarConteudo()`: Este valido se fui redirecionado para a tela correta.

### Validação de incrição
- `criarCadastro(palavraChave)`: Realizo a incrição e verifico se a mensagem de confirmação esta com os dados que informei.