import { executeQuery } from "../helpers/helpFunctions.js";

export const listaODT = (req, res) => {
    const query = 'SELECT * FROM Orden_trabajo';
    executeQuery(query, [], res);
}

export const oDt = (req, res) => {
    const { id } = req.params;
    //const query = 'SELECT * FROM Orden_trabajo WHERE id_ot = ?';
    const query = `
    SELECT 
        ot.id_ot, ot.fecha_impresion, ot.observacion, ot.fecha_terminacion, ot.realizada, ot.id_op, ot.tiempo,
        e.Nombre AS nombre_edificio, e.Direccion AS direccion_edificio,
        p.nombre AS nombre_piso, s.nombre AS nombre_sector, u.nombre AS nombre_ubicacion, a.nombre AS nombre_activo,
        ot.fecha_creacion
        FROM Orden_trabajo ot
        LEFT JOIN Edificios e ON ot.id_edificio = e.id_edificio
        LEFT JOIN Piso p ON ot.id_piso = p.id_piso
        LEFT JOIN Sector s ON ot.id_sector = s.id_sector
        LEFT JOIN Ubicacion u ON ot.id_ubicacion = u.id_ubicacion
        LEFT JOIN Activo a ON ot.id_activo = a.id_activo
        WHERE ot.id_ot = ?;
        `;
    executeQuery(query, [id], res);
}

export const nuevaODT = (req, res) => {
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_op, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, tiempo } = req.body;
    const query = 'INSERT INTO Orden_trabajo (fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, fecha_creacion) VALUES (?,?,?,?,?,?,?,?,?,?,?, NOW())';
    executeQuery(query, [fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo], res, "Orden de trabajo creada.");
}

export const updateODT = (req, res) => {
    const { id } = req.params;
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_op, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, tiempo } = req.body;
    const query = 'UPDATE Orden_trabajo SET fecha_impresion = IFNULL(?, fecha_impresion), observacion = IFNULL(?,observacion), fecha_terminacion = IFNULL(?, fecha_terminacion), realizada = IFNULL(?,realizada), id_op = IFNULL(?,id_op) , tiempo = IFNULL(?,tiempo) ,\
        id_edificio = IFNULL(?, id_edificio), id_piso = IFNULL(?,id_piso), id_sector = IFNULL(?,id_sector), id_ubicacion = IFNULL(?,id_ubicacion), id_activo = IFNULL(?, id_activo) WHERE id_ot = ?';
    executeQuery(query, [fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, id], res, "Orden de trabajo actualizada.")
}

export const deleteODT = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Orden_trabajo WHERE id_ot = ?';
    executeQuery(query, [id], res, "orden de trabajo eliminada.")
}