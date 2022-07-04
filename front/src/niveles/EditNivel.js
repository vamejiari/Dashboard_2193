import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Niveles/'

const CompEditNivel=()=>{
    const [Nombre_Nivel, setNombre_Nivel]=useState('')
    const navigate=useNavigate()
    const {Id_Nivel}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN MUNICIPIO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Nivel,{
            Nombre_Nivel:Nombre_Nivel
        })
        navigate('/Niveles')
    }

    useEffect(()=>{
        getNivelById()
    },[])

    const getNivelById=async()=>{
        const res=await axios.get(URI+Id_Nivel)
        setNombre_Nivel(res.data.Nombre_Nivel)
    }

    return(
        <div>
            <h3>Editar Nivel</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Nivel</label>
                    <input
                        value={Nombre_Nivel}
                        onChange={(e)=>setNombre_Nivel(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}
export default CompEditNivel

