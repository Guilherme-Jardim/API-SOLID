# App

Gympass style app.

## RFs (Requisitos funcionais) - Funcionalidades da aplicação
- Funcionalidade em si, o que o usuário vai poder fazer na aplicação.

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio) - Caminhos que cada requisito pode tomar.
- Determina as condições para cada regra de negócio. Esta associada aos Requisitos funcionais.

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no memso dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validade até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)
- São requisitos técnicos onde o usuário não tem controle sobre eles.

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser itentificado porum JWT (JSON Web Token);

## O que é TDD
- TDD é uma sigla para Test Driven Development, ou Desenvolvimento Orientado a Testes. A ideia do TDD é que você trabalhe em ciclos.
- https://www.treinaweb.com.br/blog/afinal-o-que-e-tdd 
- Estes ciclos ocorrem na seguinte ordem:
1 - Primeiro, escreva um teste unitário que inicialmente irá falhar, tendo em vista que o código ainda não foi implementado;
2 - Crie o código que satisfaça esse teste, ou seja: implemente a funcionalidade em questão. Essa primeira implementação deverá satisfazer imediatamente o teste que foi escrito no ciclo anterior;
3 - Quando o código estiver implementado e o teste satisfeito, refatore o código para melhorar pontos como legibilidade. Logo após, execute o teste novamente. A nova versão do código também deverá passar sem que seja necessário modificar o teste escrito inicialmente.
- Vale ressaltar que TDD não é uma forma de escrever teste: ele é uma metodologia para desenvolvimento e escrita código.

## Datas para testes Vitest
- Utilizar Mocking: Metodo para quando criar uma data ela vai ser uma data específica

## Etapas TDD
1 - Red: Erro no teste, causo erro.
2 - Green: Fazer o teste passar, faço funcionar.
3 - Refactor: Refatoro o teste.

## docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest
- Vai criar um banco docker com a image selecionada com as configurações de variáveis e porta.

## docker ps -a
- Vai listar todos os bancos criados no docker.

## docker compose up -d
- Vai instalar os containers no docker com base no docker-compose-yml.
- Se o container já existir ele vai apenas executar o container.

## docker compose down
- Para de rodar tudo e apaga tudo dos containers do arquivo.

## docker compose stop
- Para de rodar os containers.

## Relationship table
- 1-1= 1 dado de uma table se relaciona com dados de uma outra table
- 1-N= 1 dado de uma table pode estar relacionado com várias outras tables
- N-N= 1 dado de uma table pode estar relacionado a várias outras tabelas e outra table com várias outras tables diferentes

## SOLID
- SOLID é uma sigla para os primeiros cinco princípios do design orientado a objeto (OOD) criada por Robert C. Martin (também conhecido como Uncle Bob).
- SOLID significa:
S - Single-responsibility Principle (Princípio da responsabilidade única).
O - Open-closed Principle (Princípio do aberto-fechado).
L - Liskov Substitution Principle (Princípio da substituição de Liskov).
I - Interface Segregation Principle (Princípio da segregação de interfaces).
D - Dependency Inversion Principle (Princípio da inversão de dependência).

## PORT ERROR AND POSTGRESQL ERROR
-- https://www.youtube.com/watch?v=m8_15PdJAQc