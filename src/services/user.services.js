import { hashSync } from "bcryptjs";
import User from "../models/User.model.js"

// serviços que gerenciam os usuários da aplicação

export const createUser = async (request, response) => {

    // armazenando o corpo da requisição 
    const payload = request.body;

    // cryptografando a senha
    payload.password = hashSync(payload.password);

    // criando e salvando o novo usuário
    const user = await User.create(request.body);

    // devolvendo o usuário criado para o frontend com o status code mais adequado
    // 201 CREATED
    response.status(201).json(user);
}

export const findAllUsers = async (request, response) => {

    // encontrando todos os users
    const users = await User.findAll();

    // devolvendo os usuários encontrados para o frontend com o status code mais adequado
    // 200 OK
    response.status(200).json(users);
}

export const findUserById = async (request, response) => {

    // encontrando user pelo id que deve ser passado na url
    const user = await User.findByPk(request.params.id);

    // devolvendo o usuário encontrado para o frontend com o status code mais adequado
    // 200 OK
    response.status(200).json(user);
}

export const updateUser = async (request, response) => {

    // encontrando o user pelo id que deve ser passado na url
    const user = await User.findByPk(request.params.id);
    
    // método do próprio sequelize para atualizar os campos
    user.set(request.body);
    // salvar o objeto após as mudanças
    await user.save();

    // devolvendo o usuário atualizado para o frontend com o status code mais adequado
    // 200 OK 
    response.status(200).json(user);
}

export const deleteUser = async (request, response) => {

    // encontrando o user pelo id que deve ser passado na url
    await User.destroy({ where: { id: request.params.id } })

    // devolvendo o usuário atualizado para o frontend com o status code mais adequado
    // 204 NO CONTENT 
    response.status(204).send()
}
