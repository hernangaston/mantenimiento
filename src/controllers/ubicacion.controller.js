/*CREATE TABLE IF NOT EXISTS Ubicacion (
  id_ubicacion SMALLINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  labelTag SMALLINT,
  fecha_creacion DATETIME
);*/

import { executeQuery } from "../helpers/helpFunctions.js";


export const listaUbicacion = async (req, res) => {
    const query = 'SELECT * FROM Ubicacion';
    executeQuery(query, [], res);
}

export const ubicacion = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Ubicacion WHERE id_ubicacion = ?';
    executeQuery(query, [id], res);
}

export const nuevaUbicacion = async (req, res) => {
    const { nombre, labelTag } = req.body;
    const query = 'INSERT INTO Ubicacion (nombre, labelTag) VALUES (?,?)';
    executeQuery(query, [nombre, labelTag], res, "Ubicacion creada.");
}

export const updateUbicacion = async (req, res) => {
    const { id } = req.params;
    const { nombre, labelTag } = req.body;
    const query = 'UPDATE Ubicacion SET nombre = ?, labelTag = ? WHERE id_ubicacion = ?';
    executeQuery(query, [nombre, labelTag, id], res, "Ubicacion actualizada");
} 


export const deleteUbicacion = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Ubicacion WHERE id_ubicacion = ?';
    executeQuery(query, [id], res, "Ubicacion eliminada.");
}