import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Metas_Produccion/'

const CompEditMetaProduccion=()=>{
    const [Valor_Meta, setValor_Meta]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Produccion, Anio}=useParams()

    //Guardar información
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Anio}`,{
            Valor_Meta:Valor_Meta
        })
        navigate('/Metas_Produccion')
    }
    useEffect(()=>{
        getMetaByData()
    },[])
    const getMetaByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Produccion}/${Anio}`)
        setValor_Meta(res.data.Valor_Meta)
    }

    return(
        <div>
            <h3>Editar Meta Producción</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Valor Meta</label>
                    <input
                        value={Valor_Meta || ''}
                        onChange={(e)=>setValor_Meta(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditMetaProduccion