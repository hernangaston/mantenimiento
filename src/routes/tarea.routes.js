import { Router } from "express";
import { listaTarea, tarea, nuevaTarea, updateTarea, deleteTarea } from "../controllers/tarea.controller.js";

const router = Router();

router.get('/', listaTarea);
router.get('/:id', tarea);
router.post('/', nuevaTarea);
router.patch('/:id', updateTarea);
router.delete('/:id', deleteTarea);

export default router;