//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR LA CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CREACION DEL MODELO Y CONEXION A LA TABLA
export const ConsolidadoCalidadModel=db.define('calidad_consolidados',{
    Id_Consolidado_Calidad:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Cantidad:{
        type:DataTypes.INTEGER
    }, Id_Vigencia:{
        type:DataTypes.STRING
    }, Id_Variable_Calidad:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Area:{
        type:DataTypes.STRING
    }, Id_Consolidado_Indicador:{
        type:DataTypes.STRING
    }
})

export default ConsolidadoCalidadModel