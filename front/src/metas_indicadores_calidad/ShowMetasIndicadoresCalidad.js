import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Metas_Indicadores_Calidad/'

const CompShowMetasIndicadoresCalidad=()=>{
    //CONFIGURAR HOOKS
    const [Metas, setMetas]=useState([])
    useEffect(()=>{
        getMetas()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS METAS
    const getMetas=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setMetas(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UNA META
    const deleteMeta=async(Id_Meta_Indicador)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Meta_Indicador}`)
        getMetas()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Metas_Indicadores_Calidad/create" className="btn btn-primary mt-2 mb-2">Crear Meta Indicador</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Meta Indicador</th>
                                <th>Tipo Meta</th>
                                <th>Valor</th>
                                <th>Id Indicador</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Metas.map ((meta)=>(
                                <tr key={meta.Id_Meta_Indicador}>
                                    <td>{meta.Id_Meta_Indicador}</td>
                                    <td>{meta.Tipo_Meta}</td>
                                    <td>{meta.Valor}</td>
                                    <td>{meta.Id_Indicador}</td>
                                    <td>
                                        <Link to={`/Metas_Indicadores_Calidad/edit/${meta.Id_Meta_Indicador}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteMeta(meta.Id_Meta_Indicador)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowMetasIndicadoresCalidad