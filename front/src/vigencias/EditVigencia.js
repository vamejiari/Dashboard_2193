import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Vigencias/'

const CompEditVigencia=()=>{
    const [Trimestre, setTrimestre]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()
    const {Id_Vigencia}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN Vigencia
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Vigencia,{
            Trimestre:Trimestre,
            Anio:Anio
        })
        navigate('/Vigencias')
    }
    useEffect(()=>{
        getVigenciaById()
    },[])

    const getVigenciaById=async()=>{
        const res=await axios.get(URI+Id_Vigencia)
        setTrimestre(res.data.Trimestre)
        setAnio(res.data.Anio)
    }

    return(
        <div>
            <h3>Editar Usuario</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Trimestre</label>
                    <input
                        value={Trimestre}
                        onChange={(e)=>setTrimestre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Anio</label>
                    <input
                        value={Anio}
                        onChange={(e)=>setAnio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditVigencia