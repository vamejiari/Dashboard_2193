//IMPORTAR CONEXION DE LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const NivelModel=db.define('niveles',{
    Id_Nivel:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Nombre_Nivel:{
        type:DataTypes.STRING
    }
})

export default NivelModel