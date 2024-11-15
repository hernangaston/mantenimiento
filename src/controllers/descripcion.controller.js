import { executeQuery } from "../helpers/helpFunctions.js";
import { db } from "../db.js";

/**
 * @swagger
 * /descripcion:
 *   get:
 *     summary: Obtiene la lista de todas las descripciones
 *     responses:
 *       '200':
 *         description: Lista de todas las descripciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_descripcion:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   id_tita:
 *                     type: integer
 */
export const listaDescripcion = (req, res) => {
    const query = 'SELECT * FROM Descripcion';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /descripcion/{id}:
 *   get:
 *     summary: Obtiene una descripción por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la descripción a obtener
 *     responses:
 *       '200':
 *         description: Descripción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_descripcion:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 id_tita:
 *                   type: integer
 */
export const descripcion = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Descripcion WHERE id_descripcion = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /descripcion:
 *   post:
 *     summary: Crea una nueva descripción
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
 *               id_tita:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Descripción creada exitosamente
 */
export const nuevoDescripcion = (req, res) => {
    const { nombre, descripcion, id_tita } = req.body;
    const query = 'INSERT INTO Descripcion (nombre, descripcion, id_tita) VALUES (?,?,?)';
    executeQuery(query, [nombre, descripcion, id_tita], res, "Descripcion creada.");
}

/**
 * @swagger
 * /descripcion/{id_descripcion}:
 *   put:
 *     summary: Actualiza una descripción existente
 *     parameters:
 *       - in: path
 *         name: id_descripcion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la descripción a actualizar
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
 *               id_tita:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Descripción actualizada exitosamente
 */
export const updateDescripcion = (req, res) => {
    const { nombre, descripcion, id_tita } = req.body;
    const { id_descripcion } = req.params;
    const query = 'UPDATE Descripcion SET nombre = ?, descripcion = ?, id_tita = ? WHERE id_descripcion = ?';
    executeQuery(query, [nombre, descripcion, id_tita, id_descripcion], res);
}

/**
 * @swagger
 * /descripcion/{id_descripcion}:
 *   delete:
 *     summary: Elimina una descripción por ID
 *     parameters:
 *       - in: path
 *         name: id_descripcion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la descripción a eliminar
 *     responses:
 *       '200':
 *         description: Descripción eliminada exitosamente
 */
export const deleteDescripcion = (req, res) => {
    const { id_descripcion } = req.params;
    const query = 'DELETE FROM Descripcion WHERE id_descripcion = ?';
    executeQuery(query, [id_descripcion], res);
}

/**
 * @swagger
 * /descripcion/tarea/{id}:
 *   get:
 *     summary: Obtiene descripciones por ID de tipo de tarea
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de tarea
 *     responses:
 *       '200':
 *         description: Lista de descripciones relacionadas con el tipo de tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_descripcion:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   id_tita:
 *                     type: integer
 */
export const descripcionByTtarea = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Descripcion WHERE id_tita = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /descripcion/orden/{id}:
 *   get:
 *     summary: Obtiene descripciones por ID de orden
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la orden
 *     responses:
 *       '200':
 *         description: Lista de descripciones relacionadas con la orden
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   descripcion:
 *                     type: string
 */
export const descripcionByOrden = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT d.descripcion FROM Descripcion_Orden do JOIN Descripcion d ON do.id_descripcion = d.id_descripcion WHERE do.id_orden = ?';
    try {
        const [result] = await db.execute(query, [id]);
        res.json([result]);
    } catch (error) {
        console.log("No se pudo obtener las descripciones para la orden: ", error);
    }
}
