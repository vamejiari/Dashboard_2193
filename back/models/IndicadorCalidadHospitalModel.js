//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CREACION DEL MODELO Y CONEXION A LA TABLA
export const IndicadorCalidadHospitalModel=db.define('indicador_calidad_hospitales',{
    Codigo_Habilitacion:{
        type:DataTypes.STRING,
        primaryKey: true
    }, Id_Indicador:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Activa:{
        type:DataTypes.BOOLEAN
    }
})

export default IndicadorCalidadHospitalModel