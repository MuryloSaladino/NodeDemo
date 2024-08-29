import { getUsers, postTask } from "./requests.js"

// função que irá renderizar as options de usuário nos selects
async function renderUsers() {
    
    // encontrando e limpando os selects
    const selects = document.querySelectorAll("select")

    // chamando  requisição que irá me mostrar os usuários
    const users = await getUsers()
    
    // transformando o array de users em um array de "<option></option>""
    // id do user vai no value do select, para ser mais fácil de fazer requisições depois
    const options = users.map(user => `<option value="${user.id}">${user.username}</option>`)

    // adicionando a opção padrão no início do array
    options.unshift('<option selected>Selecione um usuário</option>')

    // atualizando o html dentro dos selects
    selects.forEach(select => {
        select.innerHTML = options
    })
}


// selecionando o select de usuário que está na table
const select = document.getElementById("getTasksUserId")

// adicionando um evento que será chamado toda vez que mudarmos o valor 



// selectionando o form
const createTaskForm = document.getElementById("createTaskForm")

// adicionando um evento no form de criar tarefa que fará a requisição
createTaskForm.addEventListener("submit", async (e) => {
    // IMPORTANTE: evitar que o navegador recarregue a página
    e.preventDefault()

    const userId = document.getElementById("createTaskUserId").value
    const description = document.getElementById("createTaskDescription").value

    await postTask(userId, description)
})



renderUsers()