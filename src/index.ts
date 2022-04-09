import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helment from "helmet";
import exp from "constants";
import { RLERouter } from "./rle/rle.router"

// creates an express application 
dotenv.config();

// const PORT = process.env.PORT || 8080; // google cloud run is 8080?

if (!process.env.PORT) {
    process.exit(1);
}

// console.log(process.env.TEST);

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Application = express();

app.use(helment());
app.use(cors());
app.use(express.json());
app.use("", RLERouter);

app.get("/", 
    (reg: Request, res: Response): void => {
        res.send("Hello Typescript with Node.js!!");
    }
);

app.listen(PORT, 
    () => {
        console.log(`Server Running here -> https://localhost:${PORT}`);
    }
);

console.log("RLE doesn't work yet, but it will");