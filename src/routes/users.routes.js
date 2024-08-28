import { createUser, findAllUsers } from "../services/user.services";
import { Router } from "express";

// instancializando um novo router, um objeto do express que ajuda a separar e configurar as rotas de forma mais flexível
const userRouter = Router()

// configurando as rotas com o método, o caminho e as funções que o express irá executar como um passo a passo para responder a requisição
userRouter.post("", createUser)
userRouter.get("", findAllUsers)


export default userRouter;