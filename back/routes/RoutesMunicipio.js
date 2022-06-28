import express from "express";
import {createMunicipio, deleteMunicipio, getMunicipio, getMunicipios, getMunicipiosDepartamento, updateMunicipio} from '../controllers/MunicipioController.js'

const router=express.Router()

//MOSTRAR TODOS LOS MUNICIPIOS
router.get('/',getMunicipios)

//MOSTRAR UN MUNICIPIO
router.get('/:Id_Municipio',getMunicipio)

//CREAR UN MUNICIPIO
router.post('/',createMunicipio)

//ACTUALIZAR UN MUNICIPIO
router.put('/:Id_Municipio',updateMunicipio)

//ELIMINAR UN MUNICIPIO
router.delete('/:Id_Municipio', deleteMunicipio)

//---------------------*OTROS METODOS*------------------------------
router.get('/other/:Id_Departamento',getMunicipiosDepartamento)

export default router;