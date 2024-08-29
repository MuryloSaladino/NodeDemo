// Arquivo específico para instancializar e configurar o express, o coração da API.
// nada deve ser alterado ou configurado no app fora desse arquivo.

import cors from "cors"
import express from "express";
import userRouter from "./routes/users.routes.js";
import tasksRouter from "./routes/tasks.routes.js";


// instanciando o express:
const app = express();
// o app.use() configura o app para usar aquela função ou rota, dentro da arquitetura de middlewares.
// confuso agora, mas pensa que ele faz um passo a passo em cada rota, e você que diz quais passos ele irá "usar" .

// aqui estamos configurando o app para ao receber uma requisição, transformar o corpo dele em um json.
app.use(express.json())
app.use(cors())


// configurando os routers em seus destinos desejados, ou seja, naquele 
// endereço o router irá atuar adicionando as rotas que ele tem
app.use("/users", userRouter)
app.use("/tasks", tasksRouter)


export default app;