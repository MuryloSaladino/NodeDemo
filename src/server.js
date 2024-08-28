// primeira linha de código a ser incluída, ela configura as variáveis de ambiente quando o programa roda.
import "dotenv/config"

import app from "./app.js";
import db from "./db.js";

// função facade que chamará todos os módulos da aplicação e todas as funções de configuração da aplicação.
async function startApplication() {

    // iniciando a conexão com o banco
    await db.authenticate();
    

    // Encontrando a porta para rodar o servidor.
    const PORT = Number(process.env.APP_PORT) || 3000;


    // iniciando o servidor - a função passada no segundo parâmetro do listen é chamada quando o servidor 
    // termina de ser configurado e está pronto para receber requisições, como uma função de aviso.
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

// não esquece de chamar a função né
startApplication();