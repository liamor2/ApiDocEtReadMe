import { Request, Response, NextFunction } from "express";

export class AlcoolError extends Error {
  constructor(message: string){
    super(message);
    this.name = "AlcoolError";
  }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void{
    console.log(err.stack);
    if (err instanceof AlcoolError){
      res.status(500).json({error: err.message});
    } else {
        res.status(500).json({error: "Erreur"});
    }
}