import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /sectores:
 *   get:
 *     summary: Retrieves a list of all sectores.
 *     responses:
 *       200:
 *         description: A list of sectores.
 */
export const listaSector = (req, res) => {
    const query = 'SELECT * FROM Sector';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /sectores/{id}:
 *   get:
 *     summary: Retrieves a sector by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the sector.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The sector with the specified ID.
 */
export const sector = (req, res) => {
    const { id } = req.params; // Corrected typo in `rew.params`
    const query = 'SELECT * FROM Sector WHERE id_sector = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /sectores:
 *   post:
 *     summary: Creates a new sector.
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
 *               id_activo:
 *                 type: integer
 *               id_ubicacion:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The newly created sector.
 */
export const nuevoSector = (req, res) => {
    const { nombre, labelTag, id_activo, id_ubicacion } = req.body;
    const query = 'INSERT INTO Sector (nombre, labelTag, id_activo, id_ubicacion, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';        
    executeQuery(query, [nombre, labelTag, id_activo, id_ubicacion], res, "Sector creado.");
}

/**
 * @swagger
 * /sectores/{id}:
 *   put:
 *     summary: Updates a sector.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the sector.
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
 *               id_activo:
 *                 type: integer
 *               id_ubicacion:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated sector.
 */
export const updateSector = (req, res) => {
    const { id } = req.params; // Corrected typo in `rew.params`
    const { nombre, labelTag, id_activo, id_ubicacion } = req.body;
    const query = 'UPDATE Sector SET nombre=?, labelTag=?, id_activo=?, id_ubicacion=? WHERE id_sector = ?';    
    executeQuery(query, [nombre, labelTag, id_activo, id_ubicacion, id], res, "Sector actualizado.");
}

/**
 * @swagger
 * /sectores/{id}:
 *   delete:
 *     summary: Deletes a sector.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the sector.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The sector was deleted successfully.
 */
export const deleteSector = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Sector WHERE id_sector = ?';
    executeQuery(query, [id], res, "Sector eliminado.");
}