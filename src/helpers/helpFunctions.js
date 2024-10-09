import { db } from "../db.js";

export const executeQuery = async (query, params, res, successMessage) => {
    console.log("ejecutando query")
    try {
        const results = db.execute(query, params);
        res.json(successMessage ? { message: successMessage } : [results]);
    } catch (error) {
        console.log('error de servidor')
        res.status(500).json({ error: error.message });
    }
};