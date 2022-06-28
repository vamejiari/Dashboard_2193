import express from "express"
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from '../controllers/UsuarioController.js'

const router=express.Router()

//MOSTRAR TODOS LOS USUARIOS
router.get('/',getUsuarios)

//MOSTRAR UN USUARIO
router.get('/:Cedula', getUsuario)

//CREAR UN USUARIO
router.post('/', createUsuario)

//ACTUALIZAR UN USUARIO
router.put('/:Cedula', updateUsuario)

//ELIMINAR UN USUARIO
router.delete('/:Cedula', deleteUsuario)

export default router