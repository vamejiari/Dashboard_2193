//IMPORTAR CONEXION A LA BASE DE DATOS
import { DataTypes } from "sequelize";
import db from "../database/db.js";

//CREACION DEL MODELO Y CONEXION A LA TABLA
export const MetaIndicadorCalidadModel=db.define('meta_calidad_indicadores',{
    Id_Meta_Indicador:{
        type:DataTypes.STRING,
        primaryKey: true
    }, Tipo_Meta:{
        type:DataTypes.ENUM('Tasa','Porcentaje')
    }, Valor:{
        type:DataTypes.FLOAT
    }, Id_Indicador:{
        type:DataTypes.STRING
    }
})

export default MetaIndicadorCalidadModel