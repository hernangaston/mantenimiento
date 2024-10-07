import { executeQuery } from "../helpers/helpFunctions.js";


export const listaTarea = async (req, res) => {
    const query = 'SELECT * FROM Tarea';
    executeQuery(query, [], res);
}

export const tarea = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tarea WHERE id_tarea = ?';
    executeQuery(query, [id], res);
}

export const nuevaTarea = async (req, res) => {
    const {id_tita, tiempo_estimado, } = req.body;
    const query = 'INSER INTO Tarea (id_tita, tiempo_estimado) VALUES (?,?)';
    executeQuery(query, [id_tita, tiempo_estimado], res, "Tarea creada.")
}

export const updateTarea = async (req, res) => {
    const { id } = req.params;
    const { id_tita, tiempo_estimado, } = req.body;
    const query = 'UPDATE Tarea SET id_tita = ?, tiempo_estimado = ? WHERE id_tarea = ?';
    executeQuery(query, [id_tita, tiempo_estimado, id], res, "Tarea actualizada.")
}

export const deleteTarea = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tarea WHERE id_tarea = ?';
    executeQuery(query, [id], res, "Tarea eliminada");
}