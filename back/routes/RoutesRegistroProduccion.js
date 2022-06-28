import express from 'express'
import { createRegistro, deleteRegistro, getRegistro, getRegistros, updateRegistro } from '../controllers/RegistroProduccionController.js'
const router=express.Router()

//MOSTRAR TODOS LOS REGISTROS
router.get('/', getRegistros)

//MOSTRAR UN REGISTRO DE UNA ENTIDAD EN UN PERIODO DE UNA VARIABLE
router.get('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Periodo', getRegistro)

//CREAR UN REGISTRO
router.post('/', createRegistro)

//ACTUALIZAR UN REGISTRO
router.put('/:Id_Registro', updateRegistro)

//ELIMINAR UN REGISTRO
router.delete('/:Id_Registro', deleteRegistro)

export default router