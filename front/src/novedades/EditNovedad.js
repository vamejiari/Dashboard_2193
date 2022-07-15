import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Novedades/'

const CompEditNovedad=()=>{
    const [Novedad, setNovedad]=useState('')
    const navigate=useNavigate()
    const {Id_Novedad}=useParams()

    //Actualizar una novedad
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Novedad,{
            Novedad:Novedad
        })
        navigate('/Novedades')
    }

    useEffect(()=>{
        getNovedadById()
    },[])

    const getNovedadById=async()=>{
        const res=await axios.get(URI+Id_Novedad)
        setNovedad(res.data.Novedad)
    }

    return(
        <div>
            <h3>Editar Novedad</h3>
            <form onSubmit={update}>
            <div className="mt-2 mb-2">
                    <label className="form-label">Novedad</label>
                    <input
                        value={Novedad}
                        onChange={(e)=>setNovedad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditNovedad