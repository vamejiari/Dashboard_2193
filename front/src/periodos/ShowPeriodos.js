import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

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
        <div className="container register mb-5">
            <div className="row abs-center">
                <div className="col-md-3 abs-center">
                    <img src={Calendario} className="btn" alt="Hospital" width={350}/>
                </div>
                <div className="col-md-8">
                    <div className='container'>
                        <div className='row abs-center'>
                            <div className='col'>
                                <table className="table table-responsive-lg table-bordered table-light  mt-3" >
                                    <thead className='table table-primary'>
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
                                                    <Link to={`/Periodos/edit/${periodo.Id_Periodo}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deletePeriodo(periodo.Id_Periodo)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Periodos/create" className='btn' id="Crear">Crear Periodo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    )
}

export default CompShowPeriodos