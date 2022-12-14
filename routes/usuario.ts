import {Router} from 'express'
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controller/usuarios.controller';

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);


export default router;