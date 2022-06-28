//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CREACION DEL MODELO Y CONEXION A LA TABLA
export const VariableCalidadHospitalModel=db.define('variable_calidad_hospitales',{
    Id_Variable_Calidad:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING,
        primaryKey: true
    }, Id_Area:{
        type: DataTypes.STRING,
        primaryKey:true
    }, Activa:{
        type:DataTypes.BOOLEAN
    }
})

export default VariableCalidadHospitalModel