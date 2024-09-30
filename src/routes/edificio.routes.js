import {listaEdificio, nuevoEdificio, edificio, actualizaEdificio, deleteEdificio} from "../controllers/edificio.controller";
const router = express.Router();


router.get('/', listaEdificio);
router.get('/:id', edificio);
router.post('/', nuevoEdificio);
router.put('/:id', actualizaEdificio);
router.delete('/:id', deleteEdificio);

module.exports = router;
