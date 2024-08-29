import { renderTasks, renderUsers } from "./render.js"
import { postTask } from "./requests.js"



// selecionando o select de usuário que está na table
const select = document.getElementById("getTasksUserId")

// adicionando um evento que será chamado toda vez que mudarmos o valor 
select.addEventListener("change", async (e) => {
    renderTasks()
})



// selectionando o form
const createTaskForm = document.getElementById("createTaskForm")

// adicionando um evento no form de criar tarefa que fará a requisição
createTaskForm.addEventListener("submit", async (e) => {
    // IMPORTANTE: evitar que o navegador recarregue a página
    e.preventDefault()

    const userId = document.getElementById("createTaskUserId").value
    const description = document.getElementById("createTaskDescription").value

    await postTask(userId, description)

    // atualizando a tela com as novas tasks
    renderTasks()
})



// chamando as funções no momento que a tela carrega
window.addEventListener("DOMContentLoaded", async () => {
    await renderUsers()
    await renderTasks()
})