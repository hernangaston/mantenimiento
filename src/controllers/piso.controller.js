import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /pisos:
 *   get:
 *     summary: Retrieves a list of all pisos.
 *     responses:
 *       200:
 *         description: A list of pisos.
 */
export const listaPiso = (req, res) => {
    const query = 'SELECT * FROM Piso';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /pisos/{id}:
 *   get:
 *     summary: Retrieves a piso by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the piso.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The piso with the specified ID.
 */
export const piso = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Piso WHERE id_piso = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /pisos:
 *   post:
 *     summary: Creates a new piso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               labelTag:
 *                 type: string
 *               id_sector:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The newly created piso.
 */
export const nuevoPiso = (req, res) => {
    const {  nombre, labelTag, id_sector } = req.body;
    const query = 'INSERT INTO Piso (nombre, labelTag, id_sector, fecha_creacion) VALUES (?, ?, ?, NOW())';
    executeQuery(query, [nombre, labelTag, id_sector], res, "Piso creado.");
}

/**
 * @swagger
 * /pisos/{id}:
 *   put:
 *     summary: Updates a piso.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the piso.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               labelTag:
 *                 type: string
 *               id_sector:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated piso.
 */
export const updatePiso = (req, res) => {
    const { id } = req.params;
    const {  nombre, labelTag, id_sector } = req.body;
    const query = 'UPDATE Piso SET nombre = ?, labelTag = ?, id_sector = ? WHERE id_piso = ?';
    executeQuery(query, [nombre, labelTag, id_sector, id], res, "Piso actualizado.")
}

/**
 * @swagger
 * /pisos/{id}:
 *   delete:
 *     summary: Deletes a piso.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the piso.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The piso was deleted successfully.
 */
export const deletePiso = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Piso WHERE id_piso = ?';
    executeQuery(query, [id], res, "Piso eliminado.")
}