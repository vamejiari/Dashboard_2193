import express from 'express';
import { createDepartamento, deleteDepartamento, getDepartamento, getDepartamentos, updateDepartamento } from '../controllers/DepartamentoController.js';

const router=express.Router()

//MOSTRAR TODOS LOS DEPARTAMENTOS
router.get('/',getDepartamentos);

//MOSTRAR UN DEPARTAMENTO
router.get('/:Id_Departamento', getDepartamento);

//CREAR UN DEPARTAMENTO
router.post('/',createDepartamento);

//ACTUALIZAR UN DEPARTAMENTO
router.put('/:Id_Departamento', updateDepartamento);

//ELIMINAR UN DEPARTAMENTO
router.delete('/:Id_Departamento', deleteDepartamento);

export default router;