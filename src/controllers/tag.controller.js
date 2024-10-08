import { executeQuery } from "../helpers/helpFunctions.js";


export const nuevoTag = async (req, res) => {
    const { nombre, tag_diminutivo } = req.body;
    const query = 'INSERT INTO Tag (nombre, tag_diminutivo, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, tag_diminutivo], res, "Tag creado.");
}

export const tag = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res);
}

export const tags = async (req, res) => {
    const query = 'SELECT * FROM Tag';
    executeQuery(query, [], res);
}

export const updateTag = async (req, res) => {
    const { id } = req.params;
    const { nombre, tag_diminutivo } = req.body;
    const query = 'UPDATE Tag SET nombre = ?, tag_diminutivo = ? WHERE id_tag = ?';
    executeQuery(query, [nombre, tag_diminutivo, id], res, "Tag actualizado.");
}

export const deleteTag = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res, "Tag eliminado.");
}