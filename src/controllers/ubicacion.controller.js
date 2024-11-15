import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /ubicaciones:
 *   get:
 *     summary: Obtiene una lista de todas las ubicaciones.
 *     responses:
 *       200:
 *         description: Una lista de ubicaciones.
 */
export const listaUbicacion = (req, res) => {
    const query = 'SELECT * FROM Ubicacion';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /ubicaciones/{id}:
 *   get:
 *     summary: Obtiene una ubicación por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la ubicación.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La ubicación con el ID especificado.
 */
export const ubicacion = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Ubicacion WHERE id_ubicacion = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /ubicaciones:
 *   post:
 *     summary: Crea una nueva ubicación.
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
 *     responses:
 *       201:
 *         description: La ubicación creada.
 */
export const nuevaUbicacion = (req, res) => {
    const { nombre, labelTag } = req.body;
    const query = 'INSERT INTO Ubicacion (nombre, labelTag) VALUES (?,?)';
    executeQuery(query, [nombre, labelTag], res, "Ubicacion creada.");
}

/**
 * @swagger
 * /ubicaciones/{id}:
 *   put:
 *     summary: Actualiza una ubicación.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la ubicación a actualizar.
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
 *     responses:
 *       200:
 *         description: La ubicación actualizada.
 */
export const updateUbicacion = (req, res) => {
    const { id } = req.params;
    const { nombre, labelTag } = req.body;
    const query = 'UPDATE Ubicacion SET nombre = ?, labelTag = ? WHERE id_ubicacion = ?';
    executeQuery(query, [nombre, labelTag, id], res, "Ubicacion actualizada");
}

/**
 * @swagger
 * /ubicaciones/{id}:
 *   delete:
 *     summary: Elimina una ubicación.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la ubicación a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: La ubicación ha sido eliminada.
 */
export const deleteUbicacion = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Ubicacion WHERE id_ubicacion = ?';
    executeQuery(query, [id], res, "Ubicacion eliminada.");
}