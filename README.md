
<div align="center">

<p>Projeto Integrador para o curso de Tecnologia da Informação da Universidade Virtual do Estado de São Paulo (UNIVESP)</p>

### Organizando dados do Centro de Idiomas do Centro de Formação Carlos Kopcak

<img align="center" width="100px" src="./src/assets/Centro_de_formação.webp" alt="Logotipo do Centro de Formação Carlos Kopcak"><br>

[Clique aqui para visualizar o site](https://pi-turma013-carlos-kopcak.vercel.app/)

### PI-Turma013
</div>
  


## Índice
* [1. Prefácio](#1-prefácio)
* [2. Objetivo Geral](#2-objetivo-geral)
* [3. Metodologia](#3-metodologia)
* [4. Detalhamento](#4-detalhamento)
* [5. Instruções para acessar o projeto](#5-instruções-para-acessar-o-projeto)
* [6. Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [7. Desenvolvedores](#7-desenvolvedores)

## Parte II
### Projeto Integrador em Computação II

* [8. Atualizações](#8-atualizações)
  * [8.1 Tela Home](#81-tela-home)
  * [8.2 Tela de Cadastro de Usuário](#82-tela-de-cadastro-de-usuário)
  * [8.3 Tela de Lista de Presença](#83-tela-de-lista-de-presença)
* [9. Dados de Desempenho](#9-dados-de-desempenho)
* [10. Lista Desenvolvedores Atualizada](#10-lista-desenvolvedores-atualizada)

***


## 1. Prefácio

Este projeto nasceu da necessidade de organizar e controlar os dados de alunos matriculados em cursos de idiomas gratuitos no Centro de Formação Carlos Kopcak, onde também funciona o Polo UNIVESP de Diadema.

Anteriormente, as informações dos alunos estavam dispersas entre os professores, arquivos digitais e pastas físicas. Este cenário apresentava um desafio significativo em termos de eficiência e acessibilidade. A necessidade era clara: uma solução que permitisse a organização dos dados dos alunos e professores, o registro de presença nos cursos e o armazenamento de materiais didáticos digitais de forma simples, objetiva e clara para os usuários.

Assim, embarcamos em um processo de pesquisa e desenvolvimento para criar um software que atendesse a essas necessidades. Baseando-se em noções de banco de dados e utilizando um framework, iniciamos o desenvolvimento de uma solução que não só resolve o problema apresentado, mas também oferece uma plataforma intuitiva e fácil de usar para todos os envolvidos.

É importante ressaltar que esta solução ainda está em sua fase inicial e será aprimorada ao longo do tempo. Planos futuros incluem a implementação de um banco de dados para melhorar ainda mais a eficiência e a funcionalidade do software.

Este software é o resultado de um esforço coletivo para melhorar a gestão de cursos de idiomas, tornando a educação mais acessível e eficiente. Esperamos que esta solução possa servir como um recurso valioso para o Centro de Formação Carlos Kopcak e para outros que possam enfrentar desafios semelhantes.

***

## 2. Objetivo Geral

Criar uma aplicação para organizar as informações do centro de idiomas de forma sustentável aos funcionários e estudantes, para melhor andamento do trabalho e das aulas.

***

## 3. Metodologia

- Realizamos reuniões pelo *Whatsapp* para definir o fluxo de trabalho;
- Decidimos trabalhar com o *React*;
- Todos os formulários possuem verificações e para isso utilizamos o *React-Hook-Form* e o *Yup*;


***

## 4. Detalhamento 

Levando em consideração o nível de conhecimento técnico da equipe que presta serviços para o Centro de Formação, decidimos por utilizar um padrão simples, intuitivo e com cores claras.

Para o formulário de matrícula de alunos, decidimos manter o mesmo formato que o impresso que vem sendo utilizado até o momento, com o intuito de minimizar o impacto da transição do papel para o digital.

Todos os *inputs* obrigatórios possuem validações e mensagens de erros descritivos.

Para as funcionalidades que ainda não foram implementadas, criamos uma página informativa, conforme imagem abaixo:

<img src="./src/assets/pagina_em_construcao.webp" alt="Imagem da página informando que a página da funcionalidade desejada se encontra em construção" title="Página em Construção">

Posteriormente esta página será designada para a funcionalidade de "Página não localizada" (*page not found*).

Página atualizada já com a função de *Page not found*
<img src="./src/assets/Tela_page_not_found.webp" alt="Imagem da página informando que a página pesquisada não foi encontrada" title="Página não encontrada">

***


### Paleta de Cores

- Decidimos tomar como base as cores da *logo* do centro de formação para usarmos em nossa paleta de cores.

Abaixo, imagem com as cores principais utilizadas:
<img src="./src/assets/Paleta_PI.webp" alt="paleta de cores utilizada no projeto, tons de vermelho, azul,  e roxo" title="Paleta de Cores">

### Atualizações Futuras

- Implementação do banco de dados;
- Após a implementação do banco de dados somente será possível acessar as telas de "Formulário de Matrícula" e "Lista de Presença" se estiver *logado* no sistema.
- Para a tela de "Lista de presença" a ideia é conter uma tabela dinâmica onde seja possível filtrar os alunos pelo idioma e turma, após o filtro será possível registrar a presença ou ausência do mesmo.



***

## 5. Instruções para acessar o projeto

Este projeto tem como requisito o *deploy*, escolhemos então fazê-lo pelo *Vercel*, portanto o mesmo pode ser visualizado [clicando aqui](https://pi-turma013-carlos-kopcak.vercel.app/)

 <br>

 ***

 ## 6. Tecnologias utilizadas
  

<div>
<br>
<img align="center" title="React" alt="React" width="30" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
<img align="center" title="Typescript" alt="Typescript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">
<img align="center" title="CSS3" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
<img align="center" title="Material UI" alt="Material UI" width="30" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg" />
<img align="center" title="VSCode" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
<img align="center" title="Vercel" alt="Vercel" width="30" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" />
<img align="center" title="Firebase" alt="Firebase" width="30" height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg" />



</div>

 <br>

 ***

  ### 7. Desenvolvedores 

| Aluno                                | RA                   |
| ------------------------------------ | ---------------------|
| Camila Nazaré Pereira Gonçalves      | 23208252             |
| Danielle dos Santos Bonfim           | 2220085              |
| Edcarlos de Sousa Santos             | 2205440              |
| Fernando Caires Borges Gonçalves     | 23203515             |
| Fernando Barbosa Ferraz              | 2222816              |
| Maria Ana Lourenço Rocha             | 2228655              |
| Sandra Maria Felix de Araujo         | 2222006              |
| Thais Stella Teixeira                | 1402571              |

***

## Projeto Integrador em Computação II

  ### 8. Atualizações 

  #### 8.1 Tela *Home*

  Na tela inicial, foi implementado o botão "Área do Professor", que permite aos professores acessar um perfil específico no *Moodle*.</br>
   *Moodle* é uma plataforma de gestão de aprendizagem amplamente utilizada para apoiar o ensino e facilitar o compartilhamento de conteúdos educacionais. Com essa funcionalidade, os professores são redirecionados diretamente para seu espaço de perfil, onde podem organizar e disponibilizar materiais que serão utilizados nas aulas, promovendo uma melhor organização e acesso aos recursos de ensino.

   Obs.: Para visualizar o perfil criado no Moodle, você pode acessá-lo após clicar no botão "Área do Professor" na tela inicial. Utilize as seguintes credenciais:

- **Nome de usuário**: teste  
- **Senha**: Ab@123456  

Esses dados de acesso permitem explorar o perfil como visualizado pelo professor, facilitando o entendimento das funcionalidades disponíveis.

  Abaixo o resultado da tela *home* com o novo botão
  <img src="./src/assets/Tela_home_area_prof.webp" alt="tela home atualizada com o botão que redireciona para o site Moodle" title="tela Home">
***
  #### 8.2 Tela de Cadastro de Usuário

  Para o cadastro e autenticação de usuários, escolhemos o *Firebase Authentication* como solução de *backend*. O *Firebase* é uma plataforma desenvolvida pelo Google que oferece diversos serviços, incluindo banco de dados em tempo real, autenticação segura e hospedagem de arquivos. A escolha do Firebase permite implementar o cadastro e autenticação de usuários de forma escalável, segura e eficiente. 
  ***

  Nesta segunda parte do Projeto Integrador verificamos a necessidade de criar perfis diferentes no momento do cadastro, para isso realizamos uma alteração na tela de Cadastro.</br>
Anteriormente estava assim:

<img src="./src/assets/TelaCadastroSemRole.webp" alt="tela de cadastro anterior sem a opção de perfil" title="tela de cadastro anterior">

Com a atualização, para realizar o cadastro é necessário informar qual perfil gostaria de se cadastrar. Deverá realizar a escolha entre o perfil "Administrativo" e o perfil "Professor", para o perfil professor deverá ainda indicar para qual idioma está designado, lembrando que é possível informar mais de um idioma.

Segue abaixo imagens da alteração realizada:

Tela de Cadastro atualizada:<br>
<img src="./src/assets/TelaCadastroAtualizada1.webp" alt="tela de cadastro atualizada com a opção de perfil" title="tela de cadastro atualizada com os perfis">

Tela de cadastro atualizada com as opções de perfis:
<img src="./src/assets/TelaCadastroAtualizada2.webp" alt="tela de cadastro atualizada com as opções de perfis" title="tela de cadastro atualizada com as opções de perfis">

Recorte da tela de cadastro com as opções de idiomas para o perfil de professor:
<img src="./src/assets/TelaCadastroAtualizadaIdiomas.webp" alt="tela de cadastro atualizada com as opções de idiomas para o perfil de professor" title="tela de cadastro atualizada com as opções de idiomas">

***
### 8.3 Tela de Lista de Presença

Na tela de lista de chamada, ao clicar na imagem que representa um dos idiomas (Inglês, Espanhol ou Italiano), é exibida uma lista dos alunos matriculados no curso correspondente. Nessa lista, o usuário pode marcar se cada aluno está presente ou ausente. Ao finalizar a marcação de presença, um botão "Salvar Presença" permite registrar as informações. Ao clicar neste botão, o usuário recebe uma confirmação de sucesso, além de uma contagem dos alunos presentes e ausentes, facilitando o gerenciamento das presenças de forma prática e organizada.

<img src="./src/assets/Tela_lista_presenca.webp" alt="tela de lista de presença" title="tela de listagem dos alunos matriculados por curso">

***
### 8.4 Tela Resumo Estatístico 

Após realizar o *login*, os usuários têm acesso a um resumo estatístico que apresenta a quantidade de alunos matriculados em cada curso de idioma (Inglês, Espanhol e Italiano). As informações são atualizadas em tempo real por meio de uma chamada de API via *Firestore Functions*. Para facilitar a interpretação dos dados, as informações são exibidas em um gráfico de pizza, proporcionando uma visão rápida da distribuição dos alunos, além de uma tabela detalhada que oferece uma análise completa e precisa.

Obs.: Para acessar a página de resumo estatístico, utilize as seguintes credenciais de login:

- **E-mail**: teste5@teste.com  
- **Senha**: 123654  

Esses dados de acesso permitem visualizar as informações de quantidade de alunos matriculados em cada curso de idioma, apresentadas em gráfico de pizza e tabela, conforme descrito na funcionalidade.

<img src="./src/assets/Tela_resumo_estatistico.webp" alt="tela de lista de presença" title="tela de listagem dos alunos matriculados por curso">

***

### 9. Dados de Desempenho

Após submeter as telas de Home e de cadastro de aluno à análise pelo Lighthouse, os índices de desempenho obtidos foram excelentes, todos acima de 90. A escolha da tela de cadastro de aluno para análise foi estratégica, já que é a que contém o maior volume de informações e componentes interativos. Esses resultados refletem uma aplicação otimizada, com bom desempenho e foco na experiência do usuário.

Tela inicial - Home 
<img src="./src/assets/Tela_home_lighthouse.webp" alt="Dados de desempenho Home" title="imagem com os dados de desempenho gerados pela ferramenta lighthouse da Home">

Tela de Cadastro de Aluno 
<img src="./src/assets/Tela_form_lighthouse.webp" alt="dados de desempenho Formulário de Cadastro de aluno" title="imagem com os dados de desempenho gerados pela ferramenta lighthouse do formulário de cadastro de aluno">

***

  ### 10. Lista Desenvolvedores Atualizada

| Aluno                                | RA                   |
| ------------------------------------ | ---------------------|
| Camila Nazaré Pereira Gonçalves      | 23208252             |
| Danielle dos Santos Bonfim           | 2220085              |
| Edcarlos de Sousa Santos             | 2205440              |
| Fernando Caires Borges Gonçalves     | 23203515             |
| Fernando Barbosa Ferraz              | 2222816              |
| Mauricio Neves Pereira               | 2008309              |
| Sandra Maria Felix de Araujo         | 2222006              |
| Thais Stella Teixeira                | 1402571              |
