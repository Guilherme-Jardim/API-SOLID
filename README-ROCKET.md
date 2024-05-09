# 1-Estrutura do Projeto

Aqui estão as respostas para as perguntas sobre a estrutura do projeto:

1. **O que é um alias de importação no TypeScript?**
   - Uma forma de importar arquivos no projeto com um nome mais curto

2. **Qual o benefício de se utilizar um alias de importação no TypeScript?**
   - Melhor legibilidade e organização do código, através da utilização de apelidos mais descritivos para caminhos de importação complexos

3. **Para que serve o "save-exact" no arquivo .npmrc?**
   - Uma opção para salvar a versão exata de um pacote instalado

# 2-Integração com Prisma ORM

Aqui estão as respostas para as perguntas sobre a integração com Prisma ORM:

1. **O que é o Prisma Client?**
   - Uma biblioteca de acesso ao banco de dados gerada automaticamente a partir do schema do Prisma

2. **Qual o comando do Prisma utilizado para gerar um novo arquivo de migração?**
   - prisma migrate dev

3. **Qual o comando do Prisma utilizado para atualizar o esquema do banco de dados de produção?**
   - prisma migrate deploy

4. **O que é um contêiner Docker?**
   - Uma aplicação isolada com suas dependências

5. **Como os contêineres Docker diferem das máquinas virtuais?**
   - Os contêineres compartilham o kernel do host, enquanto as máquinas virtuais têm um kernel próprio

6. **Qual comando é usado para criar um novo contêiner Docker a partir de uma imagem?**
   - docker run

7. **O que é o Docker Compose?**
   - Uma ferramenta de gerenciamento de containers que faz parte do Docker

8. **Qual comando é usado para criar os containers pela primeira vez pelo Docker Compose?**
   - docker-compose up

9. **Como é representado um relacionamento N para N em um banco de dados relacional?**
   - Com uma tabela intermediária que registra as associações entre os registros nas duas tabelas

# 3-Casos de Uso e Design Patterns

Aqui estão as respostas para as perguntas sobre casos de uso e design patterns:

4. **Para que servem os casos de uso?**
   - Para orquestrar as entidades e regras da aplicação

2. **Quais a principais responsabilidades dos Controllers?**
   - Intermediar a requisição, repassar os dados para os casos de uso e retornar dados quando necessário

3. **Qual é o fator de custo no Bcrypt?**
   - O número de iterações usadas na função de hash

4. **O que é um "salt" no contexto de hashing de senha?**
   - Um valor aleatório adicionado à senha antes de gerar o hash

5. **Para que serve o padrão Repository?**
   - Para abstrair a persistência de dados

6. **No SOLID, para que serve a Inversão de dependência?**
   - Para evitar acoplamento e tornar a aplicação mais flexível

7. **Qual é o principal benefício da utilização de interfaces de contrato na inversão de dependência?**
   - Permitir a substituição de implementações sem modificar o código cliente

8. **Ao utilizarmos uma interface para um repositório, é correto afirmar que:**
   - Nossa aplicação dependerá de uma abstração e isso a tornará mais flexível e menos acoplada

9. **No Fastify, qual o método que nos auxilia a criarmos erros globais?**
   - setErrorHandler

# 4-Design Patterns & Testes

Aqui estão as respostas para as perguntas sobre design patterns e testes:

1. **Quais são as vantagens de usar um inMemoryDatabase em testes?**
   - Reduz a complexidade dos testes.
   - Permite testar sem se preocupar com dados de produção.
   - Oferece um desempenho melhor do que um banco de dados real. 

2. **O que é um "falso" inMemoryTestDatabase?**
   - Um banco de dados que armazena os dados em memória, mas também usa o disco para armazenar os dados permanentemente.

3. **Qual é a principal razão para medir a cobertura de testes?**
   - Identificar fluxos no código que não foram testados.