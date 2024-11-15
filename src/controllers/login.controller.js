import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from "../db.js";

/**
 * @swagger
 * /registro:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@example.com"
 *               rol:
 *                 type: string
 *                 example: "admin"
 *               password:
 *                 type: string
 *                 example: "contraseña123"
 *     responses:
 *       '201':
 *         description: Usuario registrado exitosamente
 *       '400':
 *         description: Email y contraseña son requeridos o el usuario ya existe
 *       '500':
 *         description: Error al registrar el usuario
 */
export const registro = async (req, res) => {
    const { email, rol, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    try {
        const [rows] = await db.query('SELECT * FROM Usuario WHERE email = ?', [email]);
        if (rows.length > 0) return res.status(400).json({ message: 'El usuario ya existe' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const userRol = rol || 'admin';
        await db.query('INSERT INTO Usuario (email, rol, password) VALUES (?, ?, ?)', [email, userRol, hashedPassword]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' + error });
    }
};

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión para un usuario registrado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "usuario@example.com"
 *               password:
 *                 type: string
 *                 example: "contraseña123"
 *     responses:
 *       '200':
 *         description: Sesión iniciada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                     rol:
 *                       type: string
 *       '401':
 *         description: Usuario no encontrado o contraseña incorrecta
 *       '500':
 *         description: Error al iniciar sesión
 */
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
        
        res.json({ message: 'sesion iniciada', token: token, user: { email: user.email, rol: user.rol } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

/**
 * @swagger
 * /protect:
 *   get:
 *     summary: Endpoint protegido (requiere token de autenticación)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Acceso permitido al endpoint protegido
 *       '403':
 *         description: Acceso denegado, token no válido o no proporcionado
 */
export const protect = (req, res) => {
    res.json({ message: 'This is a protected route' });
};

/**
 * @swagger
 * /verifyToken:
 *   get:
 *     summary: Verifica la validez de un token de autenticación
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Token válido, acceso permitido
 *       '403':
 *         description: No se proporcionó un token
 *       '500':
 *         description: Falló la autenticación del token
 */
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]; // Extraer el token después de 'Bearer'
    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó un token' });
    }
   
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Falló la autenticación del token ' });
        }
        req.userId = decoded.id;
        next();
    });
};
