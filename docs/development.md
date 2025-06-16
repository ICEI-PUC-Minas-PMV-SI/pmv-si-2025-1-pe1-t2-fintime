# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário visualize a distribuição dos gastos por categoria através de gráficos | Rodrigo | home.js |
|RF-002| A aplicação deve permitir que o usuário adicione cartões | Monaliza | addcartoes/script.js |
|RF-003| A aplicação deve permitir que o usuário visualize e administre cartões de crédito cadastrados localmente, com gráficos e interface de edição/remoção de dados. | Monaliza | cartoes/script.js |
|RF-004| A aplicação deve receber dados do usuário, validar e salvar as transações | Octávio e Mariana | add_transaction.js |
|RF-005| A aplicação deve apresentar visualmente a distribuição das despesas por categoria em um gráfico | Octávio e Mariana | doughnut.js |
|RF-006| A aplicação deve permitir o carregamento e exibição de transações financeiras registradas pelo usuário. | Octávio e Mariana | expenses.json |
|RF-007| A aplicação deve carregar, exibir e buscar despesas, além de navegar para uma lista completa | Octávio e Mariana | filterExpenses.js |
|RF-008| A aplicação deve carregar as despesas, mostrá-las em uma tabela, permitir a busca por texto e exportar os dados para um arquivo CSV | Octávio e Mariana | full_list.js |
|RF-009| A aplicação deve apresentar visualmente os gastos semanais de um determinado mês | Octávio e Mariana | graph.js |



## Descrição das estruturas:




## Cartão
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| bandeira     | String            | Nome da bandeira do cartão       | "Visa"                                              |
| nome         | String            | Nome fornecido pelo usuário      | "Cartão do Itaú"                                   |

## Gráfico de Limite de Cartões
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| label          | String | Nome do cartão (campo nome ou bandeira) usado na legenda do gráfico       | "Nubank"                                              |
| data          |  Number       | Distribuição do limite nos meses                       | "1500, 1500..."                                   |

## Transação
| **Nome**    | **Tipo**         | **Descrição**                             | **Exemplo**              |
|:-----------:|------------------|-----------------------------------------|--------------------------|
| description | String           | Descrição da transação                   | "Compra no supermercado"  |
| category    | String           | Categoria da transação                   | "Alimentação"            |
| type        | String            | Tipo da transação (ex: receita ou despesa) | "despesa"             |
| date        | String (ISO)      | Data da transação no formato ISO (YYYY-MM-DD) | "2025-06-16"          |
| value       | Number (Decimal) | Valor da transação                       | 150.50                   |

## Funções e Variáveis do Filtro de Despesas

| **Nome**    | **Tipo**         | **Descrição**                           | **Exemplo**              |
|:-----------:|------------------|-----------------------------------------|--------------------------|
| expenses    | Array            | Armazena as despesas carregadas         | `[ { date: '2023-01-01', description: 'Uber', ... } ]` |
| currentHighlight | Elemento DOM ou null | Guarda a linha atualmente destacada no filtro   | `null` ou `<tr class="highlight">`    |
| loadData         | Função             | Carrega dados do arquivo JSON e renderiza tabela| —                                       |
| renderExpenses   | Função             | Exibe as despesas na tabela, com limite opcional| —                                                    |
| formatCurrency   | Função             | Formata número para moeda brasileira             | `R$ 100,00`                            |
| searchExpenses   | Função             | Pesquisa e destaca linha que contém o termo buscado | —                                   |
| setupViewAllButton | Função           | Configura botão para mostrar todas despesas em outra página | —                           |







