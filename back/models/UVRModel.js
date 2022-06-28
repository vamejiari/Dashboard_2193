//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js"
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize"

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const UVRModel=db.define('uvrs',{
    Id_UVR:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Ponderado:{
        type:DataTypes.FLOAT
    }, Id_Variable_Produccion:{
        type: DataTypes.STRING
    }, Id_Nivel:{
        type:DataTypes.STRING
    }
})

export default UVRModel