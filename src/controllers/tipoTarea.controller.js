import { executeQuery } from "../helpers/helpFunctions.js";

export const listaTipoTarea = (req, res) => {
    const query = 'SELECT * FROM tipo_tarea';
    executeQuery(query,[], res);
}

export const tipoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tipo_tarea WHERE id_tita = ?';
    executeQuery(query, [id], res);
}

export const nuevoTipoTarea = (req, res) => {
    const {nombre, descripcion} = req.body;
    const query = 'INSERT INTO tipo_tarea (nombre, descripcion, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, descripcion], res, "Tipo de tarea creado.");
}

export const updateTipoTarea = (req, res) => {
    const {id} = req.params;
    const {nombre, descripcion} = req.body;
    const query = 'UPDATE tipo_tarea SET nombre = ?, descripcion = ? WHERE id_tita = ?';
    executeQuery(query, [nombre, descripcion, id], res, "Tipo de tarea actualizado.");
}

export const deleteTipoTarea = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tipo_tarea WHERE id_tita = ?';
    executeQuery(query, [id], res, "Tipo de tarea eliminado.");
}