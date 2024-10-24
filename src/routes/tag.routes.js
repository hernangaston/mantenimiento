import { Router } from "express";
import { nuevoTag, tags, tag, updateTag, deleteTag, activoByTag } from "../controllers/tag.controller.js";

const router = Router();
router.get('/', tags);
router.get('/:id', tag);
router.post('/', nuevoTag);
router.patch('/:id', updateTag);
router.delete('/:id', deleteTag);
router.get('/:id/activo',activoByTag);


router.use((req, res, next) => {
    res.status(404).send("No existe pagina...");
});

export default router;