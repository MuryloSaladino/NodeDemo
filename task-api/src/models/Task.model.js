import { DataTypes } from "sequelize";
import db from "../db.js";
import { v4 as uuid } from "uuid";

const Task = db.define(
    "Task",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuid(),
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
);

export default Task;