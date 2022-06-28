import express from "express";
import {createNivel, deleteNivel, getNivel, getNiveles, updateNivel} from '../controllers/NivelController.js'

const router=express.Router()

//MOSTRAR TODOS LOS NIVELES
router.get('/',getNiveles)

//MOSTRAR UN MUNICIPIO
router.get('/:Id_Nivel',getNivel)

//CREAR UN NIVEL
router.post('/', createNivel)

//ACTUALIZAR UN NIVEL
router.put('/:Id_Nivel', updateNivel)

//ELIMINAR NIVEL
router.delete('/:Id_Nivel', deleteNivel)

export default router;