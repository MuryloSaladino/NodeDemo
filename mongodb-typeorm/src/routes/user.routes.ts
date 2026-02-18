import { Router } from "express";
import { createUserController, getUsersController } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("", createUserController)
userRoutes.get("", getUsersController)

export default userRoutes;