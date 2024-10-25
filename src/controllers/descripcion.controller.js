import { executeQuery } from "../helpers/helpFunctions.js";


export const listaDescripcion = (req, res) => {
    const query = 'SELECT * FROM Descripcion';
    executeQuery(query, [], res);
}

export const descripcion = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Descripcion WHERE id_descripcion = ?';
    executeQuery(query, [id], res);
}

export const nuevoDescripcion = (req, res) => {
    const { nombre, descripcion, id_tita } = req.body;
    let numero_real = 1;
    const query = 'INSERT INTO Descripcion (nombre, descripcion, id_tita) VALUES (?,?,?)';
    executeQuery(query, [nombre, descripcion, id_tita], res, "Descripcion creada.");
}

export const updateDescripcion = (req, res) => {
    const { nombre, descripcion, id_tita } = req.body;
    const { id_descripcion } = req.params;

    const query = 'UPDATE Descripcion SET nombre = ?, descripcion = ?, id_tita = ? WHERE id_descripcion = ?';
    executeQuery(query, [nombre, descripcion, id_tita, id_descripcion], res);
}

export const deleteDescripcion = (req, res) => {
    const { id_descripcion } = req.params;
    const query = 'DELETE FROM Descripcion WHERE id_descripcion = ?';
    executeQuery(query, [id_descripcion], res);
}
