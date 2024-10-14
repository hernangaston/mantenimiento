import { createPool } from "mysql2/promise";
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
} from "./config_local.js";

export const db = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
});

try {
    const connection = await db.getConnection();
    try {
        await connection.query('SELECT 1');
        console.log("Conexión a la base de datos establecida correctamente");
    } finally {
        connection.release();
    }
} catch (error) {
    console.error('No se pudo conectar a la base de datos', error.message);
}