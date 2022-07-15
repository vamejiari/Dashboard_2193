import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Registros_Indicadores_Calidad/'

const CompEditRegistroIndicadorCalidad=()=>{
    const [Total, setTotal]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion, Id_Indicador, Id_Periodo}=useParams()

    //Actualizar un registro indicador
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Periodo}`,{
            Total:Total
        })
        navigate('/Registros_Indicadores_Calidad')
    }

    useEffect(()=>{
        getRegistroIndicadorByData()
    },[])

    const getRegistroIndicadorByData=async()=>{
        const res=await axios.get(`${URI}${Codigo_Habilitacion}/${Id_Indicador}/${Id_Periodo}`)
        setTotal(res.data.Total)
    }

    return(
        <div>
            <h3>Editar Registro Indicador Calidad</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Total</label>
                    <input
                        value={Total}
                        onChange={(e)=>setTotal(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditRegistroIndicadorCalidad