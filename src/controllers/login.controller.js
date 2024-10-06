import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from "../db.js";

export const registro = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    try {
        const [rows] = await db.query('SELECT * FROM Usuario WHERE email = ?', [email]);
        if (rows.length > 0) return res.status(400).json({ message: 'El usuario ya existe' });
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('INSERT INTO Usuario (email, password) VALUES (?, ?)', [email, hashedPassword]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario'+error });
    }
};

export const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM `Usuario` WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '15 mins' });
        res.cookie('auth-token', token, { httpOnly: false, sameSite: 'lax' })
        res.json({ message: 'Inicio de sesión exitoso' });

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