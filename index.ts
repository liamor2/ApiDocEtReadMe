import express, {NextFunction, Request, Response } from "express";
import { BieresController } from "./controllers/bieresController";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { AlcoolError, errorHandler } from "./midllewares/errorHandlers";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./constantes/config";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
dotenv.config();

const cors = require('cors');
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

async function testConnection() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });
        console.log("Connexion réussie");
    } catch (error) {
        console.error("Erreur de connexion à la base de données", error);
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.get("/bieres", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.getBieres(req, res, next);
});

try {
    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
} catch (error) {
    console.log(error);
}

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new AlcoolError("Page non trouvée"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});