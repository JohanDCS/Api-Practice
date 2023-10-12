import "dotenv/config";
import express from "express";
import cors from "cors";
//import { routerItems } from "./routes/items";
const PORT = process.env.PORT || 3000
const app = express()
import {router} from "./routes/item";
app.use(cors());
//app.use(routerItems);
app.listen(PORT, ()=> console.log(`Listening for the Port http://localhost:${PORT}`));