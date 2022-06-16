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

## Repositories

Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele esteja no mesmo estado que estava quando você o colocou lá. Em alguma momento, você pode optar por remover o item armazenado no repositório.

Esses objetos semelhantes a coleções são sobre persistência. Todo tipo de **Agregado** persistente terá um **Repositório**. De modo geral, existe uma relação **um-para-um entre um tipo Agregado e um Repositório**.

## Domain Events

"Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio." Vernon, Vaughn.

"A essência de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos de evento são processados para causar alterações no sistema e armazenados para fornecer um AuditLog."
Fowler, Martin. Domain Event.

Todo evento deve ser representado em uma ação realizada no passado:

- UserCreated
- OrderPlaced
- EmailSent

### Quando utilizar Domain Events?

- Quando queremos notificar outros Bounded Contexts de uma mudança de estado.

### Domain Events - Componentes

- Event
- Handler
  - Executa o processamento quando um evento é chamado
- Event Dispatcher
  - Responsável por armazenar e executar os handlers de um evento quando ele for disparado

### Domain Events - Dinâmica

- Criar um Event Dispatcher
- Criar um Evento
- Criar um Handler para o Evento
- Registrar o Evento juntamente com o Handler no Event Dispatcher

Agora para disparar um evento, basta executar o método notify do Event Dispatcher. Nesse momento todos os Handlers registrados no evento serão executados.

### Módulos

Em um contexto de DDD, Módulos em seu modelo servem como contêineres nomeados para classes de objetos de domínio que são altamente coesas entre si. O objeto deve ter baixo acoplamento entre as classes que estão em módulos diferentes. Com os módulos usados no DDD não são compartimentos de armazenamento anêmicos ou genéricos, também é importante nomear adequadamente os módulos.

- Deve respeitar a linguagem universal
- Baixo acoplamento
- Um ou mais agregados devem estar juntos somente se fazem sentido
- Devem respeitar a mesma divisão quando estão em camadas diferentes

## Factories

"Desloque a responsabilidade de criar instâncias de objetos complexos e AGREGADOS para um objeto separado, que poder não ter responsabilidade no modelo de domínio, mas ainda faz parte do design do domínio. Forneça uma interface que encapsule toda a criação complexa e que não exija que o cliente faça referência às classes concretas dos objetos que estão sendo instanciados.
Crie AGREGADOS inteiros de uma vez só, reforçando suas invariantes." - Evans, Eric. Domain Driven Design
