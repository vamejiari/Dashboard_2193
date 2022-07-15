import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/Vigencias/create' className="btn btn-primary mt-2 mb-2">Crear vigencia</Link>
                    <table className="table table-striped">
                        <thead className="table-primary">
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
                                        <Link to={`/Vigencias/edit/${vigencia.Id_Vigencia}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVigencia(vigencia.Id_Vigencia)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompShowVigencias