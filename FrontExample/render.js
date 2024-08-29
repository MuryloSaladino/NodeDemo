import { getTasksByUser, getUsers } from "./requests.js"

// função que irá renderizar as options de usuário nos selects
export async function renderUsers() {
    
    // encontrando e limpando os selects
    const selects = document.querySelectorAll("select")

    // chamando  requisição que irá me mostrar os usuários
    const users = await getUsers()
    
    // transformando o array de users em um array de "<option></option>""
    // id do user vai no value do select, para ser mais fácil de fazer requisições depois
    const options = users.map(user => `<option value="${user.id}">${user.username}</option>`)

    // atualizando o html dentro dos selects
    selects.forEach(select => {
        select.innerHTML = options
    })
}


export async function renderTasks() {
    // encontrando o valor atual do select, que é o id do usuário selecionado
    const userId = document.getElementById("getTasksUserId").value

    // chamando a função que busca as tasks por usuário
    const tasks = await getTasksByUser(userId)

    // selecionando o elemento onde as tasks serão renderizadas
    const table = document.getElementById("tasksData")
    // limbando o html interno do elemento, para não haver elementos repetidos
    table.innerHTML = ""

    // inserindo os dados no elemento
    tasks.forEach(task => {
        table.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${task.id}</td>
                <td>${task.description}</td>
            </tr>
        `)
    })
}