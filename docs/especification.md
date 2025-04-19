# Especificações do Projeto

Nossos usuários são parte da população economicamente ativa, com idades entre 18 e 60 anos, em busca de um futuro financeiro melhor.
Ele visa entregar aos nossos usuários uma maneira democrática, simples e intuitiva de registrar, gerir e poupar suas finanças. 
Atingindo, dessa forma, o crescimento financeiro.
O projeto foca em disponibilidade, relatórios precisos e fáceis de compreender, entregando uma interface prática e completa para
registro de entradas e saídas monetárias. 

## Personas

**Ana Oliveira, 32 anos** — Analista de Marketing em São Paulo. Mora sozinha, busca equilibrar gastos e começar a investir. Quer criar uma reserva financeira robusta, comprar um imóvel e garantir uma aposentadoria confortável. Aprende sobre finanças em canais como Me Poupe!, Nath Finanças, e podcasts como DinheiramaCast.

**José Hamilton, 41 anos** — Professor de História em Belo Horizonte. Renda limitada e dificuldades para poupar. Quer evitar dívidas, formar uma reserva de emergência e garantir a aposentadoria e os estudos do filho. Acompanha finanças em sites como G1 Economia e podcasts como Educando Seu Bolso.

**Mariana Costa, 36 anos** — Médica Clínica Geral em Salvador. Alta carga de plantões e dificuldades em organizar finanças. Quer otimizar seus investimentos, criar um fundo financeiro e alcançar independência na aposentadoria. Aprende sobre finanças no YouTube (José Kobori) e no podcast Investidor Inteligente.

## Histórias de Usuários

|EU COMO... `PERSONA`           | QUERO/PRECISO ... `FUNCIONALIDADE`                               | PARA ... `MOTIVO/VALOR`                                    |
|------------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
|Ana Oliveira            | Visualizar meu saldo categorizado                               | Entender melhor a distribuição dos meus gastos mensais      |
|Ana Oliveira           | Filtrar transações por data e categoria                         | Buscar de forma eficiente informações específicas            |
|José Hamilton           | Estabelecer um orçamento mensal por categoria                   | Controlar meus gastos e evitar excessos                     |
|José Hamilton           | Acessar gráficos interativos dos meus gastos                    | Realizar uma análise detalhada do meu comportamento financeiro |
|Mariana Costa           | Exportar relatórios financeiros em PDF ou CSV                   | Compartilhar informações com profissionais contábeis ou arquivar para consultas futuras |
|Mariana Costa          | Cadastrar transações recorrentes                                | Otimizar o gerenciamento de despesas fixas e previsíveis    |
|Mariana Costa           | Que meus dados sejam protegidos por autenticação                | Evitar o acesso não autorizado a informações sensíveis      |

## Requisitos

### **Requisitos Funcionais**

| ID      | Descrição do Requisito                                                                 | Prioridade |
|---------|----------------------------------------------------------------------------------------|------------|
| RF-001 | Funcionalidade de cadastro e login. | ALTA | 
| RF-002 | Gráficos circulares segmentados para análise de gasto. | ALTA | 
| RF-003 | Exportação de dados financeiros como CSV. | ALTA | 
| RF-004 | Relatórios devem apresentar gráficos e informações corretas. | ALTA |
| RF-005 | Funcionalidade de ordenação e filtragem de dados por categoria para otimização da visualização. | ALTA | 
| RF-006 | Os relatórios mensais devem conter gastos totais e gastos por categoria. | ALTA | 
| RF-007 | Funcionalidade de inserção, remoção e edição de entradas e saídas financeiras do usuário. | ALTA | 
| RF-008 | Registro de gastos futuros recorrentes ou não recorrentes para orçamentos. | ALTA | 
| RF-009 | Atribuir selos como recompensa com base nos dados do usuário. | MÉDIA |

---

### **Requisitos Não Funcionais**

| ID       | Descrição do Requisito                                                            | Prioridade |
|----------|-----------------------------------------------------------------------------------|------------|
| RNF-001  | Não usar o backend, mantendo toda a lógica no frontend.                            | ALTA       |
| RNF-002  | Não colocar estado relacionado às regras no frontend.                              | ALTA       |
| RNF-003  | Garantir que a interface seja intuitiva e responsiva a usuários mobile.            | MÉDIA      |
| RNF-004  | O MVP deve ser o mais sucinto possível.                                            | MÉDIA      |
| RNF-005  | Criar testes automatizados para as funcionalidades críticas (relatórios, inserções, etc.). | MÉDIA      |
| RNF-006  | Segurança: Um usuário não pode acessar os dados dos outros em hipótese alguma.     | ALTA       |
| RNF-007  | Segurança: As senhas têm que ser criptografadas.                                   | ALTA       |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O aplicativo deve ser desenvolvido sem auxílio de frameworks frontend       |
