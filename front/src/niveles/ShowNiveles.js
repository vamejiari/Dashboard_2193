import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

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
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-5 abs-center">
                    <img src={Hospital} className="btn" alt="Hospital" width={400}/>
                </div>
                <div className="col-md-7">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
                                        <tr>
                                            <th>Nivel</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Niveles.map((nivel)=>(
                                            <tr key={nivel.Id_Nivel}>
                                                <td>{nivel.Nombre_Nivel}</td>
                                                <td>
                                                    <Link to={`/Niveles/edit/${nivel.Id_Nivel}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteNivel(nivel.Id_Nivel)} className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Niveles/create" className='btn' id="Crear">Crear Nivel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowNiveles