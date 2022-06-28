//IMPORTAR EL MODELO
import IndicadorCalidadHospitalModel from "../models/IndicadorCalidadHospitalModel.js";

//----------*METODOS CRUD*----------

//LISTAR TODOS LOS INDICADORES Y ENTIDADES
export const getIndicadoresCalidadHospitales=async(req,res)=>{
    try {
        const indicadoresCalidad=await IndicadorCalidadHospitalModel.findAll()
        res.json(indicadoresCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR LOS INDICADORES DE UNA ENTIDAD
export const getIndicadoresCalidadHospital=async(req,res)=>{
    try {
        const indicadorCalidad=await IndicadorCalidadHospitalModel.findAll({
            where:{
                Codigo_Habilitacion: req.params.Codigo_Habilitacion
            }
        })
        res.json(indicadorCalidad)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN INDICADOR EN UNA ENTIDAD
export const createIndicadorCalidadHospital=async(req,res)=>{
    try {
        await IndicadorCalidadHospitalModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN INDICADOR DE UNA ENTIDAD
export const updateIndicadorCalidadHospital=async(req,res)=>{
    try {
        await IndicadorCalidadHospitalModel.update(req.body,{
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador:req.params.Id_Indicador
            }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN INDICADOR DE UNA ENTIDAD
export const deleteIndicadorCalidadHospital=async(req,res)=>{
    try {
        await IndicadorCalidadHospitalModel.destroy({
            where: {
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Indicador: req.params.Id_Indicador
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}