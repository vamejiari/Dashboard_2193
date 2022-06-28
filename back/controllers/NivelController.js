//IMPORTAR EL MODELO
import NivelModel from "../models/NivelModel.js"

//---------*METODOS CRUD*---------

//LISTAR TODOS LOS NIVELES
export const getNiveles=async(req,res)=>{
    try {
        const niveles=await NivelModel.findAll()
        res.json(niveles)
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//BUSCAR UN NIVEL
export const getNivel=async (req,res)=>{
    try {
        const nivel=await NivelModel.findAll({
            where:{
                Id_Nivel:req.params.Id_Nivel
            }
        })
        res.json(nivel[0])
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//CREAR UN NIVEL
export const createNivel=async (req,res)=>{
    try{
        await NivelModel.create(req.body)
        res.json({
            "message":"registro creado correctamente"
        })
    }catch(error){
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ACTULIZAR UN NIVEL
export const updateNivel=async(req,res)=>{
    try {
        await NivelModel.update(req.body,{
            where:{Id_Nivel: req.params.Id_Nivel}
        })
        res.json({
            "message": "registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}

//ELIMINAR UN NIVEL
export const deleteNivel=async(req,res)=>{
    try {
        await NivelModel.destroy({
            where:{Id_Nivel:req.params.Id_Nivel}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: `Existe un error ${error.message}`})
    }
}