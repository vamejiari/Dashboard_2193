import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Variables_Calidad_Hospitales/'

const CompShowVariablesCalidadHospitales=()=>{
    //Hooks
    const [Variables_Calidad_Hospitales, setVariables_Calidad_Hospitales]=useState([])
    useEffect(()=>{
        getVariablesCalidadHospitales()
    },[])

    //Mostrar todas las variables de calidad de hospitales
    const getVariablesCalidadHospitales=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setVariables_Calidad_Hospitales(res.data)
    }

    const deleteVariableCalidadHospital=async(Id_Variable_Calidad, Codigo_Habilitacion, Id_Area)=>{
        await axios.delete(`${URI}${Id_Variable_Calidad}/${Codigo_Habilitacion}/${Id_Area}`)
        getVariablesCalidadHospitales()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Variables_Calidad_Hospitales/create" className="btn btn-primary mt-2 mb-2">Crear Variable Calidad Hospital</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Variable Calidad Hospital</th>
                                <th>Código Habilitación</th>
                                <th>Área</th>
                                <th>Activa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Variables_Calidad_Hospitales.map((variableCalidad)=>(
                                <tr key={variableCalidad.Id_Variable_Calidad + variableCalidad.Codigo_Habilitacion + variableCalidad.Id_Area}>
                                    <td>{variableCalidad.Id_Variable_Calidad}</td>
                                    <td>{variableCalidad.Codigo_Habilitacion}</td>
                                    <td>{variableCalidad.Id_Area}</td>
                                    <td>{variableCalidad.Activa}</td>
                                    <td>
                                        <Link to={`/Variables_Calidad_Hospitales/${variableCalidad.Id_Variable_Calidad}/${variableCalidad.Codigo_Habilitacion}/${variableCalidad.Id_Area}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVariableCalidadHospital(variableCalidad.Id_Variable_Calidad, variableCalidad.Codigo_Habilitacion, variableCalidad.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowVariablesCalidadHospitales