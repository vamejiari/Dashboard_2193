import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Periodos/'

const CompEditPeriodo=()=>{
    const [Mes, setMes]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()
    const {Id_Periodo}=useParams()

    //Actualizar un periodo
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Periodo,{
            Mes:Mes, 
            Anio:Anio
        })
        navigate('/Periodos')
    }

    useEffect(()=>{
        getPeriodoById()
    },[])

    const getPeriodoById=async()=>{
        const res=await axios.get(URI+Id_Periodo)
        setMes(res.data.Mes)
        setAnio(res.data.Anio)
    }
    return(
        <div>
            <h3>Editar Periodo</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Mes</label>
                    <input
                        value={Mes}
                        onChange={(e)=>setMes(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Año</label>
                    <input
                        value={Anio}
                        onChange={(e)=>setAnio(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>

            </form>
        </div>
    )
}

export default CompEditPeriodo