import "dotenv/config"
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import postRoutes from "./routes/post.routes";
import userRoutes from "./routes/user.routes";
import loginRouter from "./routes/login.routes";
import { handleError } from "./middlewares/errorHandler.middlewares";


const app = express();
app.use(express.json())

app.use("/posts", postRoutes)
app.use("/users", userRoutes)
app.use("/login", loginRouter)

app.use(handleError)


export default app;