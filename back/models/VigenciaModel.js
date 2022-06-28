//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABAL
const VigenciaModel=db.define('vigencias',{
    Id_Vigencia:{
        type: DataTypes.STRING,
        primaryKey:true
    }, Trimestre:{
        type:DataTypes.INTEGER
    }, Anio:{
        type: DataTypes.STRING
    }
})

export default VigenciaModel