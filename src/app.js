// Arquivo específico para instancializar e configurar o express, o coração da API.
// nada deve ser alterado ou configurado no app fora desse arquivo.


import express from "express";
import userRouter from "./routes/users.routes";


// instanciando o express:
const app = express();
// o app.use() configura o app para usar aquela função ou rota, dentro da arquitetura de middlewares.
// confuso agora, mas pensa que ele faz um passo a passo em cada rota, e você que diz quais passos ele irá "usar" .

app.use("/users", userRouter)



// aqui estamos configurando o app para ao receber uma requisição, transformar o corpo dele em um json.
app.use(express.json())


export default app;