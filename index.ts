import express, {NextFunction, Request, Response } from "express";
import { BieresController } from "./controllers/bieresController";
import { SpiritsController } from "./controllers/spiritsController";
import { VinsController } from "./controllers/vinsController";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { AlcoolError, errorHandler } from "./midllewares/errorHandlers";
import { connection } from "./constantes/config";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
dotenv.config();

const cors = require('cors');

function testConnection() {
    mysql.createConnection(connection)
        .then((connection) => {
            console.log("Connected to the database");
            connection.end();
        })
        .catch((error) => {
            console.log("Error connecting to the database");
            console.log(error);
        });
}

testConnection();

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.get("/bieres", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.getAllBieres(req, res, next);
});

app.get("/biere/:id", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.getOneBiere(req, res, next);
});

app.post("/createBiere", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.createBiere(req, res, next);
});

app.put("/updateBiere/:id", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.updateBiere(req, res, next);
});

app.delete("/deleteBiere/:id", (req: Request, res: Response, next: NextFunction) => {
    const bieresController = new BieresController();
    bieresController.deleteBiere(req, res, next);
});


app.get("/spirits", (req: Request, res: Response, next: NextFunction) => {
    const spiritsController = new SpiritsController();
    spiritsController.getAllSpirits(req, res, next);
});

app.get("/spirit/:id", (req: Request, res: Response, next: NextFunction) => {
    const spiritsController = new SpiritsController();
    spiritsController.getOneSpirit(req, res, next);
});

app.post("/createSpirit", (req: Request, res: Response, next: NextFunction) => {
    const spiritsController = new SpiritsController();
    spiritsController.createSpirit(req, res, next);
});

app.put("/updateSpirit/:id", (req: Request, res: Response, next: NextFunction) => {
    const spiritsController = new SpiritsController();
    spiritsController.updateSpirit(req, res, next);
});

app.delete("/deleteSpirit/:id", (req: Request, res: Response, next: NextFunction) => {
    const spiritsController = new SpiritsController();
    spiritsController.deleteSpirit(req, res, next);
});


app.get("/vins", (req: Request, res: Response, next: NextFunction) => {
    const vinsController = new VinsController();
    vinsController.getAllVins(req, res, next);
});

app.get("/vin/:id", (req: Request, res: Response, next: NextFunction) => {
    const vinsController = new VinsController();
    vinsController.getOneVin(req, res, next);
});

app.post("/createVin", (req: Request, res: Response, next: NextFunction) => {
    const vinsController = new VinsController();
    vinsController.createVin(req, res, next);
});

app.put("/updateVin/:id", (req: Request, res: Response, next: NextFunction) => {
    const vinsController = new VinsController();
    vinsController.updateVin(req, res, next);
});

app.delete("/deleteVin/:id", (req: Request, res: Response, next: NextFunction) => {
    const vinsController = new VinsController();
    vinsController.deleteVin(req, res, next);
});


// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new AlcoolError("Page non trouvée"));
// });

try {
    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
} catch (error) {
    console.log(error);
}

// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new AlcoolError("Page non trouvée"));
// });

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});