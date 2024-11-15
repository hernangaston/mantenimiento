import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /operarios:
 *   get:
 *     summary: Retrieves a list of all operarios.
 *     responses:
 *       200:
 *         description: A list of operarios.
 */
export const listaOperario = (req, res) => {
    const query = 'SELECT * FROM Operario';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /operarios/{id}:
 *   get:
 *     summary: Retrieves an operario by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the operario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The operario with the specified ID.
 */
export const operario = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Operario WHERE id_op = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /operarios:
 *   post:
 *     summary: Creates a new operario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       201:
 *         description: The newly created operario.
 */
export const nuevoOperario = (req, res) => {
    const {nombre, apellido} = req.body;
    const query = 'INSERT INTO Operario (nombre, apellido, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, apellido], res, "Operario creado.");
}

/**
 * @swagger
 * /operarios/{id}:
 *   put:
 *     summary: Updates an operario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the operario.
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
 *               apellido:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated operario.
 */
export const updateOperario = (req, res) => {
    const {nombre, apellido} = req.body;
    const { id_op } = req.params;     
    const query = 'UPDATE Operario SET nombre = ?, apellido = ? WHERE id_op = ?';
    executeQuery(query, [nombre, apellido, id_op], res);
}

/**
 * @swagger
 * /operarios/{id}:
 *   delete:
 *     summary: Deletes an operario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the operario.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The operario was deleted successfully.
 */
export const deleteOperario = (req, res) => {
    const {id_op} = req.params;
    const query = 'DELETE FROM Operario WHERE id_op = ?';
    executeQuery(query, [id_op], res);
}