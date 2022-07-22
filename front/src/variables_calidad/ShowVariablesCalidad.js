import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Varia from '../resources/Variables.png'

const URI='http://localhost:5500/Variables_Calidad/'

const CompShowVariablesCalidad=()=>{
    //Hooks
    const [Variables_Calidad, setVariables_Calidad]=useState([])
    useEffect(()=>{
        getVariablesCalidad()
    },[])

    //Obtener todas las variables
    const getVariablesCalidad=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setVariables_Calidad(res.data)
    }

    //Eliminar una variables
    const deleteVariableCalidad=async(Id_Variable_Calidad)=>{
        //Peticion axios
        await axios.delete(`${URI}${Id_Variable_Calidad}`)
        getVariablesCalidad()
    }

    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-3 abs-center">
                    <img src={Varia} className="btn" alt="Hospital" width={320}/>
                </div>
                <div className="col-md-9">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Id Variable Calidad</th>
                                            <th>Nombre Variable</th>
                                            <th>Tipo Valor</th>
                                            <th>Indicador</th>
                                            <th>Activa</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Variables_Calidad.map((variable_calidad)=>(
                                            <tr key={variable_calidad.Id_Variable_Calidad}>
                                                <td>{variable_calidad.Id_Variable_Calidad}</td>
                                                <td>{variable_calidad.Nombre_Variable}</td>
                                                <td>{variable_calidad.Tipo_Valor}</td>
                                                <td>{variable_calidad.Id_Indicador}</td>
                                                <td>{variable_calidad.Activa}</td>
                                                <td>
                                                    <Link to={`/Variables_Calidad/edit/${variable_calidad.Id_Variable_Calidad}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteVariableCalidad(variable_calidad.Id_Variable_Calidad)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Variables_Calidad/create" className='btn' id="Crear">Crear Variable</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowVariablesCalidad