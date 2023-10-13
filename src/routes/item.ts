import { Request, Response, Router } from "express";

const router = Router();
router.get("/items", (req: Request, res: Response) => {
    res.send({data: "Aqui-Van-Los Modelos", data2: "aqui van los gaysasos"});
})
export {router};