import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Check from '../resources/CheckList.png'

const URI='http://localhost:5500/Registros_Indicadores_Calidad/'

const CompShowRegistrosIndicadorCalidad=()=>{
    //Hooks
    const [Registros_Indicador, setRegistros_Indicador]=useState([])

    useEffect(()=>{
        getRegistrosIndicador()
    },[])

    //Mostrar registros indicador
    const getRegistrosIndicador=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setRegistros_Indicador(res.data)
    }

    //Eliminar un registro indicador
    const deleteRegistroIndicador=async(Codigo_Habilitacion, Id_Indicador, Id_Periodo)=>{
        //Peticion axios
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Periodo}`)
        getRegistrosIndicador()
    }

    return (
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-12 abs-center">
                    <img src={Check} className="btn" alt="Hospital" width={350}/>
                </div>
                <div className="col-md-12">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Id Registro</th>
                                            <th>Total</th>
                                            <th>Id Periodo</th>
                                            <th>Id Consolidado Indicador</th>
                                            <th>Codigo Habilitacion</th>
                                            <th>Id Indicador</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registros_Indicador.map ((registro)=>(
                                            <tr key={registro.Codigo_Habilitacion + registro.Id_Indicador + registro.Id_Periodo}>
                                                <td>{registro.Id_Registro_Indicador}</td>
                                                <td>{registro.Total}</td>
                                                <td>{registro.Id_Periodo}</td>
                                                <td>{registro.Id_Consolidado_Indicador}</td>
                                                <td>{registro.Codigo_Habilitacion}</td>
                                                <td>{registro.Id_Indicador}</td>
                                                <td>
                                                    <Link to={`/Registros_Indicadores_Calidad/edit/${registro.Codigo_Habilitacion}/${registro.Id_Indicador}/${registro.Id_Periodo}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteRegistroIndicador(registro.Codigo_Habilitacion, registro.Id_Indicador, registro.Id_Periodo)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Registros_Indicadores_Calidad/create" className='btn m-1' id="Crear">Crear Indicador Calidad</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowRegistrosIndicadorCalidad