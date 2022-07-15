import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Periodos/'

const CompShowPeriodos=()=>{
    //Hooks
    const [Periodos, setPeriodos]=useState([])
    useEffect(()=>{
        getPeriodos()
    },[])

    //Almacenar informacion
    const getPeriodos=async()=>{
        //Peticios axios
        const res=await axios.get(URI)
        setPeriodos(res.data)
    }

    //Eliminar un periodo
    const deletePeriodo=async(Id_Periodo)=>{
        //Peticion axios
        await axios.delete(`${URI}${Id_Periodo}`)
        getPeriodos()
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/Periodos/create" className="btn btn-primary mt-2 mb-2">Crear Periodo</Link>
                <table className="table table-striped">
                    <thead className="table-primary">
                        <tr>
                            <th>Id Periodo</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Vigencia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Periodos.map((periodo)=>(
                            <tr key={periodo.Id_Periodo}>
                                <td>{periodo.Id_Periodo}</td>
                                <td>{periodo.Mes}</td>
                                <td>{periodo.Anio}</td>
                                <td>{periodo.Id_Vigencia}</td>
                                <td>
                                    <Link to={`/Periodos/edit/${periodo.Id_Periodo}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=>deletePeriodo(periodo.Id_Periodo)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowPeriodos