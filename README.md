# to-do-list

A aplicação roda em docker. No momento apenas a database e o backend são suportados.
Para iniciar o Docker use o script "npm run compose:up" na pasta raiz da aplicação.

Para acessar as funcionalidades da lista de tarefa é necessário um cadastro de usuário.

CRIAR USUÁRIO

Rota: /user/register
Método: POST

{
  username: string,
  password: string
}

Após realizar o cadastro de usuário será necessário fazer login com essas informações.
Ao realizar login você receberá um token que deverá ser utilizado para modificar sua lista de tarefas.

REALIZAR LOGIN DE USUÁRIO

Rota: user/login
Método: POST

{
  username: string,
  password: string
}

Após receber o token você terá acesso às funcionalidades da rota /task.
Adicione o token com o título de "authorization" à Header de todas as seguintes requisições.

CRIAR UMA NOVA TAREFA

Rota: task/:username
Mètodo: POST

{
  description: string,
  status: string
}

Os seguintes status são aceitos: "Pending" ("Pendente"), "In development" ("Em desenvolvimento") e "Done" ("Pronto").

CONSULTAR TODAS AS TAREFAS

Rota: task/:username
Método: GET

EDITAR UMA TAREFA

Rota: task/:username/:id-da-tarefa
Método: PUT

Envie na requisição apenas o que campo que gostaria de editar.

EDITAR APENAS STATUS DE UMA TAREFA

Rota: task/:username/:id-da-tarefa/:status-da-tarefa

Em status-da-tarefa use: 0 para mudar status para "Pending", 1 para "In development" e 2 para "Done".

DELETAR UMA TAREFA

Rota: task/:username/:id-da-tarefa
Método: DELETE
