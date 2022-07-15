import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Variables_Calidad/'

const CompEditVariableCalidad=()=>{
    const [Nombre_Variable, setNombre_Variable]=useState('')
    const [Tipo_Valor, setTipo_Valor]=useState('')
    const [Activa, setActiva]=useState('')
    const navigate=useNavigate()
    const {Id_Variable_Calidad}=useParams()

    //Actualizar una variable
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Variable_Calidad,{
            Nombre_Variable:Nombre_Variable,
            Tipo_Valor:Tipo_Valor,
            Activa:Activa
        })
        navigate('/Variables_Calidad')
    }
    useEffect(()=>{
        getVariableCalidadById()
    },[])
    
    const getVariableCalidadById=async()=>{
        const res=await axios.get(URI+Id_Variable_Calidad)
        setNombre_Variable(res.data.Nombre_Variable)
        setTipo_Valor(res.data.Tipo_Valor)
        setActiva(res.data.Activa)
    }

    return(
        <div>
            <h3>Editar Variable Calidad</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Variable</label>
                    <input
                        value={Nombre_Variable}
                        onChange={(e)=>setNombre_Variable(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Tipo Valor</label>
                        <input
                            value={Tipo_Valor}
                            onChange={(e)=>setTipo_Valor(e.target.value)}
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

export default CompEditVariableCalidad