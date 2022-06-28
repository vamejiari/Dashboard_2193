//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CREACION DEL MODELO Y CONEXION A LA TABLA
export const ConsolidadoIndicadorCalidadModel=db.define('indicador_calidad_consolidados',{
    Id_Consolidado_Indicador:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Total:{
        type:DataTypes.FLOAT
    }, Id_Indicador:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Vigencia:{
        type:DataTypes.STRING
    }
})

export default ConsolidadoIndicadorCalidadModel