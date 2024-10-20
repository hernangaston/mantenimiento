import { executeQuery } from "../helpers/helpFunctions.js";

export const listaEdificio = (req, res) => {
    const query = 'SELECT * FROM Edificios';
    executeQuery(query, [], res);
}

export const edificio = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Edificios WHERE id_edificio = ?';
    executeQuery(query, [id], res);
}

export const nuevoEdificio = (req, res) => {
    const { Nombre, Direccion, labelTag, id_piso } = req.body;
    const query = 'INSERT INTO Edificios (Nombre, Direccion, labelTag, id_piso, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';        
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso], res, "Edificio creado.");
}

export const actualizaEdificio = (req, res) => {
    const { id } = req.params;
    const { Nombre, Direccion, labelTag, id_piso } = req.body;
    const query = 'UPDATE Edificios SET Nombre = ?, Direccion = ?, labelTag = ?, id_piso = ?, fecha_creacion = ? WHERE id_edificio = ?';    
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso, id], res, "Edificio actualizado.");
}

export const deleteEdificio = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Edificios WHERE id_edificio = ?';
    executeQuery(query, [id], res, "Edificio eliminado.");
}