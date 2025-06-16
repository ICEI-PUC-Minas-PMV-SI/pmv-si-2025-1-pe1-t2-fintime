# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em criar conta <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar".
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

### Testes Unitários Realizados

| Função Testada           | Cenário de Teste                          | Resultado     |
|--------------------------|-------------------------------------------|---------------|
| `formatCurrency()`       | Formatação de valores positivos (R$ 1234,56) | ✅ Sucesso    |
| `formatCurrency()`       | Formatação de valores negativos (-R$ 789,01) | ✅ Sucesso    |
| `formatCurrency()`       | Formatação de valor zero (R$ 0,00)        | ✅ Sucesso    |
| `formatCurrencyForExport()` | Formatação para exportação (1234.56)      | ✅ Sucesso    |
| `filterExpenses()`       | Busca vazia mostra todos os registros      | ✅ Sucesso    |

### Testes Funcionais Verificados

| Funcionalidade         | Verificação                               | Resultado     |
|------------------------|-------------------------------------------|---------------|
| Renderização de gastos | Listagem completa aparece corretamente    | ✅ Sucesso    |
| Busca                  | Filtra registros conforme termo digitado | ✅ Sucesso    |
| Destaque na busca      | Registros encontrados são destacados      | ✅ Sucesso    |
| Exportação CSV         | Gera arquivo com dados corretos           | ✅ Sucesso    |

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

Estratégia de Testes: Focamos em funções puras (formatCurrency, filterExpenses) com testes manuais simples. Como ponto forte, foi verificada a lógica básica. Já como algo que poderia ser implementado no futuro, ressalta-se a automação e cobertura abrangente. Melhorar com frameworks (Jest) e testes de integração.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1 | Encontre todas as transações da categoria "Alimentação" nos últimos 30 dias |
| 2 | Exporte um relatório CSV com suas transações do mês atual |

## Registro de Testes de Usabilidade

**Cenário 1:** Filtro por categoria "Alimentação"

| Usuário | Sucesso | Satisfação (1-5) | Tempo |
|---------|---------|------------------|-------|
| 1 | ✅ | 5 | 22s |
| 2 | ✅ | 4 | 35s |
| 3 | ✅ | 5 | 18s |
| **Média** | 100% | 4.7 | 25s |
| **Especialista** | ✅ | 5 | 6s |

**Cenário 2:** Exportação de CSV

| Usuário | Sucesso | Satisfação (1-5) | Tempo |
|---------|---------|------------------|-------|
| 1 | ✅ | 4 | 42s |
| 2 | ✅ | 5 | 38s |
| 3 | ✅ | 4 | 45s |
| **Média** | 100% | 4.3 | 42s |
| **Especialista** | ✅ | 5 | 12s |

**Comentários:**
- "Filtro por categoria funcionou perfeitamente" (Usuário 1)
- "Exportação foi fácil, mas demorou para gerar o arquivo" (Usuário 3)


## Avaliação dos Testes de Usabilidade

Os testes mostraram alta eficácia (100% de sucesso) e boa satisfação (4.3-4.7/5), indicando intuitividade nas tarefas essenciais. O tempo médio dos usuários foi 2-3x maior que o do especialista, revelando oportunidades para otimizar fluxos, especialmente na exportação de dados. Feedback destaca a necessidade de agilizar processos e melhorar feedbacks visuais durante operações demoradas.
