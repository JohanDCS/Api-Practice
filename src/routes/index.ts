import { Router } from "express";
import { readSync, readdirSync } from "fs";

const PATCH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
    const file = filename.split(".").shift();
    return file;
}

readdirSync(PATCH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename)
    
    console.log();
});

export {router};