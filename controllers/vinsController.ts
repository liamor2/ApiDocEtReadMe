import { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2/promise';
import { connection } from '../constantes/config';

export class VinsController {
    public getAllVins(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM vins")
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

    public getOneVin(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM vins WHERE id = ?", [req.params.id])
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

    public createVin(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("INSERT INTO vins (nom, domaine, cepage, couleur, region, annee, degre_alcool, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [req.body.nom, req.body.domaine, req.body.cepage,req.body.couleur, req.body.region,req.body.annee, req.body.degre_alcool, req.body.description])
                    .then((results) => {
                        res.json({ message: "Vin créée" });
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

    public updateVin(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("UPDATE vins SET nom = ?, domaine = ?, cepage = ?, couleur = ?, region = ?, annee = ?, degre_alcool = ?, description = ? WHERE id = ?", [req.body.nom, req.body.domaine, req.body.cepage, req.body.couleur, req.body.region, req.body.annee, req.body.degre_alcool, req.body.description, req.params.id])
                    .then((results) => {
                        res.json({ message: "Vin modifiée" });
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

    public deleteVin(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("DELETE FROM vins WHERE id = ?", [req.params.id])
                    .then((results) => {
                        res.json({ message: "Vins supprimée" });
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
 *   name: Vins
 *   description: CRUD sur la table vins de la BDD alcool
 */

/**
 * @swagger
 * /vins:
 *   get:
 *     summary: On peut obtenir la liste des vins
 *     description: ....
 *     tags: [Vins]
 *     responses:
 *       200:
 *         description: succès, retourne la liste des vins
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /vin/{id}:
 *   get:
 *     summary: On peut obtenir un vin
 *     description: ....
 *     tags: [Vins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du vin
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne le vin
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /createVin:
 *   post:
 *     summary: On peut créer un vin
 *     description: ....
 *     tags: [Vins]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               domaine:
 *                 type: string
 *               cepage:
 *                 type: string
 *               couleur:
 *                  type:string
 *               region:
 *                  type:string
 *               annee:
 *                  type:number
 *               degre_alcool:
 *                 type: number
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - domaine
 *               - cepage
 *               - couleur
 *               - region
 *               - annee
 *               - degre_alcool
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne le vin créée
 *       400:
 *         description: requête invalide, erreur lors de la création du vin
 * 
 * /updateVin/{id}:
 *   put:
 *     summary: On peut modifier un vin
 *     description: ....
 *     tags: [Vins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du vin
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
 *               domaine:
 *                 type: string
 *               cepage:
 *                 type: string
 *               couleur:
 *                 type: string
 *               region:
 *                 type: string
 *               annee:
 *                 type: number
 *               degre_alcool:
 *                 type: number
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - domaine
 *               - cepage
 *               - couleur
 *               - region
 *               - annee
 *               - degre_alcool
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne le vin modifiée
 *       400:
 *         description: requête invalide, erreur lors de la modification du vin
 * 
 * /deleteVin/{id}:
 *   delete:
 *     summary: On peut supprimer un vin
 *     description: ....
 *     tags: [Vins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du vin
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne le vin supprimée
 *       400:
 *         description: requête invalide, erreur lors de la suppression du vin
 */