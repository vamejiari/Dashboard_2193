import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Metas_Produccion/'

const CompShowMetasProduccion=()=>{
    //Configurar hooks
    const [Metas_Produccion,setMetas_Produccion]=useState([])
    useEffect(()=>{
        getMetasProduccion()
    },[])

    const getMetasProduccion=async()=>{
        //Crear petición con axios
        const res=await axios.get(URI)
        setMetas_Produccion(res.data)
    }

    const deleteMetaProduccion=async(Codigo_Habilitacion, Id_Variable_Produccion, Anio)=>{
        await axios.delete(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Anio}`)
        getMetasProduccion()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Metas_Produccion/create" className="btn btn-primary mt-2 mb-2">Crear Meta Produccion</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Meta</th>
                                <th>Año</th>
                                <th>Valor Meta</th>
                                <th>Variable Produccion</th>
                                <th>Código Habilitación</th>
                                <th>Área</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Metas_Produccion.map((meta)=>(
                                <tr key={meta.Codigo_Habilitacion + meta.Id_Variable_Produccion + meta.Anio}>
                                    <td>{meta.Id_Meta}</td>
                                    <td>{meta.Anio}</td>
                                    <td>{meta.Valor_Meta}</td>
                                    <td>{meta.Id_Variable_Produccion}</td>
                                    <td>{meta.Codigo_Habilitacion}</td>
                                    <td>{meta.Id_Area}</td>
                                    <td>
                                        <Link to={`/Metas_Produccion/edit/${meta.Codigo_Habilitacion}/${meta.Id_Variable_Produccion}/${meta.Anio}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteMetaProduccion(meta.Codigo_Habilitacion, meta.Id_Variable_Produccion, meta.Anio)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowMetasProduccion