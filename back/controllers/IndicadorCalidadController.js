//IMPORTAR EL MODELO
import IndicadorCalidadModel from "../models/IndicadorCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS INDICADORES
export const getIndicadoresCalidad=async(req,res)=>{
    try {
        const indicadoresCalidad=await IndicadorCalidadModel.findAll()
        res.json(indicadoresCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UN INDICADOR
export const getIndicadorCalidad=async(req,res)=>{
    try {
        const indicadorCalidad=await IndicadorCalidadModel.findAll({
            where:{
                Id_Indicador: req.params.Id_Indicador
            }
        })
        res.json(indicadorCalidad[0])
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//CREAR UN NUEVO INDICADOR
export const createIndicadorCalidad=async(req,res)=>{
    try {
        await IndicadorCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN INDICADOR
export const updateIndicadorCalidad=async(req,res)=>{
    try {
        await IndicadorCalidadModel.update(req.body,{
            where:{
                Id_Indicador: req.params.Id_Indicador
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN INDICADOR
export const deleteIndicadorCalidad=async(req,res)=>{
    try {
        await IndicadorCalidadModel.destroy({
            where:{
                Id_Indicador:req.params.Id_Indicador
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}