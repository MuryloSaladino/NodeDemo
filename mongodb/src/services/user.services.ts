import { Repository } from "typeorm";
import { TUserCreation } from "../types/user.types";
import User from "../entities/User.entity";
import AppDataSource from "../data-source";
import UserDetails from "../entities/embed/UserDetails.entity";
import { AppError } from "../errors";

export const createUser = async (payload:TUserCreation) => {

    const repo:Repository<User> = AppDataSource.getMongoRepository(User);

    const foundUser = await repo.findOne({ where: { username: payload.username } })
    if(foundUser) throw new AppError("Username not available")


    const user:User = repo.create(payload);
    user.details = new UserDetails(payload.details.firstName, payload.details.lastName);

    return await repo.save(user);
}

export const readUsers = async () => {

    const repo:Repository<User> = AppDataSource.getMongoRepository(User);

    return await repo.find();
}

