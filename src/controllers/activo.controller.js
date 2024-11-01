import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * tags:
 *   name: Activos
 *   description: Endpoints para gestionar activos.
 * 
 * /activos:
 *   get:
 *     summary: Obtiene una lista de todos los activos.
 *     responses:
 *       200:
 *         description: Lista de activos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
export const listaActivo = (req, res) => {
    const query = 'SELECT * FROM Activo';
    executeQuery(query, [], res);
}
/**
 * @swagger
 * /activos/{id}:
 *   get:
 *     summary: Obtiene un activo específico por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del activo a obtener.
 *     responses:
 *       200:
 *         description: Información del activo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
export const activo = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Activo WHERE id_activo = ?';
    executeQuery(query, [id], res);
}
/**
 * @swagger
 * /activos:
 *   post:
 *     summary: Crea un nuevo activo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               id_tag:
 *                 type: integer
 *               Disponibilidad:
 *                 type: boolean
 *               labelTag:
 *                 type: string
 *               numero_existencia:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Activo creado exitosamente.
 */
export const nuevoActivo = (req, res) => {
    const { nombre, id_tag, Disponibilidad, labelTag, numero_existencia } = req.body;
    let numero_real = 1;
    const query = 'INSERT INTO Activo (nombre, id_tag, Disponibilidad, labelTag, numero_existencia, numero_real) VALUES (?,?,?,?,?,?)';
    executeQuery(query, [nombre, id_tag, Disponibilidad, labelTag, numero_existencia, numero_real], res, "Activo creado.");
}
/**
 * @swagger
 * /activos/{id_activo}:
 *   put:
 *     summary: Actualiza un activo existente.
 *     parameters:
 *       - in: path
 *         name: id_activo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del activo a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               id_tag:
 *                 type: integer
 *               disponibilidad:
 *                 type: boolean
 *               labelTag:
 *                 type: string
 *               numero_existencia:
 *                 type: integer
 *               numero_real:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Activo actualizado exitosamente.
 */
export const updateActivo = (req, res) => {
    const { nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real } = req.body;
    const { id_activo } = req.params;

    const query = 'UPDATE Activo SET nombre = ?, id_tag = ?, Disponibilidad = ?, labelTag = ?, numero_existencia = ?, numero_real = ? WHERE id_activo = ?';
    executeQuery(query, [nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real, id_activo], res);
}
/**
 * @swagger
 * /activos/{id_activo}:
 *   delete:
 *     summary: Elimina un activo por ID.
 *     parameters:
 *       - in: path
 *         name: id_activo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del activo a eliminar.
 *     responses:
 *       200:
 *         description: Activo eliminado exitosamente.
 */
export const deleteActivo = (req, res) => {
    const { id_activo } = req.params;
    const query = 'DELETE FROM activo WHERE id_activo = ?';
    executeQuery(query, [id_activo], res);
}

/**
 * @swagger
 * /activos/{id}/tareas:
 *   get:
 *     summary: Obtiene las tareas asociadas a un activo por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del activo para obtener las tareas.
 *     responses:
 *       200:
 *         description: Lista de tareas asociadas al activo.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
export const tareaByActivo = (req, res) => {
    const id_activo = req.params.id;
    const query = `
      SELECT t.id_tarea, t.nombre 
      FROM Tarea t
      JOIN activo_tarea at ON t.id_tarea = at.id_tarea
      WHERE at.id_activo = ?`;
    executeQuery(query, [id_activo], res);
}
/**
 * @swagger
 * /activos/{id}/tags:
 *   get:
 *     summary: Obtiene los tags asociados a un activo por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del activo para obtener los tags.
 *     responses:
 *       200:
 *         description: Lista de tags asociados al activo.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
export const tagsByActivo = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res);
}

