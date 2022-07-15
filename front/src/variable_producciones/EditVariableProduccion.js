import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Variables_Produccion/'

const ComEditVariableProduccion=()=>{
    const[Nombre_Variable, setNombre_Variable]=useState('')
    const[Tipo_Variable, setTipo_Variable]=useState('')
    const[Activa, setActiva]=useState('')
    const[Variable_Suma, setVariable_Suma]=useState('')
    const navigate=useNavigate()
    const{Id_Variable_Produccion}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UNA VARIABLE DE PRODUCCION
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Variable_Produccion,{
            Nombre_Variable:Nombre_Variable,
            Tipo_Variable:Tipo_Variable,
            Activa:Activa,
            Variable_Suma:Variable_Suma
        })
        navigate('/Variables_Produccion')
    }

    useEffect(()=>{
        getVariableById()
    },[])

    const getVariableById=async()=>{
        const res=await axios.get(URI+Id_Variable_Produccion)
        setNombre_Variable(res.data.Nombre_Variable)
        setTipo_Variable(res.data.Tipo_Variable)
        setActiva(res.data.Activa)
        setVariable_Suma(res.data.Variable_Suma)
    }
    return(
        <div>
            <h3>Editar Variable Producción</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Variable Produccion</label>
                    <input
                        value={Nombre_Variable}
                        onChange={(e)=>setNombre_Variable(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Tipo Variable</label>
                    <input
                        value={Tipo_Variable}
                        onChange={(e)=>setTipo_Variable(e.target.value)}
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
                <div className="mt-2 mb-2">
                <label className="form-label">Variable Suma</label>
                    <input
                        value={Tipo_Variable}
                        onChange={(e)=>setVariable_Suma(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}
export default ComEditVariableProduccion