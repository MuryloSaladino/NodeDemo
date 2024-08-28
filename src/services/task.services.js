import Task from "../models/Task.model"

// serviços que gerenciam as tarefas da aplicação

export const createTask = async (request, response) => {

    // criando e salvando o novo tarefa
    const task = await Task.create(request.body);

    // devolvendo o tarefa criado para o frontend com o status code mais adequado
    // 201 CREATED
    response.status(201).json(task);
}

export const findAllTasks = async (request, response) => {

    // encontrando todos os tasks
    const tasks = await Task.findAll();

    // devolvendo as tarefas encontrados para o frontend com o status code mais adequado
    // 200 OK
    response.status(200).json(tasks);
}

export const findTaskById = async (request, response) => {

    // encontrando task pelo id que deve ser passado na url
    const task = await Task.findByPk(request.params.id);

    // devolvendo o tarefa encontrado para o frontend com o status code mais adequado
    // 200 OK
    response.status(200).json(task);
}

export const updateTask = async (request, response) => {

    // encontrando o task pelo id que deve ser passado na url
    const task = await Task.findByPk(request.params.id);
    
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
    await Task.destroy({ where: { id: request.params.id } })

    // devolvendo o tarefa atualizado para o frontend com o status code mais adequado
    // 204 NO CONTENT 
    response.status(204).send()
}
