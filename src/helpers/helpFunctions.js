import { db } from "../db.js";

export const executeQuery = async (query, params, res, successMessage) => {
    try {
        const [results] = await db.execute(query, params);
        res.json(successMessage ? { message: successMessage } : results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const executeQueryRes = async (query, params) => {
    try {
        const [results] = await db.execute(query, params);
        return results;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};