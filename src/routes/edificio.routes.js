import { Router } from "express";
import { listaEdificio, edificio, nuevoEdificio, actualizaEdificio, deleteEdificio } from "../controllers/edificio.controller.js";

const router = Router();
router.get('', listaEdificio);
router.get('/:id', edificio);
router.post('', nuevoEdificio);
router.put('/:id', actualizaEdificio);
router.delete('/:id', deleteEdificio);

export default router;
