//IMPORTAR CONEXION DE LA BASE DE DATOS
import db from "../database/db.js";
//IMPORTAR SEQUELIZE
import { DataTypes } from "sequelize";

//CONSTRUCCION DEL MODELO Y CONEXION A LA TABLA
const MunicipioModel=db.define('municipios',{
    Id_Municipio:{
        type: DataTypes.STRING,
        primaryKey: true
    }, Nombre_Municipio:{
        type: DataTypes.STRING
    }, Id_Departamento:{
        type: DataTypes.STRING
    }
});

export default MunicipioModel;