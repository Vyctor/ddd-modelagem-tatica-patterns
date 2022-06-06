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

## Agregado

**Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados.**

## Domain Service

Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método de um Agregado ou um Objeto de Valor.

Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma ENTIDADE ou OBJETO DE VALOR, adicione uma operação ao modelo como uma interface autônoma declarada como um SERVIÇO. Defina a interface baseada na linguagem do modelo de domínio e certifique-se de que o nome da operação faça parte da LINGUAGEM UBÍQUA. Torne o serviço STATELESS.

### Quando utilizar?

- Uma entidade pode realizar uma ação que vai afetar todas as entidades?
- Como realizar uma operação em lote?
- Como calcular algo cuja as informações constam em mais de uma entidade?

### Cuidados

- Quando houver muitos Domain Services em seu projeto, TALVEZ, isso possa indicar que seus agregados estão anêmicos. Um DOMAIN SERVICE com muitos métodos é um BAD SMELL.
- Domain Services são STATELESS
