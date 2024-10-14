import { Router } from "express";
import {listaOperario, operario, nuevoOperario, updateOperario, deleteOperario} from "../controllers/operario.controller.js"


const router = Router();

router.get('', listaOperario);
router.get('/:id', operario);
router.post('/', nuevoOperario);
router.patch('/:id', updateOperario);
router.delete('/:id', deleteOperario);

export default router;