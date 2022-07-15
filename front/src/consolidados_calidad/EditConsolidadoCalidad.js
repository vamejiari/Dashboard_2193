import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Consolidados_Calidad/'

const CompEditConsolidadoCalidad=()=>{
    const [Cantidad, setCantidad]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Variable_Calidad, Id_Vigencia}=useParams()

    //Actualizar un consolidado
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`,{
            Cantidad:Cantidad
        })
        navigate('/Consolidados_Calidad')
    }

    useEffect(()=>{
        getConsolidadoCalidadByData()
    },[])

    const getConsolidadoCalidadByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Variable_Calidad}/${Id_Vigencia}`)
        setCantidad(res.data.Cantidad)
    }

    return(
        <div>
            <h3>Editar Consolidado Calidad</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Cantidad</label>
                    <input
                        value={Cantidad}
                        onChange={(e)=>setCantidad(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditConsolidadoCalidad