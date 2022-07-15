import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Metas_Indicadores_Calidad/'

const CompEditMetaIndicadorCalidad=()=>{
    const [Tipo_Meta, setTipo_Meta]=useState('')
    const [Valor, setValor]=useState('')
    const navigate=useNavigate()
    const {Id_Meta_Indicador}=useParams()

    //Actualizar meta de un indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Meta_Indicador,{
            Tipo_Meta:Tipo_Meta,
            Valor:Valor
        })
        navigate('/Metas_Indicadores_Calidad')
    }

    useEffect(()=>{
        getMetaIndicadorById()
    },[])

    const getMetaIndicadorById=async()=>{
        const res=await axios.get(URI+Id_Meta_Indicador)
        setTipo_Meta(res.data.Tipo_Meta)
        setValor(res.data.Valor)
    }
    return(
        <div>
            <h3>Editar Área</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Tipo Meta</label>
                    <input
                        value={Tipo_Meta}
                        onChange={(e)=>setTipo_Meta(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Valor</label>
                    <input
                        value={Valor}
                        onChange={(e)=>setValor(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditMetaIndicadorCalidad