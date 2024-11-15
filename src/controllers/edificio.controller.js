import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /edificio:
 *   get:
 *     summary: Obtiene la lista de todos los edificios
 *     responses:
 *       '200':
 *         description: Lista de todos los edificios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_edificio:
 *                     type: integer
 *                   Nombre:
 *                     type: string
 *                   Direccion:
 *                     type: string
 *                   labelTag:
 *                     type: string
 *                   id_piso:
 *                     type: integer
 *                   fecha_creacion:
 *                     type: string
 *                     format: date-time
 */
export const listaEdificio = (req, res) => {
    const query = 'SELECT * FROM Edificio';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /edificio/{id}:
 *   get:
 *     summary: Obtiene un edificio por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del edificio a obtener
 *     responses:
 *       '200':
 *         description: Edificio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_edificio:
 *                   type: integer
 *                 Nombre:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 labelTag:
 *                   type: string
 *                 id_piso:
 *                   type: integer
 *                 fecha_creacion:
 *                   type: string
 *                   format: date-time
 */
export const edificio = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Edificio WHERE id_edificio = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /edificio:
 *   post:
 *     summary: Crea un nuevo edificio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               labelTag:
 *                 type: string
 *               id_piso:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Edificio creado exitosamente
 */
export const nuevoEdificio = (req, res) => {
    const { Nombre, Direccion, labelTag, id_piso } = req.body;
    const query = 'INSERT INTO Edificio (Nombre, Direccion, labelTag, id_piso, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';        
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso], res, "Edificio creado.");
}

/**
 * @swagger
 * /edificio/{id}:
 *   put:
 *     summary: Actualiza un edificio existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del edificio a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               labelTag:
 *                 type: string
 *               id_piso:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Edificio actualizado exitosamente
 */
export const actualizaEdificio = (req, res) => {
    const { id } = req.params;
    const { Nombre, Direccion, labelTag, id_piso } = req.body;
    const query = 'UPDATE Edificio SET Nombre = ?, Direccion = ?, labelTag = ?, id_piso = ?, fecha_creacion = NOW() WHERE id_edificio = ?';    
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso, id], res, "Edificio actualizado.");
}

/**
 * @swagger
 * /edificio/{id}:
 *   delete:
 *     summary: Elimina un edificio por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del edificio a eliminar
 *     responses:
 *       '200':
 *         description: Edificio eliminado exitosamente
 */
export const deleteEdificio = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Edificio WHERE id_edificio = ?';
    executeQuery(query, [id], res, "Edificio eliminado.");
}
