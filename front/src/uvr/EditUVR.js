import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/UVRS/'

const CompEditUVR=()=>{
    const [Ponderado, setPonderado]=useState('')
    const navigate=useNavigate()
    const {Id_UVR}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UNA UVR
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_UVR,{
            Ponderado:Ponderado
        })
        navigate('/UVRS')
    }
    useEffect(()=>{
        getUVRById()
    },[])

    const getUVRById=async()=>{
        const res=await axios.get(URI+Id_UVR)
        setPonderado(res.data.Ponderado)
    }
    return(
        <div>
            <h3>Editar Ponderado UVR</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Ponderado</label>
                    <input
                        value={Ponderado}
                        onChange={(e)=>setPonderado(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditUVR