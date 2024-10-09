import { executeQuery } from "../helpers/helpFunctions.js";

export const activoTarea = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM activo_tarea WHERE id_actar = ?';
    executeQuery(query, [id], res);
}

export const listaActivoTarea = async (req, res) => {
    const query = 'SELECT * FROM activo_tarea';
    executeQuery(query, [], res);
}

export const nuevoActivoTarea = async (req, res) => {
    const {id_activo, id_tarea} = req.body;
    const query = 'INSERT INTO activo_tarea (id_activo, id_tarea) VALUES (?,?)';
    executeQuery(query, [id_activo, id_tarea], res, "ActivoTarea creado.")
}

export const updateActivoTarea = async (req, res) => {
    const { id } = req.params;
    const {id_activo, id_tarea} = req.body;
    const query = 'UPDATE activo_tarea SET id_activo = ?, id_tarea = ? WHERE id_actar = ?';
    executeQuery(query, [id_activo, id_tarea, id], res, "ActivoTarea actualizado.");
}

export const deleteActivoTarea = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM activo_tarea WHERE id_actar = ?';
    executeQuery(query, [id], res, "ActivoTarea eliminado.");
}