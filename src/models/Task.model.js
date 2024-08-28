import { DataTypes } from "sequelize";
import db from "../db";

const Task = db.define(
    "Task",
    {
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