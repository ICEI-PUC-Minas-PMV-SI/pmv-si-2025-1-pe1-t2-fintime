# Especificações do Projeto

Nossos usuários são parte da população econômicamente ativa, com idades entre 18 e 60 anos, em busca de um futuro financeiro melhor.
Ele visa entregar aos nossos usuários uma maneira democrática, simples e intuitiva de registrar, gerir e poupar suas finanças. 
Atingindo, dessa forma, o crescimento financeiro.
O projeto foca em disponibilidade, relatórios precisos e fáceis de compreender, entregando uma interface prática e completa para
registro de entradas e saídas monetárias. 

## Personas

**Ana Oliveira, 32 anos** — Analista de Marketing em São Paulo. Mora sozinha, busca equilibrar gastos e começar a investir. Quer criar uma reserva financeira robusta, comprar um imóvel e garantir uma aposentadoria confortável. Aprende sobre finanças em canais como Me Poupe!, Nath Finanças, e podcasts como DinheiramaCast.

**José Hamilton, 41 anos** — Professor de História em Belo Horizonte. Renda limitada e dificuldades para poupar. Quer evitar dívidas, formar uma reserva de emergência e garantir a aposentadoria e os estudos do filho. Acompanha finanças em sites como G1 Economia e podcasts como Educando Seu Bolso.

**Mariana Costa, 36 anos** — Médica Clínica Geral em Salvador. Alta carga de plantões e dificuldades em organizar finanças. Quer otimizar seus investimentos, criar um fundo financeiro e alcançar independência na aposentadoria. Aprende sobre finanças no YouTube (José Kobori) e no podcast Investidor Inteligente.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)

## Histórias de Usuários

|EU COMO... `PERSONA`           | QUERO/PRECISO ... `FUNCIONALIDADE`                               | PARA ... `MOTIVO/VALOR`                                    |
|------------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
|Usuário do sistema            | Visualizar meu saldo categorizado                               | Entender melhor a distribuição dos meus gastos mensais      |
|Usuário do sistema            | Filtrar transações por data e categoria                         | Buscar de forma eficiente informações específicas            |
|Usuário do sistema            | Estabelecer um orçamento mensal por categoria                   | Controlar meus gastos e evitar excessos                     |
|Usuário do sistema            | Acessar gráficos interativos dos meus gastos                    | Realizar uma análise detalhada do meu comportamento financeiro |
|Usuário do sistema            | Exportar relatórios financeiros em PDF ou CSV                   | Compartilhar informações com profissionais contábeis ou arquivar para consultas futuras |
|Usuário do sistema            | Cadastrar transações recorrentes                                | Otimizar o gerenciamento de despesas fixas e previsíveis    |
|Usuário do sistema            | Que meus dados sejam protegidos por autenticação                | Evitar o acesso não autorizado a informações sensíveis      |
|Desenvolvedor do sistema      | Realizar testes automatizados em funcionalidades críticas       | Garantir a confiabilidade e estabilidade do sistema         |

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
