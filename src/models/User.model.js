import { DataTypes } from "sequelize";
import db from "../db";
import Task from "./Task.model";

const User = db.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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

User.hasMany(Task, { foreignKey: { name: "idUser" } });

export default User;