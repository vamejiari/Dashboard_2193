//IMPORTAR MODELO
import ConsolidadoCalidadModel from "../models/ConsolidadoCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS CONSOLIDADOS
export const getConsolidadosCalidad=async(req,res)=>{
    try {
        const consolidados=await ConsolidadoCalidadModel.findAll()
        res.json(consolidados)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//LISTAR LOS CONSOLIDADOS REGISTRADOS A UNA ENTIDAD
export const getConsolidadoCalidad=async(req,res)=>{
    try {
        const consolidado=await ConsolidadoCalidadModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Calidad: req.params.Id_Variable_Calidad,
                Id_Vigencia: req.params.Id_Vigencia
            }
        })
        res.json(consolidado)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREA UN NUEVO CONSOLIDADO
export const createConsolidadoCalidad=async(req,res)=>{
    try {
        await ConsolidadoCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN CONSOLIDADO DE UNA VARIABLE REGISTRADA A UNA ENTIDAD EN UNA VIGENCIA
export const updateConsolidadoCalidad=async(req,res)=>{
    try {
        await ConsolidadoCalidadModel.update(req.body,{
            Codigo_Habilitacion: req.params.Codigo_Habilitacion,
            Id_Variable_Calidad: req.params.Id_Variable_Calidad,
            Id_Vigencia: req.params.Id_Vigencia  
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN CONSOLIDADO DE UNA VARIABLE REGISTRADA A UN ENTIDAD EN UNA VIGENCIA
export const deleteConsolidadoCalidad=async(req,res)=>{
    try {
        await ConsolidadoCalidadModel.destroy({
            Codigo_Habilitacion:req.params.Codigo_Habilitacion,
            Id_Variable_Calidad:req.params.Id_Variable_Calidad,
            Id_Vigencia:req.params.Id_Vigencia
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}