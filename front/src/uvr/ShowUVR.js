import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/UVRS/create" className="btn btn-primary mt-2 mb-2">Crear UVR</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
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
                                        <Link to={`/UVRS/edit/${uvr.Id_UVR}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteUVR(uvr.Id_UVR)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowUVR