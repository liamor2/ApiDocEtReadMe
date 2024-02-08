import { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2/promise';
import { connection } from '../constantes/config';

export class BieresController {
    public getAllBieres(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM bieres")
                    .then((results) => {
                        res.json(results[0]);
                    })
                    .catch((error) => {
                        next(error);
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
                next(error);
            });
    }

    public getOneBiere(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM bieres WHERE id = ?", [req.params.id])
                    .then((results) => {
                        res.json(results[0]);
                    })
                    .catch((error) => {
                        next(error);
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
                next(error);
            });
    }

    public createBiere(req: Request, res: Response, next: NextFunction): void {
        console.log(req.body);
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("INSERT INTO bieres (nom, brasserie, type, degre_alcool, pays_origine, description) VALUES (?, ?, ?, ?, ?, ?)", [req.body.nom, req.body.brasserie, req.body.type, req.body.degre_alcool, req.body.pays_origine, req.body.description])
                    .then((results) => {
                        res.json({ message: "Bière créée" });
                    })
                    .catch((error) => {
                        next(error);
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
                next(error);
            });
    }

    public updateBiere(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("UPDATE bieres SET nom = ?, brasserie = ?, type = ?, degre_alcool = ?, pays_origine = ?, description = ? WHERE id = ?", [req.body.nom, req.body.brasserie, req.body.type, req.body.degre_alcool, req.body.pays_origine, req.body.description, req.params.id])
                    .then((results) => {
                        res.json({ message: "Bière modifiée" });
                    })
                    .catch((error) => {
                        next(error);
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
                next(error);
            });
    }

    public deleteBiere(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("DELETE FROM bieres WHERE id = ?", [req.params.id])
                    .then((results) => {
                        res.json({ message: "Bière supprimée" });
                    })
                    .catch((error) => {
                        next(error);
                    })
                    .finally(() => {
                        connection.end();
                    });
            })
            .catch((error) => {
                next(error);
            });
    }
}

/**
 * @swagger
 * tags:
 *   name: Bières
 *   description: CRUD sur la table bières de la BDD alcool
 */

/**
 * @swagger
 * /bieres:
 *   get:
 *     summary: On peut obtenir la liste des bières
 *     description: ....
 *     tags:
 *       - name: Bières
 *     responses:
 *       200:
 *         description: succès, retourne la liste des bières
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /biere/{id}:
 *   get:
 *     summary: On peut obtenir une bière
 *     description: ....
 *     tags:
 *       - name: Bières
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la bière
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne la bière
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /createBiere:
 *   post:
 *     summary: On peut créer une bière
 *     description: ....
 *     tags:
 *       - name: Bières
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               brasserie:
 *                 type: string
 *               type:
 *                 type: string
 *               degre_alcool:
 *                 type: number
 *               pays_origine:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - brasserie
 *               - type
 *               - degre_alcool
 *               - pays_origine
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne la bière créée
 *       400:
 *         description: requête invalide, erreur lors de la création de la bière
 * 
 * /updateBiere/{id}:
 *   put:
 *     summary: On peut modifier une bière
 *     description: ....
 *     tags:
 *       - name: Bières
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la bière
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               brasserie:
 *                 type: string
 *               type:
 *                 type: string
 *               degre_alcool:
 *                 type: number
 *               pays_origine:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - brasserie
 *               - type
 *               - degre_alcool
 *               - pays_origine
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne la bière modifiée
 *       400:
 *         description: requête invalide, erreur lors de la modification de la bière
 * 
 * /deleteBiere/{id}:
 *   delete:
 *     summary: On peut supprimer une bière
 *     description: ....
 *     tags:
 *       - name: Bières
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la bière
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne la bière supprimée
 *       400:
 *         description: requête invalide, erreur lors de la suppression de la bière
 */