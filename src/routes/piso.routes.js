import { Router } from "express";

import {listaPiso,
    piso,
    nuevoPiso,
    updatePiso,
    deletePiso
} from "../controllers/piso.controller.js";

const router = Router();

router.get('/', listaPiso);
router.get('/:id', piso);
router.post('/', nuevoPiso);
router.patch('/:id', updatePiso);
router.delete('/:id', deletePiso);

export default router;
