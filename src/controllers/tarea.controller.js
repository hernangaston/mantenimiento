import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Retrieves a list of all tareas.
 *     responses:
 *       200:
 *         description: A list of tareas.
 */
export const listaTarea = (req, res) => {
    const query = 'SELECT * FROM Tarea';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     summary: Retrieves a tarea by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tarea.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tarea with the specified ID.
 */
export const tarea = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tarea WHERE id_tarea = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /tareas:
 *   post:
 *     summary: Creates a new tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_tita:
 *                 type: integer
 *               tiempo_estimado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The newly created tarea.
 */
export const nuevaTarea = (req, res) => {
    const { id_tita, tiempo_estimado } = req.body;
    const query = 'INSERT INTO Tarea (id_tita, tiempo_estimado, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [id_tita, tiempo_estimado], res, "Tarea creada.");
}

/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     summary: Updates a tarea.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tarea.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_tita:
 *                 type: integer
 *               tiempo_estimado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated tarea.
 */
export const updateTarea = (req, res) => {
    const { id } = req.params;
    const { id_tita, tiempo_estimado } = req.body;
    const query = 'UPDATE Tarea SET id_tita = ?, tiempo_estimado = ? WHERE id_tarea = ?';
    executeQuery(query, [id_tita, tiempo_estimado, id], res, "Tarea actualizada.");
}

/**
 * @swagger
 * /tareas/{id}:
 *   delete:
 *     summary: Deletes a tarea.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tarea.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The tarea was deleted successfully.
 */
export const deleteTarea = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tarea WHERE id_tarea = ?';
    executeQuery(query, [id], res, "Tarea eliminada");
}