import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Niveles/'

const CompCreateNivel=()=>{
    //CONFIGURAR HOOKS
    const [Id_Nivel, setId_Nivel]=useState('')
    const [Nombre_Nivel, setNombre_Nivel]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Nivel:Id_Nivel, Nombre_Nivel:Nombre_Nivel})
        navigate('/Niveles')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={Hospital} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Nivel</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Id Nivel</label>
                                        <input 
                                            value={Id_Nivel}
                                            onChange={(e)=>setId_Nivel(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mb-2">Nombre Nivel</label>
                                        <input 
                                            value={Nombre_Nivel}
                                            onChange={(e)=>setNombre_Nivel(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Nivel" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Niveles'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateNivel