import { executeQuery } from "../helpers/helpFunctions.js";


export const listaOperario = (req, res) => {
    const query = 'SELECT * FROM operario';
    executeQuery(query, [], res);
}

export const operario = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM operario WHERE id_op = ?';
    executeQuery(query, [id], res);
}

export const nuevoOperario = (req, res) => {
    const {nombre, apellido} = req.body;
    const query = 'INSERT INTO operario (nombre, apellido, fecha_creacion) VALUES (?, ?, NOW())';
    executeQuery(query, [nombre, apellido], res, "Operario creado.");
}

export const updateOperario = (req, res) => {
    const {nombre, apellido} = req.body;
    const { id_op } = req.params;     
    const query = 'UPDATE operario SET nombre = ?, apellido = ? WHERE id_op = ?';
    executeQuery(query, [nombre, apellido, id_op], res);
}

export const deleteOperario = (req, res) => {
    const {id_op} = req.params;
    const query = 'DELETE FROM operario WHERE id_op = ?';
    executeQuery(query, [id_op], res);
}

