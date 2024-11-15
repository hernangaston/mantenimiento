import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /activoTarea/{id}:
 *   get:
 *     summary: Obtiene un activo-tarea por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo-tarea
 *     responses:
 *       '200':
 *         description: ActivoTarea encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_actar:
 *                   type: integer
 *                 id_activo:
 *                   type: integer
 *                 id_tarea:
 *                   type: integer
 */
export const activoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM activo_tarea WHERE id_actar = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /activoTarea:
 *   get:
 *     summary: Lista todos los registros de activo-tarea
 *     responses:
 *       '200':
 *         description: Lista de activo-tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_actar:
 *                     type: integer
 *                   id_activo:
 *                     type: integer
 *                   id_tarea:
 *                     type: integer
 */
export const listaActivoTarea = (req, res) => {
    const query = 'SELECT * FROM activo_tarea';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /activoTarea:
 *   post:
 *     summary: Crea un nuevo registro de activo-tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_activo:
 *                 type: integer
 *                 description: ID del activo relacionado
 *               id_tarea:
 *                 type: integer
 *                 description: ID de la tarea relacionada
 *     responses:
 *       '201':
 *         description: ActivoTarea creado exitosamente
 */
export const nuevoActivoTarea = (req, res) => {
    const { id_activo, id_tarea } = req.body;
    const query = 'INSERT INTO activo_tarea (id_activo, id_tarea) VALUES (?, ?)';
    executeQuery(query, [id_activo, id_tarea], res, "ActivoTarea creado.");
}

/**
 * @swagger
 * /activoTarea/{id}:
 *   put:
 *     summary: Actualiza un registro de activo-tarea existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo-tarea a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_activo:
 *                 type: integer
 *                 description: Nuevo ID del activo relacionado
 *               id_tarea:
 *                 type: integer
 *                 description: Nuevo ID de la tarea relacionada
 *     responses:
 *       '200':
 *         description: ActivoTarea actualizado exitosamente
 */
export const updateActivoTarea = (req, res) => {
    const { id } = req.params;
    const { id_activo, id_tarea } = req.body;
    const query = 'UPDATE activo_tarea SET id_activo = ?, id_tarea = ? WHERE id_actar = ?';
    executeQuery(query, [id_activo, id_tarea, id], res, "ActivoTarea actualizado.");
}

/**
 * @swagger
 * /activoTarea/{id}:
 *   delete:
 *     summary: Elimina un activo-tarea por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo-tarea a eliminar
 *     responses:
 *       '200':
 *         description: ActivoTarea eliminado exitosamente
 */
export const deleteActivoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM activo_tarea WHERE id_actar = ?';
    executeQuery(query, [id], res, "ActivoTarea eliminado.");
}
