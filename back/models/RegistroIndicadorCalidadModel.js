//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CREACION DEL MODELO Y CONEXION A LA BASE DE DATOS
export const RegistroIndicadorCalidadModel=db.define('indicador_calidad_registros',{
    Id_Registro_Indicador:{
        type:DataTypes.STRING,
        primaryKey:true
    }, Total:{
        type:DataTypes.FLOAT
    }, Id_Periodo:{
        type:DataTypes.STRING
    }, Id_Consolidado_Indicador:{
        type:DataTypes.STRING
    }, Codigo_Habilitacion:{
        type:DataTypes.STRING
    }, Id_Indicador:{
        type:DataTypes.STRING
    }
})

export default RegistroIndicadorCalidadModel