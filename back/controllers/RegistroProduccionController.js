//IMPORTAR EL MODELO
import RegistroProduccionModel from "../models/RegistroProduccionModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS REGISTROS
export const getRegistros=async(req,res)=>{
    try {
        const registros=await RegistroProduccionModel.findAll()
        res.json(registros)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UN REGISTRO DE UNA ENTIDAD EN UN PERIODO DE UNA VARIABLE
export const getRegistro=async(req,res)=>{
    try {
        const registro=await RegistroProduccionModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json(registro)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN NUEVO REGISTRO
export const createRegistro=async(req,res)=>{
    try {
        await RegistroProduccionModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN REGISTRO
export const updateRegistro=async(req,res)=>{
    try {
        await RegistroProduccionModel.update(req.body,{
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN REGISTRO
export const deleteRegistro=async(req,res)=>{
    try {
        await RegistroProduccionModel.destroy({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Produccion: req.params.Id_Variable_Produccion,
                Id_Periodo: req.params.Id_Periodo
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}
