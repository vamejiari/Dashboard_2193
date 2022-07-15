import express from 'express'
import { createConsolidadoCalidad, deleteConsolidadoCalidad, getConsolidadoCalidad, getConsolidadosCalidad, updateConsolidadoCalidad } from '../controllers/ConsolidadoCalidadController.js'
const router=express.Router()

//MOSTRAR TODOS LOS CONSOLIDADOS DE CALIDAD
router.get('/', getConsolidadosCalidad)

//MOSTRAR LOS CONSOLIDADOS DE UNA ENTIDAD
router.get('/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Vigencia', getConsolidadoCalidad)

//CREAR UN CONSOLIDADO
router.post('/', createConsolidadoCalidad)

//ACTUALIZAR UN CONSOLIDADO
router.put('/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Vigencia', updateConsolidadoCalidad)

//ELIMINAR UN CONSOLIDADO
router.delete('/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Vigencia', deleteConsolidadoCalidad)

export default router