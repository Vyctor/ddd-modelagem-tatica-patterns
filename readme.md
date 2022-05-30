# Domain Driven Design - Modelagem Tática e Patterns

## Elementos táticos

Quanto falamos sobre DDD e precisamos olhar mais a fundo um **bounded context**.
Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

## Entities

"É algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo." Vernon, Vaughn. Implementing Domain Driven Design.

"É algo que possui continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária." Eric Evans, Domain Driven Design.

**Entidade = IDENTIDADE**

## Value Objects

**Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object.**

**Trate o Value Object como imutável.**
