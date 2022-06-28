//IMPORTAR EL MODELO
import AreaHospitalModel from "../models/AreaHospitalModel.js"

//---------*METODOS CRUD*----------

//LISTAR TODAS LAS AREAS DEL HOSPITAL
export const getAreasHospital=async(req,res)=>{
    try {
        const areasHospital=await AreaHospitalModel.findAll()
        res.json(areasHospital)
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//BUSCAR UN AREA DEL HOSPITAL
export const getAreaHospital=async(req,res)=>{
    try {
        const areaHospital=await AreaHospitalModel.findAll({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area: req.params.Id_Area
            }
        })
        res.json(areaHospital[0])
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//CREAR UN AREA DEL HOSPITAL
export const createAreaHospital=async(req,res)=>{
    try {
        await AreaHospitalModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN AREA DEL HOSPITAL
export const updateAreaHospital=async(req,res)=>{
    try {
        await AreaHospitalModel.update(req.body,{
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area: req.params.Id_Area
            }
        })
        res.json({
            "message":"Registro actualizado con exito"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ELIMINAR UN AREA DEL HOSPITAL
export const deleteAreaHospital=async(req, res)=>{
    try {
        await AreaHospitalModel.destroy({
            where:{
                Codigo_Habilitacion:req.params.Codigo_Habilitacion,
                Id_Area:req.params.Id_Area
            }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}