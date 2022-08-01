import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen from '../resources/UVR.png'

const URI='http://localhost:5500/UVRS/'

const CompShowUVR=()=>{
    //CONFIGURAR HOOKS
    const [UVRS, setUVRS]=useState([])
    useEffect(()=>{
        getUVRS()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS UVR
    const getUVRS=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setUVRS(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UNA UVR
    const deleteUVR=async(Id_UVR)=>{
        //Crear peticion con axios
        await axios.delete(`${URI}${Id_UVR}`)
        getUVRS()
    }

    //Retornar vistas
    return(
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-3 abs-center">
                    <img src={imagen} className="btn" alt="Mapa" width={250}/>
                </div>
                <div className="col-md-9">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Id UVR</th>
                                            <th>Ponderado</th>
                                            <th>Id Variable</th>
                                            <th>Id Nivel</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {UVRS.map((uvr)=>(
                                                <tr key={uvr.Id_UVR}>
                                                    <td>{uvr.Id_UVR}</td>
                                                    <td>{uvr.Ponderado}</td>
                                                    <td>{uvr.Id_Variable_Produccion}</td>
                                                    <td>{uvr.Id_Nivel}</td>
                                                    <td>
                                                        <Link to={`/UVRS/edit/${uvr.Id_UVR}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                        <button onClick={()=>deleteUVR(uvr.Id_UVR)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/UVRS/create" className='btn' id="Crear">Crear UVR</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowUVR