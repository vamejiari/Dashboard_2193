import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"

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
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Mapa} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Departamento</h3>
                                <div className="row register-form">
                                    <div className="col-md-7">
                                        <label className="mb-2">Nombre Departamento</label>
                                        <input
                                            value={Nombre_Departamento} 
                                            onChange={(e)=>setNombre_Departamento(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn" id='Agregar'>Editar</button>
                                <Link to={'/Departamentos'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditDepartamento