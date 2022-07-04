import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Hospitales/'

const CompEditHospital=()=>{
    const [NIT, setNit]=useState('')
    const [Nombre, setNombre]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const navigate=useNavigate()
    const {Codigo_Habilitacion}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN DEPARTAMENTO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Codigo_Habilitacion,{
            NIT:NIT,
            Nombre:Nombre,
            Id_Nivel:Id_Nivel
        })
        navigate('/Hospitales')
    }

    useEffect(()=>{
        getHospitalByCodigoHabilitacion() 
     },[])
     
    const getHospitalByCodigoHabilitacion=async()=>{
        const res=await axios.get(URI+Codigo_Habilitacion)
        setNit(res.data.NIT)
        setNombre(res.data.Nombre)
        setId_Nivel(res.data.Id_Nivel)
    } 
    return(
        <div>
            <h3>Editar Hospital</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">NIT</label>
                    <input
                        value={NIT}
                        onChange={(e)=>setNit(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre</label>
                    <input
                        value={Nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Id Nivel</label>
                    <input
                        value={Id_Nivel}
                        onChange={(e)=>setId_Nivel(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditHospital

