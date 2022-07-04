import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Areas/'

const CompEditArea=()=>{
    const [Nombre_Area, setNombre_Area]=useState('')
    const navigate=useNavigate()
    const {Id_Area}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN ÁREA
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Area,{
            Nombre_Area:Nombre_Area
        })
        navigate('/Areas')
    }

    useEffect(()=>{
        getAreaById()
    },[])

    const getAreaById=async()=>{
        const res=await axios.get(URI+Id_Area)
        setNombre_Area(res.data.Nombre_Area)
    }
    return(
        <div>
            <h3>Editar Área</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Área</label>
                    <input
                        value={Nombre_Area}
                        onChange={(e)=>setNombre_Area(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditArea