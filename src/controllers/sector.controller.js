/*CREATE TABLE IF NOT EXISTS Sector (
  id_sector SMALLINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  labelTag SMALLINT,
  id_activo SMALLINT,
  id_ubicacion SMALLINT,
  fecha_creacion DATETIME,
  FOREIGN KEY (id_activo) REFERENCES Activo (id_activo),
  FOREIGN KEY (id_ubicacion) REFERENCES Ubicacion (id_ubicacion)
);*/


import { executeQuery } from "../helpers/helpFunctions.js";

export const listaSector = (req, res) => {
    const query = 'SELECT * FROM Sector';
    executeQuery(query, [], res);
}

export const sector = (req, res) => {
    const { id } = rew.params;
    const query = 'SELECT * FROM Sector WHERE id_sector = ?';
    executeQuery(query, [id], res);
}

export const nuevoSector = (req, res) => {
    const { nombre, labelTag, id_activo, id_ubicacion } = req.body;
    const query = 'INSERT INTO Sector (nombre, labelTag, id_activo, id_ubicacion) VALUES (?, ?, ?, ?)';        
    executeQuery(query, [nombre, labelTag, id_activo, id_ubicacion], res, "Sector creado.");
}

export const updateSector = (req, res) => {
    const { id } = rew.params;
    const { nombre, labelTag, id_activo, id_ubicacion } = req.body;
    const query = 'UPDATE Sector SET nombre=?, labelTag=?, id_activo=?, id_ubicacion=? WHERE id_sector = ?';    
    executeQuery(query, [nombre, labelTag, id_activo, id_ubicacion, id], res, "Sector actualizado.");
}

export const deleteSector = (req, res) => {
    const { id } = rew.params;
    const query = 'DELETE FROM Sector WHERE id_sector = ?';
    executeQuery(query, [id], res, "Sector eliminado.");
}