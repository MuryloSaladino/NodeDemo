import { createTask, deleteTask, findTasksByUser, updateTask } from "../services/task.services.js";
import { Router } from "express";

const tasksRouter = Router();

tasksRouter.post("/:idUser", createTask);
tasksRouter.get("/:idUser", findTasksByUser);
tasksRouter.patch("/:idTask", updateTask);
tasksRouter.delete("/:idTask", deleteTask);

export default tasksRouter;