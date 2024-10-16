import { executeQuery } from "../helpers/helpFunctions.js";

export const listaODT = (req, res) => {
    const query = 'SELECT * FROM Orden_trabajo';
    executeQuery(query, [], res);
}

export const oDt = (req, res) => {
    const { id } = req. params;
    const query = 'SELECT * FROM Orden_trabajo WHERE id_ot = ?';
    executeQuery(query, [id], res);
}

export const nuevaODT = (req, res) => {
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_operario, tiempo,
        id_edificio, id_piso, id_sector, id_ubicacion, id_activo } = req.body;
    console.log(req.body);

    const query = 'INSERT INTO Orden_trabajo (fecha_impresion, observacion, fecha_terminacion, realizada, id_operario, tiempo,\
        id_edificio, id_piso, id_sector, id_ubicacion, id_activo, fecha_creacion) VALUES (?,?,?,?,?,?,?,?,?,?,?, NOW())';
        
    executeQuery(query, [fecha_impresion, observacion, fecha_terminacion, realizada, id_operario, tiempo,
        id_edificio, id_piso, id_sector, id_ubicacion, id_activo], res, "Orden de trabajo creada.")
 }


export const updateODT = (req, res) => {
    const { id } = req.params;
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_operario, tiempo,
        id_edificio, id_piso, id_sector, id_ubicacion, id_activo } = req.body;
    const query = 'UPDATE Orden_trabajo SET fecha_impresion = ?, observacion = ?, fecha_terminacion = ?, realizada = ?, id_operario = ?, tiempo = ?,\
        id_edificio = ?, id_piso = ?, id_sector = ?, id_ubicacion = ?, id_activo = ? WHERE id_ot = ?';
    executeQuery(query, [fecha_impresion, observacion, fecha_terminacion, realizada, id_operario, tiempo,
        id_edificio, id_piso, id_sector, id_ubicacion, id_activo, id], res, "Orden de trabajo actualizada.")
 }

 export const deleteODT = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Orden_trabajo WHERE id_ot = ?';
    executeQuery(query, [id], res, "orden de trabajo eliminada.")
 }