import { Repository } from "typeorm";
import { AppError } from "../errors"
import User from "../entities/User.entity";
import AppDataSource from "../data-source";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

export type TLoginPayload = {
    username: string;
    password: string;
}

export const login = async (payload:TLoginPayload) => {

    const repo:Repository<User> = AppDataSource.getMongoRepository(User);
    const user:User|null = await repo.findOneBy({ username: payload.username });

    if(!user) throw new AppError("User not found", 404);

    if(!compareSync(user.password, payload.password))
        throw new AppError("Password does not match", 401)

    const token = sign(
        {},
        String(process.env.SECRET_KEY),
        {}
    )
}