import { DataSource } from "typeorm"
import { Persona } from "./models/persona"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Juanito",
    database: "two",
    synchronize: true,
    logging: true,
    entities: [Persona],
    subscribers: [],
    migrations: [],
})

