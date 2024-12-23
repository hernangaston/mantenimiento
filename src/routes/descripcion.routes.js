import { Router } from "express";
import { listaDescripcion, descripcion, nuevoDescripcion, updateDescripcion, deleteDescripcion, descripcionByTtarea, descripcionByOrden } from "../controllers/descripcion.controller.js";

const router = Router();

router.get('', listaDescripcion);
router.get('/:id', descripcion);
router.post('/', nuevoDescripcion);
router.patch('/:id', updateDescripcion);
router.delete('/:id', deleteDescripcion);
router.get('/:id/tita', descripcionByTtarea);
router.get('/:id/orden', descripcionByOrden);

export default router;