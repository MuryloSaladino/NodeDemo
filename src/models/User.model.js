import { DataTypes } from "sequelize";
import db from "../db";
import Task from "./Task.model";

const User = db.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

User.hasMany(Task);

export default User;