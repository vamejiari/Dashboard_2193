import express from 'express'
import { createPeriodo, deletePeriodo, getPeriodo, getPeriodos, updatePeriodo } from '../controllers/PeriodoController.js'

const router=express.Router()

//MOSTRAR TODOS LOS PERIODOS
router.get('/', getPeriodos)

//MOSTRAR LOS PERIODOS DE UN AÑO
router.get('/:Id_Periodo', getPeriodo)

//CREAR UN NUEVO PERIODO
router.post('/', createPeriodo)

//ACTUALIZAR UN PERIODO
router.put('/:Id_Periodo', updatePeriodo)

//ELIMINAR UN PERIODO
router.delete('/:Id_Periodo', deletePeriodo)

export default router