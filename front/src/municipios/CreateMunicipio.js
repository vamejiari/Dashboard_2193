import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"


const URI='http://localhost:5500/Municipios/'

const CompCreateMunicipio=()=>{
    //CONFIGURAR HOOKS
    const [Id_Municipio, setId_Municipio]=useState('')
    const [Nombre_Municipio, setNombre_Municipio]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Municipio:Id_Municipio, Nombre_Municipio:Nombre_Municipio, Id_Departamento:Id_Departamento})
        navigate('/Municipios')
    }
    

    return(
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-md-4 abs-center">
                        <img src={Mapa} className="btn" alt="Mapa" width={390}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content">
                            <div>
                                <h3 class="register-heading">Crear Municipio</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Id Municipio</label>
                                        <input 
                                            value={Id_Municipio}
                                            onChange={(e)=>setId_Municipio(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-4">
                                        <label className="mb-2">Departamento</label>
                                        <input 
                                            value={Id_Departamento}
                                            onChange={(e)=>setId_Departamento(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Departamento" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mt-3 mb-2">Nombre Municipio</label>
                                        <input 
                                            value={Nombre_Municipio}
                                            onChange={(e)=>setNombre_Municipio(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Nombre" 
                                        required/>
                                    </div>
                                    
                                </div>
                                
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Municipios'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    ) 
}

export default CompCreateMunicipio