import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Indica from '../resources/KPI.png'

const URI='http://localhost:5500/Consolidados_Indicadores_Calidad/'

const CompShowConsolidadoIndicadorCalidad=()=>{
    //Hooks
    const [Consolidados_Indicador, setConsolidados_Indicador]=useState([])
    
    useEffect(()=>{
        getConsolidadosIndicador()
    },[])

    //Mostrar consolidados indicador
    const getConsolidadosIndicador=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setConsolidados_Indicador(res.data)
    }

    //Eliminar un consolidado Indicador
    const deleteConsolidadoIndicador=async(Codigo_Habilitacion, Id_Indicador, Id_Vigencia)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Vigencia}`)
        getConsolidadosIndicador()
    }

    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-4 abs-center">
                    <img src={Indica} className="btn" alt="Hospital" width={320}/>
                </div>
                <div className="col-md-8">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Total</th>
                                            <th>Id Indicador</th>
                                            <th>Codigo Habilitacion</th>
                                            <th>Vigencia</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Consolidados_Indicador.map ((consolidado)=>(
                                            <tr key={consolidado.Codigo_Habilitacion + consolidado.Id_Indicador + consolidado.Id_Vigencia}>
                                                <td>{consolidado.Total}</td>
                                                <td>{consolidado.Id_Indicador}</td>
                                                <td>{consolidado.Codigo_Habilitacion}</td>
                                                <td>{consolidado.Id_Vigencia}</td>
                                                <td>
                                                    <Link to={`/Consolidados_Indicadores_Calidad/edit/${consolidado.Codigo_Habilitacion}/${consolidado.Id_Indicador}/${consolidado.Id_Vigencia}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteConsolidadoIndicador(consolidado.Codigo_Habilitacion, consolidado.Id_Indicador, consolidado.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Consolidados_Indicadores_Calidad/create" className='btn' id="Crear">Crear Consolidado Indicador Calidad</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowConsolidadoIndicadorCalidad