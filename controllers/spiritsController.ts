import { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2/promise';
import { connection } from '../constantes/config';

export class SpiritsController {
    public getAllSpirits(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM spirits")
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

    public getOneSpirit(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("SELECT * FROM spirits WHERE id = ?", [req.params.id])
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

    public createSpirit(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("INSERT INTO spirits (nom, type, marque, degre_alcool, pays_origine, description) VALUES (?, ?, ?, ?, ?, ?)", [req.body.nom, req.body.type, req.body.marque, req.body.degre_alcool, req.body.pays_origine, req.body.description])
                    .then((results) => {
                        res.json({ message: "Spirit créée" });
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

    public updateSpirit(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("UPDATE spirits SET nom = ?, type = ?, marque = ?, degre_alcool = ?, pays_origine = ?, description = ? WHERE id = ?", [req.body.nom, req.body.type, req.body.marque, req.body.degre_alcool, req.body.pays_origine, req.body.description, req.params.id])
                    .then((results) => {
                        res.json({ message: "Spirit modifiée" });
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

    public deleteSpirit(req: Request, res: Response, next: NextFunction): void {
        mysql.createConnection(connection)
            .then((connection) => {
                connection.query("DELETE FROM spirits WHERE id = ?", [req.params.id])
                    .then((results) => {
                        res.json({ message: "Spirit supprimée" });
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
 *   name: Spirits
 *   description: CRUD sur la table spirits de la BDD alcool
 */

/**
 * @swagger
 * /spirits:
 *   get:
 *     summary: On peut obtenir la liste des spirits
 *     description: ....
 *     tags:
 *       - name: Spirits
 *     responses:
 *       200:
 *         description: succès, retourne la liste des spirits
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /spirit/{id}:
 *   get:
 *     summary: On peut obtenir un spirit
 *     description: ....
 *     tags:
 *       - name: Spirits
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du spirit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne le spirit
 *       400:
 *         description: requête invalide, erreur lors de la récupération des données
 * 
 * /createSpirit:
 *   post:
 *     summary: On peut créer un spirit
 *     description: ....
 *     tags:
 *       - name: Spirits
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               type:
 *                 type: string
 *               marque:
 *                 type: string
 *               degre_alcool:
 *                 type: number
 *               pays_origine:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - type
 *               - marque
 *               - degre_alcool
 *               - pays_origine
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne le spirit créée
 *       400:
 *         description: requête invalide, erreur lors de la création du spirit
 * 
 * /updateSpirit/{id}:
 *   put:
 *     summary: On peut modifier un spirit
 *     description: ....
 *     tags:
 *       - name: Spirits
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du spirit
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
 *               type:
 *                 type: string
 *               marque:
 *                 type: string
 *               degre_alcool:
 *                 type: number
 *               pays_origine:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - nom
 *               - type
 *               - marque
 *               - degre_alcool
 *               - pays_origine
 *               - description
 *     responses:
 *       200:
 *         description: succès, retourne le spirit modifiée
 *       400:
 *         description: requête invalide, erreur lors de la modification du spirit
 * 
 * /deleteSpirit/{id}:
 *   delete:
 *     summary: On peut supprimer un spirit
 *     description: ....
 *     tags:
 *       - name: Spirits
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id du spirit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: succès, retourne le spirit supprimée
 *       400:
 *         description: requête invalide, erreur lors de la suppression du spirit
 */