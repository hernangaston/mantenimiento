import { Router } from "express";
import { nuevoTag, tags, tag, updateTag, deleteTag } from "../controllers/tag.controller.js";

const router = Router();
router.get('/', tags);
router.get('/:id', tag);
router.post('/', nuevoTag);
router.patch('/:id', updateTag);
router.delete('/:id', deleteTag);

export default router;