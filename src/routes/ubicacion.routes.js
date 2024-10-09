import { Router } from "express";
import {ubicacion,
     listaUbicacion,
     nuevaUbicacion,
     updateUbicacion,
     deleteUbicacion
    } from "../controllers/ubicacion.controller.js";

const router = Router();

router.get('/', listaUbicacion);
router.get('/:id', ubicacion);
router.post('/', nuevaUbicacion);
router.patch('/:id', updateUbicacion);
router.delete('/:id', deleteUbicacion);

export default router;

