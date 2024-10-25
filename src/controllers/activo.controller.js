import { executeQuery } from "../helpers/helpFunctions.js";


export const listaActivo = (req, res) => {
    const query = 'SELECT * FROM Activo';
    executeQuery(query, [], res);
}

export const activo = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Activo WHERE id_activo = ?';
    executeQuery(query, [id], res);
}

export const nuevoActivo = (req, res) => {
    const { nombre, id_tag, Disponibilidad, labelTag, numero_existencia } = req.body;
    let numero_real = 1;
    const query = 'INSERT INTO Activo (nombre, id_tag, Disponibilidad, labelTag, numero_existencia, numero_real) VALUES (?,?,?,?,?,?)';
    executeQuery(query, [nombre, id_tag, Disponibilidad, labelTag, numero_existencia, numero_real], res, "Activo creado.");
}

export const updateActivo = (req, res) => {
    const { nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real } = req.body;
    const { id_activo } = req.params;

    const query = 'UPDATE Activo SET nombre = ?, id_tag = ?, Disponibilidad = ?, labelTag = ?, numero_existencia = ?, numero_real = ? WHERE id_activo = ?';
    executeQuery(query, [nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real, id_activo], res);
}

export const deleteActivo = (req, res) => {
    const { id_activo } = req.params;
    const query = 'DELETE FROM activo WHERE id_activo = ?';
    executeQuery(query, [id_activo], res);
}

export const tareaByActivo = (req, res) => {
    const id_activo = req.params.id;
    const query = `
      SELECT t.id_tarea, t.nombre 
      FROM Tarea t
      JOIN activo_tarea at ON t.id_tarea = at.id_tarea
      WHERE at.id_activo = ?`;
    executeQuery(query, [id_activo], res);
}

export const tagsByActivo = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Tag WHERE id_tag = ?';
    executeQuery(query, [id], res);
}

