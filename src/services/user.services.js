import { hashSync } from "bcryptjs";
import User from "../models/User.model"

// serviços que gerenciam os usuários da aplicação

export const createUser = async (request, response) => {

    // armazenando o corpo da requisição 
    const payload = request.body;

    // cryptografando a senha
    payload.password = hashSync(payload.password)

    // criando e salvando o novo usuário
    const user = await User.create(request.body);

    // devolvendo o usuário criado para o frontend com o status code mais adequado
    response.status(201).json(user)
}

export const findAllUsers = async (req, res) => {

    // encontrando todos os users
    const users = await User.findAll();

    // devolvendo o usuário criado para o frontend com o status code mais adequado
    res.status(200).json(users)
}