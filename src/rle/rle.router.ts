/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as RLEService from "./rle.service";

/**
 * Router Definition
 * An Express router instance is often referred to as a "mini-app" because it functions as 
 * a complete middleware and routing system, which is essential for organizing the 
 * architecture of your Node.js project into components that you can easily test and re-use.
 */
export const RLERouter = express.Router();

/**
 * Controller Definitions
 */
RLERouter.post("/encode:toEncode", 
    async (req: Request, res: Response) => {
        try {
            const toEncode: string = req.params.toEncode;
            
            const encoded = await RLEService.encode(toEncode);

            // the json is overkill here it's just a string but whatever, good practice
            res.status(200).json(encoded);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
);

RLERouter.post("/decode:toDecode", 
    async (req: Request, res: Response) => {
        try {
            const toDecode: string = req.params.toDecode;
            
            const decoded = await RLEService.decode(toDecode);

            // the json is overkill here it's just a string but whatever, good practice
            res.status(200).json(decoded);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
);