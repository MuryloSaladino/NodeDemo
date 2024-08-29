const baseurl = "http://localhost:3000"

export async function getUsers() {
    // fazendo a requisição, passando somente o endpoint e os headers (requisições GET não usam body) 
    const response = await fetch( 
        `${baseurl}/users`, 
        {
            method: "GET",
            // pro nosso caso, terá sempre esse valor incluído no headers
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    // a função fetch retorna em um formato de texto, precisamos transformá-la em um objeto javascript
    return await response.json()
}



export const getTasksByUser = async (userId) => {
    // fazendo a requisição, passando somente o endpoint com a variável recebida
    const response = await fetch(
        `${baseurl}/tasks/${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    return await response.json()
}



export async function postTask(userId, description) {
    // fazendo a requisição completa, endpoint com headers e body
    const response = await fetch(
        `${baseurl}/tasks/${userId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // infelizmente, precisamos mandar o body da requisição como uma string
            // pra isso, usamos o JSON.stringfy(), que transform qualquer tipo de variável javascript em texto
            body: JSON.stringify({
                description: description
            })
        }
    )    
    return await response.json()
}


export async function deleteTask(idTask) {
    await fetch(
        `${baseurl}/tasks/${idTask}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}