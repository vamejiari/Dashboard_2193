import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Variables_Produccion_Hospitales/'

const CompShowVariablesProduccionHospitales=()=>{
    //CONFIGURAR HOOKS
    const [Variables_Produccion_Hospitales, setVariables_Produccion_Hospitales]=useState([])
    useEffect(()=>{
        getVariablesProduccionHospitales()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS VARIABLES DE HOSPITALES
    const getVariablesProduccionHospitales=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setVariables_Produccion_Hospitales(res.data)
    }

    const deleteVariableProduccionHospital=async(Id_Variable_Produccion, Codigo_Habilitacion, Id_Area)=>{
        await axios.delete(`${URI}${Id_Variable_Produccion}/${Codigo_Habilitacion}/${Id_Area}`)
        getVariablesProduccionHospitales()
    }

    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-4 abs-center">
                    <img src={Hospital} className="btn" alt="Hospital" width={350}/>
                </div>
                <div className="col-md-8">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Variable Produccion Hospital</th>
                                            <th>Código Habilitación</th>
                                            <th>Área</th>
                                            <th>Activa</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Variables_Produccion_Hospitales.map((variableProduccion)=>(
                                            <tr key={variableProduccion.Id_Variable_Produccion + variableProduccion.Codigo_Habilitacion + variableProduccion.Id_Area}>
                                                <td>{variableProduccion.Id_Variable_Produccion}</td>
                                                <td>{variableProduccion.Codigo_Habilitacion}</td>
                                                <td>{variableProduccion.Id_Area}</td>
                                                <td>{variableProduccion.Activa}</td>
                                                <td>
                                                    <button onClick={()=>deleteVariableProduccionHospital(variableProduccion.Id_Variable_Produccion, variableProduccion.Codigo_Habilitacion, variableProduccion.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Variables_Produccion_Hospitales/create" className='btn' id="Crear">Asignar Variable Produccion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    )
}

export default CompShowVariablesProduccionHospitales