import express from 'express'
import { createConsolidadoProduccion, deleteConsolidadoProduccion, getConsolidadoProduccion, getConsolidadosProduccion, updateConsolidadoProduccion } from '../controllers/ConsolidadoProduccionController.js'
const router=express.Router()

//MOSTRAR TODOS LOS CONSOLIDADOS
router.get('/', getConsolidadosProduccion)

//MOSTRAR LOS CONSOLIDADOS DE UNA VARIABLE REGISTRADA EN UNA ENTIDAD
router.get('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Vigencia',getConsolidadoProduccion)

//CREAR UN CONSOLIDADO
router.post('/', createConsolidadoProduccion)

//ACTUALIZAR UN CONSOLIDADO
router.put('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Vigencia', updateConsolidadoProduccion)

//ELIMINAR UN CONSOLIDADO
router.delete('/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Vigencia', deleteConsolidadoProduccion)

export default router