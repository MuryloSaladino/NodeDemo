import "dotenv/config"
import db from "./db.js";
import User from "./models/User.model.js";

async function build() {
    await db.sync()

    await User.create({
        username: "murylo",
        password: "123456"
    })

    console.log("usuários criados")
}

build()