import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

const URI='http://localhost:5500/Vigencias/'

const CompCreateVigencia=()=>{
    //Hooks
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const [Trimestre, setTrimestre]=useState('')
    const [Anio, setAnio]=useState('')
    const navigate=useNavigate()

    //Guardar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Vigencia:Id_Vigencia, Trimestre:Trimestre, Anio:Anio})
        navigate('/Vigencias')
    }
    
    return(
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={Calendario} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Vigencia</h3>
                                <div class="row register-form">
                                    <div class="col-md-8">
                                        <label className="mb-2">Id Vigencia</label>
                                        <input 
                                            value={Id_Vigencia}
                                            onChange={(e)=>setId_Vigencia(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <label className="mb-2">Trimestre</label>
                                        <input 
                                            value={Trimestre}
                                            onChange={(e)=>setTrimestre(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Trimestre" 
                                        required/>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <label className="mb-2">Año</label>
                                        <input 
                                            value={Anio}
                                            onChange={(e)=>setAnio(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Año" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Vigecnias'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVigencia