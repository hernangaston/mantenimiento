import { Router } from "express";
import { listaActivo, activo, nuevoActivo, updateActivo, deleteActivo } from "../controllers/activo.controller.js";

const router = Router();

router.get('', listaActivo);
router.get('/:id', activo);
router.post('/', nuevoActivo);
router.patch('/:id', updateActivo);
router.delete('/:id', deleteActivo);

export default router;