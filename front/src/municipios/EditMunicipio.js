import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"


const URI='http://localhost:5500/Municipios/'
const URI2='http://localhost:5500/Departamentos/'

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
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-md-3 abs-center">
                        <img src={Mapa} className="btn" alt="Mapa" width={310}/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Municipio</h3>
                                <div className="row register-form">
                                    <div className="col-md-7">
                                        <label className="mb-2">Nombre Municipio</label>
                                        <input
                                            value={Nombre_Municipio} 
                                            onChange={(e)=>setNombre_Municipio(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Municipio"
                                        required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="mb-2">Departamento</label>
                                        <input
                                            value={Id_Departamento} 
                                            onChange={(e)=>setId_Departamento(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Departamento"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn " id='Agregar'>Editar</button>
                                <Link to={'/Municipios'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}

export default CompEditMunicipio