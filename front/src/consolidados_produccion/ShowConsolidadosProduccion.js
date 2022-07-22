import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Producc from '../resources/Produccion.png'
const URI='http://localhost:5500/Consolidados_Produccion/'

const CompShowConsolidadosProduccion=()=>{
    //Hooks
    const [Consolidados_Produccion, setConsolidados_Produccion]=useState([])
    useEffect(()=>{
        getConsolidadosProduccion()
    },[])

    //Mostrar consolidados produccion
    const getConsolidadosProduccion=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setConsolidados_Produccion(res.data)
    }

    //Eliminar un consolidado produccion
    const deleteConsolidadoProduccion=async(Codigo_Habilitacion, Id_Variable_Produccion, Id_Vigencia)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Id_Vigencia}`)
        getConsolidadosProduccion()
    }

    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="mb-4">
                    <img src={Producc} className="btn" alt="Hospital" width={290}/>
                </div>
                <div className="col-md-12">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Población Pobre</th>
                                            <th>No Poss</th>
                                            <th>Subsidiado</th>
                                            <th>Contributivo</th>
                                            <th>Otros</th>
                                            <th>Total</th>
                                            <th>Total UVR</th>
                                            <th>Id Vigencia</th>
                                            <th>Hospital</th>
                                            <th>Área</th>
                                            <th>Variable</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Consolidados_Produccion.map((consolidado)=>(
                                        <tr key={consolidado.Codigo_Habilitacion + consolidado.Id_Variable_Produccion + consolidado.Id_Vigencia}>
                                            <td>{consolidado.Id_Consolidado}</td>
                                            <td>{consolidado.Poblacion_Pobre}</td>
                                            <td>{consolidado.No_Poss}</td>
                                            <td>{consolidado.Subsidiado}</td>
                                            <td>{consolidado.Contributivo}</td>
                                            <td>{consolidado.Otros}</td>
                                            <td>{consolidado.Total}</td>
                                            <td>{consolidado.Total_UVR}</td>
                                            <td>{consolidado.Id_Vigencia}</td>
                                            <td>{consolidado.Codigo_Habilitacion}</td>
                                            <td>{consolidado.Id_Variable_Produccion}</td>
                                            <td>{consolidado.Id_UVR}</td>
                                            <td>
                                                <Link to={`/Consolidados_Produccion/edit/${consolidado.Codigo_Habilitacion}/${consolidado.Id_Variable_Produccion}/${consolidado.Id_Vigencia}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                <button onClick={()=>deleteConsolidadoProduccion(consolidado.Codigo_Habilitacion, consolidado.Id_Variable_Produccion, consolidado.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Consolidados_Produccion/create" className='btn mb-5' id="Crear">Crear Consolidado</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowConsolidadosProduccion