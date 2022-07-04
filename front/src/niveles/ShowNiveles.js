import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:5500/Niveles/'

const CompShowNiveles=()=>{
    //CONFIGURAR HOOKS
    const [Niveles, setNiveles]=useState([])
    useEffect(()=>{
        getNiveles()
    },[])

    //PROCEDIMIENTO PARA MOSTRAR TODOS LOS NIVELES
    const getNiveles=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI)
        setNiveles(res.data)
    }

    //PROCEDIMIENTO PARA ELIMINAR UN DEPARTAMENTO
    const deleteNivel=async(Id_Nivel)=>{
        //CREAR PETICION CON AXIOS
        await axios.delete(`${URI}${Id_Nivel}`)
        getNiveles()
    }

    //DEVOLVER VISTA
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/Niveles/create" className="btn btn-primary mt-2 mb-2">Crear Nivel</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Id Nivel</th>
                                <th>Nombre Nivel</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Niveles.map((nivel)=>(
                                <tr key={nivel.Id_Nivel}>
                                    <td>{nivel.Id_Nivel}</td>
                                    <td>{nivel.Nombre_Nivel}</td>
                                    <td>
                                        <Link to={`/Niveles/edit/${nivel.Id_Nivel}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteNivel(nivel.Id_Nivel)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowNiveles