import { Request, Response } from "express";
import { login } from "../services/login.services";

export const loginController = async (req:Request, res:Response) => {

    const service = await login(req.body);

    
}