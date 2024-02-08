import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

export class BieresController {
    public getBieres(req: Request, res: Response, next: NextFunction): void{
        res.json({message: "Hello World, une pinte svp !"});
    }
}