import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"


const URI='http://localhost:5500/Municipios/'
const URI2='http://localhost:5500/Departamentos/'

const CompEditMunicipio=()=>{
    const [Nombre_Municipio, setNombre_Municipio]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const [Nombre_Departamento, setNombre_Departamento]=useState('')
    const [Departamentos, setDepartamentos]=useState([])
    const navigate=useNavigate()
    const {Id_Municipio}=useParams()
    const {Departamento}=useParams()

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

    useEffect(()=>{
        getDepartamentos()
    },[])

    /*useEffect(()=>{
        getDepartamentoById()
    },[])*/

    const getMunicipioById=async()=>{
        const res=await axios.get(URI+Id_Municipio)
        setNombre_Municipio(res.data.Nombre_Municipio)
        setId_Departamento(res.data.Id_Departamento)
    }

    const getDepartamentos=async()=>{
        //CREAR PETICION CON AXIOS
        const res=await axios.get(URI2)
        setDepartamentos(res.data)
    }

    /*const getDepartamentoById=async()=>{
        const res=await axios.get(URI2+Id_Departamento)
        setId_Departamento(res.data.Id_Departamento)
        setNombre_Departamento(res.data.Nombre_Departamento)            
        console.log(`Hola ${res.data.Nombre_Departamento}`)
    }*/

    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-3 abs-center">
                        <img src={Mapa} className="btn" alt="Mapa" width={310}/>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Municipio</h3>
                                <div class="row register-form">
                                    <div class="col-md-7">
                                        <label className="mb-2">Nombre Municipio</label>
                                        <input
                                            value={Nombre_Municipio} 
                                            onChange={(e)=>setNombre_Municipio(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Municipio"
                                        required/>
                                    </div>
                                    <div class="col-md-4">
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