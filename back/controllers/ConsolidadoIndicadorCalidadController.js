//IMPORTAR EL MODELO
import ConsolidadoIndicadorCalidadModel from "../models/ConsolidadoIndicadorCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS CONSOLIDADOS DE INDICADORES
export const getConsolidadosIndicadoresCalidad=async(req,res)=>{
    try {
        const consolidadosIndicadores=await ConsolidadoIndicadorCalidadModel.findAll()
        res.json(consolidadosIndicadores)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LOS CONSOLIDADOS DE UNA ENTIDAD
export const getConsolidadoIndicadorCalidad=async(req,res)=>{
    try {
        const consolidadoIndicador=await ConsolidadoIndicadorCalidadModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion
            }
        })
        res.json(consolidadoIndicador)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN CONSOLIDADO DE UN INDICADOR
export const createConsolidadoIndicadorCalidad=async(req,res)=>{
    try {
        await ConsolidadoIndicadorCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN CONSOLIDADO DE UNA ENTIDAD 
export const updateConsolidadoIndicadorCalidad=async(req,res)=>{
    try {
        await ConsolidadoIndicadorCalidadModel.update(req.body,{
            Codigo_Habilitacion:req.params.Codigo_Habilitacion,
            Id_Indicador:req.params.Id_Indicador,
            Id_Vigencia: req.params.Id_Vigencia
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN CONSOLIDADO DE UNA ENTIDAD
export const deleteConsolidadoIndicadorCalidad=async(req,res)=>{
    try {
        await ConsolidadoIndicadorCalidadModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador:req.params.Id_Indicador,
                Id_Vigencia: req.params.Id_Vigencia 
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}