import { Router } from "express";
import { listaTipoTarea, tipoTarea, nuevoTipoTarea, updateTipoTarea, deleteTipoTarea } from "../controllers/tipoTarea.controller.js";

const router = Router();
router.get('/', listaTipoTarea);
router.get('/:id', tipoTarea);
router.post('/', nuevoTipoTarea);
router.patch('/:id', updateTipoTarea);
router.delete('/:id', deleteTipoTarea);

export default router;