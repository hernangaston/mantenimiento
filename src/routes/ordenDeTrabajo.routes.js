import { Router } from "express";
import { listaODT, oDt, nuevaODT, updateODT, deleteODT } from "../controllers/ordenDeTrabajo.controller.js";

const router = Router();
router.get('/', listaODT);
router.get('/:id', oDt);
router.post('/', nuevaODT);
router.put('/:id', updateODT);
router.delete('/:id', deleteODT);

export default router;
