
//IMPORTAR EL MODELO
import VariableCalidadHospitalModel from "../models/VariableCalidadHospitalModel.js";

//----------*METODOS CRUD*----------
//LISTAR TODAS LAS VARIABLES REGISTRADAS A ENTIDADES
export const getVariablesCalidadHospital=async(req,res)=>{
    try {
        const variablesCalidad=await VariableCalidadHospitalModel.findAll()
        res.json(variablesCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LAS VARIABLES REGISTRADAS A UNA ENTIDAD
export const getVariableCalidadHospital=async(req,res)=>{
    try {
        const variableCalidad=await VariableCalidadHospitalModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion
            }
        })
        res.json(variableCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UNA VARIABLE EN UNA ENTIDAD
export const createVariableCalidadHospital=async(req,res)=>{
    try {
        await VariableCalidadHospitalModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UNA VARIABLE REGISTRADA A UNA ENTIDAD
export const updateVariableCalidadHospital=async(req,res)=>{
    try {
        await VariableCalidadHospitalModel.update(req.body,{
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion,
                Id_Variable_Calidad: req.params.Id_Variable_Calidad
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UNA VARIABLE REGISTRADA A UNA ENTIDAD 
export const deleteVariableCalidadHospital=async(req,res)=>{
    try {
        await VariableCalidadHospitalModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Variable_Calidad: req.params.Id_Variable_Calidad
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}