import { db } from "../db.js";

export const dashboard = (req, res) => {
    const token = req.cookies['auth-token'];
    if (!token) return res.status(401).json({ message: 'Acceso denegado' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        res.status(200).json({ message: `Bienvenido, usuario con ID ${verified.id}` });
    } catch (error) {
        res.status(400).json({ message: 'Token no válido' });
    }
};