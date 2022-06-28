//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y A LA TABLE
const IndicadorCalidadModel=db.define('calidad_indicadores',{
    Id_Indicador:{
        type:DataTypes.STRING,
        primaryKey: true
    }, Nombre_Indicador:{
        type:DataTypes.STRING
    }, Activa:{
        type: DataTypes.BOOLEAN
    }
})

export default IndicadorCalidadModel