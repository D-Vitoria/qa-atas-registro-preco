# Plano de Testes – Consulta de Atas de Registro de Preço

Este repositório contém o plano de testes documentado e os scripts de automação em Cypress referentes à funcionalidade de Consulta de Atas de Registro de Preço.

O objetivo é demonstrar uma abordagem estruturada de QA, cobrindo testes funcionais, usabilidade, performance e segurança, com apoio de automação para os principais cenários.



## Escopo
Funcionalidades contempladas:
- Listagem de atas com colunas principais
- Busca por Nº Ata e Descrição
- Filtro por vigência (vigentes / vencidas)
- Visualização de detalhes de uma ata
- Exportação em PDF e XLSX
- Paginação e navegação



## Tecnologias Utilizadas
- Cypress – Automação de testes end-to-end
- Node.js – Ambiente de execução
- JavaScript – Linguagem utilizada nos scripts



## Estrutura do Repositório
- `cypress/e2e/`: Casos de teste automatizados
- `cypress/support/`: Configurações do Cypress
- `docs/`: Documentação (Plano de Testes)



## Como rodar
1. Instale dependências:
   ```bash
   npm install
   ```

2. Rode os testes:
   ```bash
   npx cypress open
   ```



## Plano de Testes

O documento completo encontra-se em:  
`/docs/Plano_Testes_Atas_DianaVitoria.docx`

Nele estão descritos:

- Cenários de teste (funcionais, usabilidade, performance e segurança)
- Critérios de aceite
- Riscos e mitigações
- Evidências esperadas


## Cenários Automatizados

Os testes automatizados validam cenários como:

- Exibição correta das colunas na listagem
- Paginação com 25 registros
- Busca por número de ata válido
- Mensagem ao buscar termo inexistente
- Exportação de ata em PDF/XLSX


## Autor

Projeto desenvolvido por **Diana Vitória** como parte de um case prático para processo seletivo em QA.

