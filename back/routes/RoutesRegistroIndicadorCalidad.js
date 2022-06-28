import express from 'express'
import { createRegistroIndicadorCalidad, deleteRegistroIndicadorCalidad, getRegistroIndicadorCalidad, getRegistrosIndicadorCalidad, updateRegistroIndicadorCalidad } from '../controllers/RegistroIndicadorCalidadController.js'
const router=express.Router()

//MOSTRAR TODOS LOS REGISTROS
router.get('/', getRegistrosIndicadorCalidad)

//MOSTRAR LOS REGISTROS DE UNA ENTIDAD
router.get('/:Codigo_Habilitacion', getRegistroIndicadorCalidad)

//CREAR UN REGISTRO
router.post('/', createRegistroIndicadorCalidad)

//ACTUALIZAR UN REGISTRO
router.put('/:Codigo_Habilitacion/:Id_Indicador/:Id_Periodo', updateRegistroIndicadorCalidad)

//ELIMINAR UN REGISTRO
router.delete('/:Codigo_Habilitacion/:Id_Indicador/:Id_Periodo',deleteRegistroIndicadorCalidad)

export default router