import { Request, Response } from "express";
import { createUser, readUsers } from "../services/user.services";

export const createUserController = async (req:Request, res:Response) => {

    const service = await createUser(req.body);

    res.status(201).json({ ...service, password: undefined });
}

export const getUsersController = async (req:Request, res:Response) => {

    const service = await readUsers();

    res.status(200).json(service)
}