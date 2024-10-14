/*CREATE TABLE IF NOT EXISTS Piso (
  id_piso SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  labelTag SMALLINT,
  id_sector SMALLINT,
  fecha_creacion DATETIME,
  FOREIGN KEY (id_sector) REFERENCES Sector (id_sector)
);*/

import { executeQuery } from "../helpers/helpFunctions.js";

export const listaPiso = (req, res) => {
    const query = 'SELECT * FROM Piso';
    executeQuery(query, [], res);
}

export const piso = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Piso WHERE id_piso = ?';
    executeQuery(query, [id], res);
}

export const nuevoPiso = (req, res) => {
    const {  nombre, labelTag, id_sector } = req.body;
    const query = 'INSERT INTO Piso (nombre, labelTag, id_sector) VALUES (?,?,?)';
    executeQuery(query, [nombre, labelTag, id_sector], res, "Piso creado.");
}

export const updatePiso = (req, res) => {
    const { id } = req.params;
    const {  nombre, labelTag, id_sector } = req.body;
    const query = 'UPDATE Piso SET nombre = ?, labelTag = ?, id_sector = ? WHERE id_piso = ?';
    executeQuery(query, [nombre, labelTag, id_sector, id], res, "Piso actualizado.")
}

export const deletePiso = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Piso WHERE id_piso = ?';
    executeQuery(query, [id], res, "Piso eliminado.")
}