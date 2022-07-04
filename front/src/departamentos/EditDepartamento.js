import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URI='http://localhost:5500/Departamentos/'

const CompEditDepartamento= ()=>{
    const [Nombre_Departamento, setNombre_Departamento]=useState('')
    const navigate=useNavigate()
    const {Id_Departamento}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN DEPARTAMENTO
    const update=async (e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Departamento,{
            Nombre_Departamento:Nombre_Departamento
        })
        navigate('/Departamentos')
    }

    useEffect(()=>{
        getDepartamentoById()
    },[])

    const getDepartamentoById=async()=>{
        const res=await axios.get(URI+Id_Departamento)
        setNombre_Departamento(res.data.Nombre_Departamento)
    } 
    return(
        <div>
            <h3>Editar Departamento</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2" >
                    <label className="form-label">Nombre Departamento</label>
                    <input
                        value={Nombre_Departamento} 
                        onChange={(e)=>setNombre_Departamento(e.target.value)}
                        type="text"
                        className="form-control"
                    /> 
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditDepartamento