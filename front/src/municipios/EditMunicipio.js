import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:5500/Municipios/'

const CompEditMunicipio=()=>{
    const [Nombre_Municipio, setNombre_Municipio]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const navigate=useNavigate()
    const {Id_Municipio}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN MUNICIPIO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Municipio,{
            Nombre_Municipio:Nombre_Municipio,
            Id_Departamento:Id_Departamento
        })
        navigate('/Municipios')
    }

    useEffect(()=>{
        getMunicipioById()
    },[])

    const getMunicipioById=async()=>{
        const res=await axios.get(URI+Id_Municipio)
        setNombre_Municipio(res.data.Nombre_Municipio)
        setId_Departamento(res.data.Id_Departamento)
    }

    return(
        <div>
            <h3>Editar Municipio</h3>
            <form onSubmit={update}>
                <div className="mt-2 mb-2">
                    <label className="form-label">Nombre Municipio</label>
                    <input
                        value={Nombre_Municipio}
                        onChange={(e)=>setNombre_Municipio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mt-2 mb-2">
                    <label className="form-label">Id Departamento</label>
                    <input
                        value={Id_Departamento}
                        onChange={(e)=>setId_Departamento(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
            </form>
        </div>
    )
}

export default CompEditMunicipio