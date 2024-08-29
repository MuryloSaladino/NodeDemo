const baseurl = "http://localhost:3000"

export async function getUsers() {
    // fazendo a requisição, passando somente o endpoint e os headers (requisições GET não usam body) 
    const response = await fetch( 
        `${baseurl}/users`, 
        {
            // pro nosso caso, terá sempre esse valor incluído no headers
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    // a função fetch retorna em um formato de texto, precisamos transformá-la em um objeto javascript
    return await response.json()
}


export async function postTask(userId, description) {
    // fazendo a requisição completa, endpoint com headers e body
    const response = await fetch(
        `${baseurl}/tasks/${userId}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                description: description
            }
        }
    )    
    return await response.json()
}