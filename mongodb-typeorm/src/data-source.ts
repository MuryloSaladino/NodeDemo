import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";


const getOptions = () : DataSourceOptions => {
    
    const entitiesPath: string = path.join(__dirname, "./entities/**.ts")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.ts")
    const nodeEnv: string | undefined = process.env.NODE_ENV

    if(nodeEnv == "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath]
        }
    }

    const dbName = process.env.DB_NAME;
    if(!dbName) throw new Error("Missing env variable: DB_NAME")

    return {
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: dbName,
        entities: [entitiesPath],
        migrations: [migrationsPath],
        logging: true
    }
}

const AppDataSource = new DataSource(getOptions())

export default AppDataSource;