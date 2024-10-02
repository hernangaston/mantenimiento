import { db } from "../db.js";

export const listaEdificio = async (req, res) => {
    await db.query('SELECT * FROM Edificio', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
}

export const edificio = async (req, res) => {
    const { id } = req.params;
    await db.query('SELECT * FROM Edificio WHERE id_edificio = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
}
export const nuevoEdificio = async (req, res) => {
    const { Nombre, Direccion, labelTag, id_piso, fecha_creacion } = req.body;
    const query = 'INSERT INTO Edificio (Nombre, Direccion, labelTag, id_piso, fecha_creacion) VALUES (?, ?, ?, ?, ?)';
    await db.query(query, [Nombre, Direccion, labelTag, id_piso, fecha_creacion], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Edificio creado con éxito', id: result.insertId });
    });
}

export const actualizaEdificio = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Direccion, labelTag, id_piso, fecha_creacion } = req.body;
    const query = 'UPDATE Edificio SET Nombre = ?, Direccion = ?, labelTag = ?, id_piso = ?, fecha_creacion = ? WHERE id_edificio = ?';
    await db.query(query, [Nombre, Direccion, labelTag, id_piso, fecha_creacion, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Edificio actualizado con éxito' });
    });
}

export const deleteEdificio = async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM Edificio WHERE id_edificio = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Edificio eliminado con éxito' });
    });
}