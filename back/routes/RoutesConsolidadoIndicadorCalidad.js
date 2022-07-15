import express from 'express'
import { createConsolidadoIndicadorCalidad, deleteConsolidadoIndicadorCalidad, getConsolidadoIndicadorCalidad, getConsolidadosIndicadoresCalidad, updateConsolidadoIndicadorCalidad } from '../controllers/ConsolidadoIndicadorCalidadController.js'
const router=express.Router()

//MOSTRAR TODOS LOS CONSOLIDADOS DE INDICADORES
router.get('/', getConsolidadosIndicadoresCalidad)

//BUSCAR LOS CONSOLIDADOS DE INDICADORES EN UNA ENTIDAD
router.get('/:Codigo_Habilitacion/:Id_Indicador/:Id_Vigencia', getConsolidadoIndicadorCalidad)

//CREAR UN CONSOLIDADO DE INDICADOR
router.post('/', createConsolidadoIndicadorCalidad)

//ACTUALIZAR UN CONSOLIDADO DE UNA ENTIDAD
router.put('/:Codigo_Habilitacion/:Id_Indicador/:Id_Vigencia', updateConsolidadoIndicadorCalidad)

//ELIMINAR UN CONSOLIDADO DE UNA ENTIDAD
router.delete('/:Codigo_Habilitacion/:Id_Indicador/:Id_Vigencia', deleteConsolidadoIndicadorCalidad)

export default router