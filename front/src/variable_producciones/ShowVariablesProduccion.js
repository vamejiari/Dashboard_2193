import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Varia from '../resources/Variables.png'
const URI='http://localhost:5500/Variables_Produccion/'

const CompShowVariablesProduccion=()=>{
    //CONFIGURAR HOOKS
    const [Variables_Produccion, setVariables_Hospital]=useState([])
    useEffect(()=>{
        getVariablesProduccion()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS VARIABLES DE PRODUCCION
    const getVariablesProduccion=async()=>{
        //CREAR PETICIÓN CON AXIOS
        const res=await axios.get(URI)
        setVariables_Hospital(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UNA VARIABLE PRODUCCION
    const deleteVariableProduccion=async(Id_Variable_Produccion)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Variable_Produccion}`)
        getVariablesProduccion()
    }

    //DEVOLVER VISTA
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
                                            <th>Id Variable Producción</th>
                                            <th>Nombre Variable</th>
                                            <th>Tipo Variable</th>
                                            <th>Activa</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Variables_Produccion.map((variableProduccion)=>(
                                            <tr key={variableProduccion.Id_Variable_Produccion}>
                                                <td>{variableProduccion.Id_Variable_Produccion}</td>
                                                <td>{variableProduccion.Nombre_Variable}</td>
                                                <td>{variableProduccion.Tipo_Variable}</td>
                                                <td>{variableProduccion.Activa}</td>
                                                <td>
                                                    <Link to={`/Variables_Produccion/edit/${variableProduccion.Id_Variable_Produccion}`} className='btn btn-primary m-1'><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteVariableProduccion(variableProduccion.Id_Variable_Produccion)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Variables_Produccion/create" className='btn' id="Crear">Crear Variable</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowVariablesProduccion