import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /tipos_tarea:
 *   get:
 *     summary: Obtiene una lista de todos los tipos de tarea.
 *     responses:
 *       200:
 *         description: Una lista de tipos de tarea.
 */
export const listaTipoTarea = (req, res) => {
    const query = 'SELECT * FROM Tipo_tarea';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /tipos_tarea/{id}:
 *   get:
 *     summary: Obtiene un tipo de tarea por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del tipo de tarea.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: El tipo de tarea con el ID especificado.
 */
export const tipoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tipo_tarea WHERE id_tita = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /tipos_tarea:
 *   post:
 *     summary: Crea un nuevo tipo de tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: El tipo de tarea creado.
 */
export const nuevoTipoTarea = (req, res) => {
    const {nombre, descripcion} = req.body;
    const query = 'INSERT INTO Tipo_tarea (nombre, descripcion, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, descripcion], res, "Tipo de tarea creado.");
}

/**
 * @swagger
 * /tipos_tarea/{id}:
 *   put:
 *     summary: Actualiza un tipo de tarea.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del tipo de tarea a actualizar.
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
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: El tipo de tarea actualizado.
 */
export const updateTipoTarea = (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion} = req.body;
    const query = 'UPDATE Tipo_tarea SET nombre = ?, descripcion = ? WHERE id_tita = ?';
    executeQuery(query, [nombre, descripcion, id], res, "Tipo de tarea actualizado.");
}

/**
 * @swagger
 * /tipos_tarea/{id}:
 *   delete:
 *     summary: Elimina un tipo de tarea.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del tipo de tarea a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: El tipo de tarea ha sido eliminado.
 */
export const deleteTipoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Tipo_tarea WHERE id_tita = ?';
    executeQuery(query, [id], res, "Tipo de tarea eliminado.");
}