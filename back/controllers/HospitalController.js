//IMPORTAR EL MODELO
import HospitalModel from '../models/HospitalModel.js'

//---------*METODOS CRUD*----------

//LISTAR TODOS LOS HOSPITALES
export const getHospitales=async(req,res)=>{
    try {
        const hospitales=await HospitalModel.findAll()
        res.json(hospitales)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UN HOSPITAL
export const getHospital=async(req,res)=>{
    try {
        const hospital=await HospitalModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion
            }
        })
        res.json(hospital[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN HOSPITAL
export const createHospital=async(req,res)=>{
    try {
        await HospitalModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN HOSPITAL
export const updateHospital=async(req,res)=>{
    try {
        await HospitalModel.update(req.body,{
            where:{Codigo_Habilitacion:req.params.Codigo_Habilitacion}
        })
        res.json({
            "message":"Registro actualizado con exito"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN HOSPITAL
export const deleteHospital=async(req,res)=>{
    try {
        await HospitalModel.destroy({
            where:{Codigo_Habilitacion:req.params.Codigo_Habilitacion}
        })
        res.json({
            "message":"Registro eliminado con exito"
        })
    } catch (error) {
        res.json({message:"Registro eliminado correctamente"})
    }
}

