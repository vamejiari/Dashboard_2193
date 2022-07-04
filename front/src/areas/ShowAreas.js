import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Areas/'

const CompShowAreas=()=>{
    //CONFIGURAR HOOKS
    const [Areas, setAreas]=useState([])
    useEffect(()=>{
        getAreas()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODAS LAS AREAS
    const getAreas=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setAreas(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN AREA
    const deleteArea=async(Id_Area)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Area}`)
        getAreas()
    }

    //DEVOLVER VISTAS
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Areas/create" className="btn btn-primary mt-2 mb-2">Crear Area</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Área</th>
                                <th>Nombre Área</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Areas.map ((area)=>(
                                <tr key={area.Id_Area }>
                                    <td>{area.Id_Area}</td>
                                    <td>{area.Nombre_Area}</td>
                                    <td>
                                        <Link to={`/Areas/edit/${area.Id_Area}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteArea(area.Id_Area)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowAreas