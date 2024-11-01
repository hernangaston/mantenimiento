import { executeQuery, executeQueryRes } from "../helpers/helpFunctions.js";
import { db } from "../db.js";
/**
 * @swagger
 * tags:
 *   name: Ordenes
 *   description: Endpoints para gestionar órdenes de trabajo.
 * 
 * /ordenes-trabajo:
 *   get:
 *     summary: Obtiene una lista de órdenes de trabajo.
 *     responses:
 *       200:
 *         description: Lista de órdenes de trabajo.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
export const listaODT = (req, res) => {
    const query = `
    SELECT 
        ot.id_ot, ot.fecha_impresion, ot.observacion, ot.fecha_terminacion, ot.realizada, ot.id_op, ot.tiempo,
        e.Nombre AS nombre_edificio, e.Direccion AS direccion_edificio,
        p.nombre AS nombre_piso, s.nombre AS nombre_sector, u.nombre AS nombre_ubicacion, a.nombre AS nombre_activo,
        ot.fecha_creacion, t.nombre AS nombre_tag, t.tag_deminutivo AS diminutivo , oper.nombre AS nombre_operario, oper.apellido AS apellido_operario 
        FROM Orden_trabajo ot
        LEFT JOIN Edificio e ON ot.id_edificio = e.id_edificio
        LEFT JOIN Piso p ON ot.id_piso = p.id_piso
        LEFT JOIN Sector s ON ot.id_sector = s.id_sector
        LEFT JOIN Ubicacion u ON ot.id_ubicacion = u.id_ubicacion
        LEFT JOIN Activo a ON ot.id_activo = a.id_activo
        LEFT JOIN Operario oper ON ot.id_op = oper.id_op
        LEFT JOIN Tag t ON a.id_tag = t.id_tag;
        `;
    executeQuery(query, [], res);
}
/**
 * @swagger
 * /ordenes-trabajo/{id}:
 *   get:
 *     summary: Obtiene una orden de trabajo específica por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de trabajo
 *     responses:
 *       200:
 *         description: Información de la orden de trabajo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
export const oDt = (req, res) => {
    const { id } = req.params;
    const query = `
    SELECT 
        ot.id_ot, ot.fecha_impresion, ot.observacion, ot.fecha_terminacion, ot.realizada, ot.id_op, ot.tiempo,
        e.Nombre AS nombre_edificio, e.Direccion AS direccion_edificio,
        p.nombre AS nombre_piso, s.nombre AS nombre_sector, u.nombre AS nombre_ubicacion, a.nombre AS nombre_activo,
        ot.fecha_creacion, t.nombre AS nombre_tag, t.tag_deminutivo AS diminutivo , oper.nombre AS nombre_operario, oper.apellido AS apellido_operario 
        FROM Orden_trabajo ot
        LEFT JOIN Edificio e ON ot.id_edificio = e.id_edificio
        LEFT JOIN Piso p ON ot.id_piso = p.id_piso
        LEFT JOIN Sector s ON ot.id_sector = s.id_sector
        LEFT JOIN Ubicacion u ON ot.id_ubicacion = u.id_ubicacion
        LEFT JOIN Activo a ON ot.id_activo = a.id_activo
        LEFT JOIN Operario oper ON ot.id_op = oper.id_op
        LEFT JOIN Tag t ON a.id_tag = t.id_tag
        WHERE ot.id_ot = ?;
        `;
    executeQuery(query, [id], res);
}
/**
 * @swagger
 * /ordenes-trabajo:
 *   post:
 *     summary: Crea una nueva orden de trabajo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_impresion:
 *                 type: string
 *                 format: date
 *               observacion:
 *                 type: string
 *               fecha_terminacion:
 *                 type: string
 *                 format: date
 *               realizada:
 *                 type: boolean
 *               id_op:
 *                 type: integer
 *               id_edificio:
 *                 type: integer
 *               id_piso:
 *                 type: integer
 *               id_sector:
 *                 type: integer
 *               id_tarea:
 *                 type: array
 *                 items:
 *                   type: integer
 *               id_ubicacion:
 *                 type: integer
 *               id_activo:
 *                 type: integer
 *               tiempo:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Orden de trabajo creada exitosamente.
 */
export const nuevaODT = async (req, res) => {
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_op, id_edificio, id_piso, id_sector,id_tarea, id_ubicacion, id_activo, tiempo } = req.body;
    const query = 'INSERT INTO Orden_trabajo (fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, fecha_creacion) VALUES (?,?,?,?,?,?,?,?,?,?,?, NOW())';
    const params = [fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo];
    
    const t = await executeQueryRes(query, params);
    const id_orden = t.insertId;
    if (Array.isArray(id_tarea)) {
        for (let d of id_tarea) {
            const query2 = `INSERT INTO Descripcion_Orden (id_orden, id_descripcion) VALUES (?, ?)`;
            try {
                await db.execute(query2, [id_orden, d]);
            } catch (error) {
                console.log("no se pudo guardar las tareas de la orden: ", error);
            }
            
        }
    }
}
/**
 * @swagger
 * /ordenes-trabajo/{id}:
 *   put:
 *     summary: Actualiza una orden de trabajo existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de trabajo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_impresion:
 *                 type: string
 *                 format: date
 *               observacion:
 *                 type: string
 *               fecha_terminacion:
 *                 type: string
 *                 format: date
 *               realizada:
 *                 type: boolean
 *               id_op:
 *                 type: integer
 *               tiempo:
 *                 type: integer
 *               id_edificio:
 *                 type: integer
 *               id_piso:
 *                 type: integer
 *               id_sector:
 *                 type: integer
 *               id_ubicacion:
 *                 type: integer
 *               id_activo:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Orden de trabajo actualizada exitosamente.
 */
export const updateODT = (req, res) => {
    const { id } = req.params;
    const { fecha_impresion, observacion, fecha_terminacion, realizada, id_op, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, tiempo } = req.body;
    const query = 'UPDATE Orden_trabajo SET fecha_impresion = IFNULL(?, fecha_impresion), observacion = IFNULL(?,observacion), fecha_terminacion = IFNULL(?, fecha_terminacion), realizada = IFNULL(?,realizada), id_op = IFNULL(?,id_op) , tiempo = IFNULL(?,tiempo) ,\
        id_edificio = IFNULL(?, id_edificio), id_piso = IFNULL(?,id_piso), id_sector = IFNULL(?,id_sector), id_ubicacion = IFNULL(?,id_ubicacion), id_activo = IFNULL(?, id_activo) WHERE id_ot = ?';
    executeQuery(query, [fecha_impresion, observacion, fecha_terminacion, realizada, id_op, tiempo, id_edificio, id_piso, id_sector, id_ubicacion, id_activo, id], res, "Orden de trabajo actualizada.")
}
/**
 * @swagger
 * /ordenes-trabajo/{id}:
 *   delete:
 *     summary: Elimina una orden de trabajo por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de trabajo a eliminar
 *     responses:
 *       200:
 *         description: Orden de trabajo eliminada exitosamente.
 */
export const deleteODT = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Orden_trabajo WHERE id_ot = ?';
    executeQuery(query, [id], res, "orden de trabajo eliminada.")
}