import { Router } from "express";
import { activoTarea, listaActivoTarea, nuevoActivoTarea, updateActivoTarea, deleteActivoTarea } from "../controllers/activoTarea.controller.js";

const router = Router();
router.get('/', listaActivoTarea);
router.get('/:id', activoTarea);
router.post('/', nuevoActivoTarea);
router.patch('/:id', updateActivoTarea);
router.delete('/:id', deleteActivoTarea);

export default router;
