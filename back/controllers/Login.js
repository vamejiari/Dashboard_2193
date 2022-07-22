import UsuarioModel from "../models/UsuarioModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Acceder a Sistema
export const credenciales=async(req, res)=>{
    try {
        const {Usuario, Contrasena}=req.body
        await UsuarioModel.findOne({
            where:{
                Usuario:Usuario
            }
        }).then(usuario=>{
            if(!usuario){
                res.status(404).json({message:'Usuario No Encontrado'})
            }else{
                if(bcrypt.compareSync(Contrasena, usuario.Contrasena)){
                    const token=jwt.sign({usuario:usuario},'secret',{
                        expiresIn:"10h"
                    })
                    res.json({
                        usuario:usuario,
                        token:token
                    })
                }else{
                    console.log(bcrypt.compareSync(Contrasena, usuario.Contrasena))
                    res.status(401).json({message: 'Contraseña Incorrecta'})
                } 
            }
        })
    } catch (error) {
        res.status(500).json({message:`Existe un error ${error.message}`})
    }
}