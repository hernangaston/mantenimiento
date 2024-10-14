import { db } from "../db.js";

export const executeQuery = async (query, params, res, successMessage) => {
    console.log(params);
    try {
        const results = await db.execute(query, params);
        res.json(successMessage ? { message: successMessage } : results[0]);
    } catch (error) {
        console.log('error de servidor')
        res.status(500).json({ error: error.message });
    }
};