//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";
//IMPORTAR CONEXION A LA BASE DE DATOS
import db from "../database/db.js";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const MetaProduccionModel=db.define('meta_producciones',{
    Id_Meta:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Anio:{
        type: DataTypes.INTEGER
    }, Valor_Meta:{
        type:DataTypes.INTEGER
    }, Id_Variable_Produccion:{
        type: DataTypes.STRING
    }, Codigo_Habilitacion:{
        type: DataTypes.STRING
    }, Id_Area:{
        type: DataTypes.STRING
    }
})

export default MetaProduccionModel