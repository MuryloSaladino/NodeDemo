import { Sequelize } from "sequelize";

// lendo as variáveis de ambiente 
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT

// garantindo que nenhuma é nula ou undefined
if(!database || !username || !password || !port || !dialect) throw new Error("Missing .env variable")

// criando a conexão com o banco
const db = new Sequelize( database, username, password, {
    host: "localhost",
    port: Number(port),
    dialect: dialect 
})

export default db;
