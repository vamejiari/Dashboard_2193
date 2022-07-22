import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Check from '../resources/CheckList.png'

const URI='http://localhost:5500/Registros_Calidad/'

const CompShowRegistrosCalidad=()=>{
    //CONFIGURAR HOOKS
    const [Registros, setRegistros]=useState([])
    useEffect(()=>{
        getRegistros()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS Registros
    const getRegistros=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setRegistros(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UNA REGISTRO
    const deleteRegistro=async(Codigo_Habilitacion, Id_Variable_Calidad, Id_Periodo)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Periodo}`)
        getRegistros()
    }

    return(
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
                                            <th>Cantidad</th>
                                            <th>Id Variable Calidad</th>
                                            <th>Codigo Habilitacion</th>
                                            <th>Área</th>
                                            <th>Periodo</th>
                                            <th>Registro Indicador</th>
                                            <th>Consolidado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registros.map ((registro)=>(
                                            <tr key={registro.Codigo_Habilitacion + registro.Id_Variable_Calidad + registro.Id_Periodo}>
                                                <td>{registro.Id_Registro_Calidad}</td>
                                                <td>{registro.Cantidad}</td>
                                                <td>{registro.Id_Variable_Calidad}</td>
                                                <td>{registro.Codigo_Habilitacion}</td>
                                                <td>{registro.Id_Area}</td>
                                                <td>{registro.Id_Periodo}</td>
                                                <td>{registro.Id_Registro_Indicador}</td>
                                                <td>{registro.Id_Consolidado_Calidad}</td>
                                                <td>
                                                    <Link to={`/Registros_Calidad/edit/${registro.Codigo_Habilitacion}/${registro.Id_Variable_Calidad}/${registro.Id_Periodo}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteRegistro(registro.Codigo_Habilitacion, registro.Id_Variable_Calidad, registro.Id_Periodo)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Registros_Calidad/create" className='btn m-1' id="Crear">Crear Indicador Calidad</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowRegistrosCalidad