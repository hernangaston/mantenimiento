import { executeQuery } from "../helpers/helpFunctions.js";


export const listaActivo = async (req, res) => {
    const query = 'SELECT * FROM Activo';
    executeQuery(query, [], res);
}

export const activo = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Activo WHERE id_activo = ?';
    executeQuery(query, [id], res);
}

export const nuevoActivo = async (req, res) => {
    const {nombre, id_tag, disponibilidad, labelTag, numero_existencia} = req.body;
    let numero_real = 1;
    const query = 'INSERT INTO Activo (nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real) VALUES (?,?,?,?,?,?)';
    executeQuery(query, [nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real], res);
}

export const updateActivo = async (req, res) => {
    const {nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real} = req.body;
    const { id_activo } = req.params; 
    
    const query = 'UPDATE Activo SET nombre = ?, id_tag = ?, disponibilidad = ?, labelTag = ?, numero_existencia = ?, numero_real = ? WHERE id_activo = ?';
    executeQuery(query, [nombre, id_tag, disponibilidad, labelTag, numero_existencia, numero_real, id_activo]. res);
}

export const deleteActivo = async (req, res) => {
    const {id_activo} = req.params;
    const query = 'DELETE FROM activo WHERE id_activo = ?';
    executeQuery(query, [id_activo], res);
}

