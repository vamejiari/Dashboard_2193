import express from 'express'
import { createRegistroCalidad, deleteRegistroCalidad, getRegistroCalidad, getRegistrosCalidad, updateRegistroCalidad } from '../controllers/RegistroCalidadController.js'
const router=express.Router()

//MOSTRAR TODOS LOS REGISTROS DE CALIDAD
router.get('/', getRegistrosCalidad)

//MOSTRAR LOS REGISTROS DE CALIDAD DE UNA ENTIDAD
router.get('/:Codigo_Habilitacion', getRegistroCalidad)

//CREAR UN REGISTRO DE CALIDAD
router.post('/', createRegistroCalidad)

//ACTUALIZAR UN REGISTRO DE CALIDAD
router.put('/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Periodo', updateRegistroCalidad)

//ELIMINAR UN REGISTRO DE CALIDAD
router.delete('/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Periodo', deleteRegistroCalidad)

export default router