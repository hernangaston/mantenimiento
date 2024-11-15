import { executeQuery } from "../helpers/helpFunctions.js";

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Creates a new tag.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               tag_deminutivo:
 *                 type: string
 *     responses:
 *       201:
 *         description: The newly created tag.
 */
export const nuevoTag = (req, res) => {
    const { nombre, tag_deminutivo } = req.body;
    const query = 'INSERT INTO Tag (nombre, tag_deminutivo, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, tag_deminutivo], res, "Tag creado.");
}

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Retrieves a tag by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tag.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tag with the specified ID.
 */
export const tag = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res);
}

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Retrieves a list of all tags.
 *     responses:
 *       200:
 *         description: A list of tags.
 */
export const tags = (req, res) => {
    const query = 'SELECT * FROM Tag';
    executeQuery(query, [], res);
}

/**
 * @swagger
 * /tags/{id}:
 *   put:
 *     summary: Updates a tag.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tag.
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
 *               tag_diminutivo:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated tag.
 */
export const updateTag = async (req, res) => {
    const { id } = req.params;
    const { nombre, tag_diminutivo } = req.body;
    const query = 'UPDATE Tag SET nombre = ?, tag_diminutivo = ? WHERE id_tag = ?';
    executeQuery(query, [nombre, tag_diminutivo, id], res, "Tag actualizado.");
}

/**
 * @swagger
 * /tags/{id}:
 *   delete:
 *     summary: Deletes a tag.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tag.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The tag was deleted successfully.
 */
export const deleteTag = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res, "Tag eliminado.");
}

/**
 * @swagger
 * /tags/{id}/activos:
 *   get:
 *     summary: Retrieves activos associated with a tag.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tag.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of activos associated with the tag.
 */
export const activoByTag = (req, res) => {
    const { id } = req.params;
    //const query = 'SELECT * FROM Tag WHERE id_tag = ?';
    const query = `
      SELECT * 
      FROM Activo
      WHERE id_tag = ?`;
    executeQuery(query, [id], res);
}