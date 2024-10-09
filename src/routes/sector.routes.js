import { Router } from "express";
import {listaSector,
    sector,
    nuevoSector,
    updateSector,
    deleteSector
} from "../controllers/sector.controller.js";


const router = Router();
router.get('/', listaSector);
router.get('/:id', sector);
router.post('/', nuevoSector);
router.put('/:id', updateSector);
router.delete('/:id', deleteSector);

export default router;
