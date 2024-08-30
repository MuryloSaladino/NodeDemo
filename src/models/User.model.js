import { DataTypes } from "sequelize";
import db from "../db.js";
import Task from "./Task.model.js";
import { v4 as uuid } from "uuid";

const User = db.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuid(),
            primaryKey: true
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