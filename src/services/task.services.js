import Task from "../models/Task.model"
import User from "../models/User.model";

// serviços que gerenciam as tarefas da aplicação

export const createTask = async (request, response) => {

    // encontrando o usuário que fez o pedido
    const user = await User.findByPk(request.params.idUser)

    // criando e salvando a novo tarefa
    const task = await Task.create({ ...request.body, idUser: user.id });

    // devolvendo a tarefa criada para o frontend com o status code mais adequado
    // 201 CREATED
    response.status(201).json(task);
}

export const findTasksByUser = async (request, response) => {

    // encontrando todos os tasks
    const tasks = await Task.findAll({ where: { idUser: request.params.idUser } });

    // devolvendo as tarefas encontrados para o frontend com o status code mais adequado
    // 200 OK
    response.status(200).json(tasks);
}

export const updateTask = async (request, response) => {

    // encontrando o task pelo id que deve ser passado na url
    const task = await Task.findByPk(request.params.idTask);
    
    // método do próprio sequelize para atualizar os campos
    task.set(request.body);
    // salvar o objeto após as mudanças
    await task.save();

    // devolvendo o tarefa atualizado para o frontend com o status code mais adequado
    // 200 OK 
    response.status(200).json(task);
}

export const deleteTask = async (request, response) => {

    // encontrando o task pelo id que deve ser passado na url
    await Task.destroy({ where: { id: request.params.idTask } })

    // devolvendo o tarefa atualizado para o frontend com o status code mais adequado
    // 204 NO CONTENT 
    response.status(204).send()
}
