import { executeQuery } from "../helpers/helpFunctions.js";

export const listaEdificio = async (req, res) => {
    const query = 'SELECT * FROM Edificio';
    executeQuery(query, [], res);
}

export const edificio = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Edificio WHERE id_edificio = ?';
    executeQuery(query, [id], res);
}

export const nuevoEdificio = async (req, res) => {
    const { Nombre, Direccion, labelTag, id_piso, fecha_creacion } = req.body;
    const query = 'INSERT INTO Edificio (Nombre, Direccion, labelTag, id_piso, fecha_creacion) VALUES (?, ?, ?, ?, ?)';        
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso, fecha_creacion], res, "Edificio creado.");
}

export const actualizaEdificio = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Direccion, labelTag, id_piso, fecha_creacion } = req.body;
    const query = 'UPDATE Edificio SET Nombre = ?, Direccion = ?, labelTag = ?, id_piso = ?, fecha_creacion = ? WHERE id_edificio = ?';    
    executeQuery(query, [Nombre, Direccion, labelTag, id_piso, fecha_creacion, id], res, "Edificio actualizado.");
}

export const deleteEdificio = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Edificio WHERE id_edificio = ?';
    executeQuery(query, [id], res, "Edificio eliminado.");
}