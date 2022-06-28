//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const AreaHospitalModel=db.define('area_hospitales',{
    Codigo_Habilitacion:{
        type: DataTypes.STRING,
        primaryKey:true
    },Id_Area:{
        type:DataTypes.STRING,
        primaryKey:true
    }
})

export default AreaHospitalModel;