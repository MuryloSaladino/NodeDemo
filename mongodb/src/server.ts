import app from "./app";
import AppDataSource from "./data-source";

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        
        const PORT:number = Number(process.env.APP_PORT) || 3000;
        app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
    } catch (err) {
        console.error("Error during DataSource initialization", err);
    }
}

startServer()