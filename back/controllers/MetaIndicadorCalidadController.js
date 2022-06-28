//IMPORTAR EL MODELO
import MetaIndicadorCalidadModel from "../models/MetaIndicadorCalidadModel.js";

//----------*METODOS CRUD*----------
//LISTAR TODAS LAS METAS DE INDICADORES
export const getMetasIndicadoresCalidad=async(req,res)=>{
    try {
        const metasIndicadores=await MetaIndicadorCalidadModel.findAll()
        res.json(metasIndicadores)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LA META DE UN INDICADOR
export const getMetaIndicadorCalidad=async(req,res)=>{
    try {
        const metaIndicador=await MetaIndicadorCalidadModel.findAll({
            where:{
                Id_Meta_Indicador: req.params.Id_Meta_Indicador
            }
        })
        res.json(metaIndicador[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR LA META DE UN INDICADOR
export const createMetaIndicadorCalidad=async(req,res)=>{
    try {
        await MetaIndicadorCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR LA META DE UN INDICADOR
export const updateMetaIndicadorCalidad=async(req,res)=>{
    try {
        await MetaIndicadorCalidadModel.update(req.body,{
            where:{
                Id_Meta_Indicador: req.params.Id_Meta_Indicador
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR LA META DE UN INDICADOR
export const deleteMetaIndicadorCalidad=async(req,res)=>{
    try {
        await MetaIndicadorCalidadModel.destroy({
            where:{
                Id_Meta_Indicador: req.params.Id_Meta_Indicador
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}