import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Novedades/'

const CompShowNovedades=()=>{
    //Hooks
    const [Novedades, setNovedades]=useState([])
    useEffect(()=>{
        getNovedades()
    },[])

    //Almacenar información
    const getNovedades=async()=>{
        //Peticion axios
        const res=await axios.get(URI)
        setNovedades(res.data)
    }

    //Eliminar una novedad
    const deleteNovedad=async(Id_Novedad)=>{
        //Peticion axios
        await axios.delete(`${URI}${Id_Novedad}`)
        getNovedades()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Novedades/create' className="btn btn-primary mt-2 mb-2">Crear Novedad</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Novedad</th>
                                <th>Novedad</th>
                                <th>Periodo</th>
                                <th>Código Habilitacion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Novedades.map((novedad)=>(
                                <tr key={novedad.Codigo_Habilitacion+novedad.Id_Periodo}>
                                    <td>{novedad.Id_Novedad}</td>
                                    <td>{novedad.Novedad}</td>
                                    <td>{novedad.Id_Periodo}</td>
                                    <td>{novedad.Codigo_Habilitacion}</td>
                                    <td>
                                        <Link to={`/Novedades/edit/${novedad.Id_Novedad}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteNovedad(novedad.Id_Novedad)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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
export default CompShowNovedades