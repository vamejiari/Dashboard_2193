import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Hospital from "../resources/Hospital.png"

const URI='http://localhost:5500/Niveles/'

const CompEditNivel=()=>{
    const [Nombre_Nivel, setNombre_Nivel]=useState('')
    const navigate=useNavigate()
    const {Id_Nivel}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UN MUNICIPIO
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Nivel,{
            Nombre_Nivel:Nombre_Nivel
        })
        navigate('/Niveles')
    }

    useEffect(()=>{
        getNivelById()
    },[])

    const getNivelById=async()=>{
        const res=await axios.get(URI+Id_Nivel)
        setNombre_Nivel(res.data.Nombre_Nivel)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={Hospital} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div >
                                <h3 class="register-heading">Editar Nivel</h3>
                                <div class="row register-form">
                                    <div class="col-md-9">
                                        <label className="mb-2">Nombre Nivel</label>
                                        <input
                                            value={Nombre_Nivel} 
                                            onChange={(e)=>setNombre_Nivel(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Nivel"
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn " id='Agregar'>Editar</button>
                                <Link to={'/Niveles'} className='btn btn-primary' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form> 
    )
}
export default CompEditNivel

