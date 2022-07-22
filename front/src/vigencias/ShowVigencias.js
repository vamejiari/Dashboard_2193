import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

const URI='http://localhost:5500/Vigencias/'

const CompShowVigencias=()=>{
    //Hooks
    const [Vigencias,setVigencias]=useState([])
    useEffect(()=>{
        getVigencias()
    },[])

    //Mostrar todas las vigencias
    const getVigencias=async()=>{
        //Peticion con axios
        const res=await axios.get(URI)
        setVigencias(res.data)
    }

    //Eliminar una vigencia
    const deleteVigencia=async(Id_Vigencia)=>{
        //Petición con axios
        await axios.delete(`${URI}${Id_Vigencia}`)
        getVigencias()
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
                                            <th>Id Vigencia</th>
                                            <th>Trimestre</th>
                                            <th>Año</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Vigencias.map((vigencia)=>(
                                            <tr key={vigencia.Id_Vigencia}>
                                                <td>{vigencia.Id_Vigencia}</td>
                                                <td>{vigencia.Trimestre}</td>
                                                <td>{vigencia.Anio}</td>
                                                <td>
                                                    <Link to={`/Vigencias/edit/${vigencia.Id_Vigencia}`} className="btn btn-info m-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                    <button onClick={()=>deleteVigencia(vigencia.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/Vigencias/create" className='btn' id="Crear">Crear Vigencia</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CompShowVigencias