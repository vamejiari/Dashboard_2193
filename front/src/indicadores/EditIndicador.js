import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Indicadores_Calidad/'

const CompEditIndicador=()=>{
    const [Nombre_Indicador, setNombre_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const navigate=useNavigate()
    const {Id_Indicador}=useParams()

    //Actualizar un indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Indicador,{
            Nombre_Indicador:Nombre_Indicador,
            Activa: Activa
        })
        navigate('/Indicadores_Calidad')
    }

    useEffect(()=>{
        getIndicadorById()
    },[])

    const getIndicadorById=async()=>{
        const res= await axios.get(URI+Id_Indicador)
        setNombre_Indicador(res.data.Nombre_Indicador)
        setActiva(res.data.Activa)
    }
    return(
        <div>
            <h3>Editar Indicador</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Indicador</label>
                    <input
                        value={Nombre_Indicador}
                        onChange={(e)=>setNombre_Indicador(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="cbox2">Activa</label>
                    <div>
                        <input
                            value={Activa}
                            onChange={(e)=>setActiva(e.target.value)}
                            type="checkbox"
                            className="cbox2"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditIndicador