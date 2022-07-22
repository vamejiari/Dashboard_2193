import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Indica from '../resources/Indicador.png'

const URI='http://localhost:5500/Consolidados_Calidad/'

const CompShowConsolidadosCalidad=()=>{
    //Hooks
    const [Consolidados_Calidad, setConsolidados_Calidad]=useState([])
    useEffect(()=>{
        getConsolidadosCalidad()
    },[])

    //Mostrar consolidados calidad
    const getConsolidadosCalidad=async()=>{
        //Peticios axios
        const res=await axios.get(URI)
        setConsolidados_Calidad(res.data)
    }

    //Eliminar un consolidado calidad
    const deleteConsolidadoCalidad=async(Codigo_Habilitacion, Id_Variable_Calidad, Id_Vigencia)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`)
        getConsolidadosCalidad()
    }

    return (
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-4 abs-center">
                    <img src={Indica} className="btn" alt="Hospital" width={300}/>
                </div>
                <div className="col-md-12">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Id Consolidado Calidad</th>
                                            <th>Cantidad</th>
                                            <th>Vigencia</th>
                                            <th>Variable Calidad</th>
                                            <th>Codigo Habilitacion</th>
                                            <th>Area</th>
                                            <th>Consolidado Indicador</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Consolidados_Calidad.map((consolidado)=>(
                                            <tr key={consolidado.Codigo_Habilitacion + consolidado.Id_Variable_Calidad + consolidado.Id_Vigencia}>
                                                <td>{consolidado.Id_Consolidado_Calidad}</td>
                                                <td>{consolidado.Cantidad}</td> 
                                                <td>{consolidado.Id_Vigencia}</td>
                                                <td>{consolidado.Id_Variable_Calidad}</td>
                                                <td>{consolidado.Codigo_Habilitacion}</td>
                                                <td>{consolidado.Id_Area}</td>
                                                <td>{consolidado.Id_Consolidado_Indicador}</td>
                                                <td>
                                                    <Link to={`/Consolidados_Calidad/edit/${consolidado.Codigo_Habilitacion}/${consolidado.Id_Variable_Calidad}/${consolidado.Id_Vigencia}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteConsolidadoCalidad(consolidado.Codigo_Habilitacion, consolidado.Id_Variable_Calidad, consolidado.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Consolidados_Calidad/create" className='btn' id="Crear">Crear Area</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowConsolidadosCalidad