//IMPORTAR EL MODELO
import AreaModel from "../models/AreaModel.js"

//---------*METODOS CRUD*----------

 //LISTAR TODAS LAS AREAS
export const getAreas=async(req,res)=>{
    try {
        const areas=await AreaModel.findAll()
        res.json(areas)
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR UN AREA
export const getArea=async(req,res)=>{
    try {
        const area=await AreaModel.findAll({
            where:{
                Id_Area: req.params.Id_Area
            }
        })
        res.json(area[0])
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//CREAR UN AREA
export const createArea=async(req,res)=>{
    try{
        await AreaModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch(error){
        res.json({message:`Existe un error ${error.message}`})
    }
}

//ACTUALIZAR UN AREA
export const updateArea=async(req,res)=>{
    try{
        await AreaModel.update(req.body,{
            where:{Id_Area:req.params.Id_Area}
        })
        res.json({
            "message":"Registro actualizado con exito"
        })
    }catch(error){
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN AREA
export const deleteArea=async(req,res)=>{
    try {
        await AreaModel.destroy({
            where:{Id_Area:req.params.Id_Area}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:`Existe un error ${error.message}`})
    }
}