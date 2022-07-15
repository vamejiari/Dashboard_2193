//IMPORTAR EL MODELO
import RegistroIndicadorCalidadModel from "../models/RegistroIndicadorCalidadModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS REGISTRO DE INDICADORES
export const getRegistrosIndicadorCalidad=async(req,res)=>{
    try {
        const registrosIndicadorCalidad=await RegistroIndicadorCalidadModel.findAll()
        res.json(registrosIndicadorCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR TODOS LOS REGISTROS DE INDICADORES DE UNA ENTIDAD
export const getRegistroIndicadorCalidad=async(req,res)=>{
    try {
        const registroIndicador=await RegistroIndicadorCalidadModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador:req.params.Id_Indicador,
                Id_Periodo:req.params.Id_Periodo
            }
        })
        res.json(registroIndicador)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN REGISTRO
export const createRegistroIndicadorCalidad=async(req,res)=>{
    try {
        await RegistroIndicadorCalidadModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN REGISTRO DE UNA ENTIDAD EN UN PERIODO
export const updateRegistroIndicadorCalidad=async(req,res)=>{
    try {
        await RegistroIndicadorCalidadModel.update(req.body,{
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador:req.params.Id_Indicador,
                Id_Periodo:req.params.Id_Indicador
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN REGISTRO DE UNA ENTIDAD EN UN PERIODO
export const deleteRegistroIndicadorCalidad=async(req,res)=>{
    try {
        await RegistroIndicadorCalidadModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador:req.params.Id_Indicador,
                Id_Periodo:req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}