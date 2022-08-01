import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mapa from "../resources/MapaColombia.png"

const URI='http://localhost:5500/Departamentos/'

const CompCreateDepartamento=()=>{
    //CONFIGURAR HOOKS
    const [Id_Departamento, setId_Departamento]=useState('')
    const [Nombre_Departamento, setNombre_Departamento]=useState('')
    const navigate=useNavigate()
    
    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Departamento: Id_Departamento, Nombre_Departamento:Nombre_Departamento})
        navigate('/Departamentos')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-3 abs-center">
                        <img src={Mapa} className="btn" alt="Mapa" width={300}/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content">
                            <div>
                                <h3 className="register-heading">Crear Departamento</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Departamento</label>
                                        <input 
                                            value={Id_Departamento}
                                            onChange={(e)=>setId_Departamento(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
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
                                <button type="submit" className="btn" id='Agregar'>Crear</button>
                                <Link to={'/Departamentos'} className='btn' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
        
    )
}

export default CompCreateDepartamento