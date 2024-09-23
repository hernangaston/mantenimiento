import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from "../db.js";

export const registro = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute(
            'INSERT INTO usuario (email, password) VALUES (?, ?)',
            [email, hashedPassword]
        );
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM `usuario` WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);//devuelve true o false
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000, // 1 hour in milliseconds
        });

        res.json({ token });//devuelve el token

    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

export const protect = (req, res) => {
    res.json({ message: 'This is a protected route' });
};

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó un token' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Falló la autenticación del token' });
        }
        req.userId = decoded.id;
        next();
    });
};