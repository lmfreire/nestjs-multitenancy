# Aplicação Utilizando conceitos de multi Tenancy
## Contendo criação de Users, Partners, Eventos

___
### Criação de camada de autenticação
##### Utilizanção de JWT, Guards para validar os Logins
### Criação de TenantInterceptor para validar o uso correto dos Tenant
___

### Model User
___
##### Criação e Listagem de usuarios com diferentes roles.
##### Tratamento dos campos de retorno utilizando DTO
##### Geração de password com Bcrypt
___

### Model Partner
___
##### Criação e Listagem de partners .
##### Tratamento dos campos de retorno utilizando DTO
##### Utilização de Guards
___

### Model Event
___
##### Criação e Listagem de eventos .
##### Tratamento dos campos de retorno utilizando DTO
##### Utilização de Guards e Interceptors para validar o multy Tenancy
___
