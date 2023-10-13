import {AppDataSource} from "./app.config";
import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes";
//import { routerItems } from "./routes/items";
const PORT = process.env.PORT || 3000
const app = express()


app.use(cors());
AppDataSource.initialize().then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: any) => {
        throw new Error(err)
    })
app.use(router);
app.listen(PORT, ()=> console.log(`Listening for the Port http://localhost:${PORT}`));