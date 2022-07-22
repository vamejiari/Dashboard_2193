import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Indica from '../resources/KPI.png'

const URI='http://localhost:5500/Indicadores_Calidad/'

const CompCreateIndicador=()=>{
    //Hooks
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Nombre_Indicador, setNombre_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar la información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Indicador:Id_Indicador, Nombre_Indicador:Nombre_Indicador, Activa:Activa})
        navigate('/Indicadores_Calidad')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={Indica} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Indicador Calidad</h3>
                                <div class="row register-form">
                                    <div class="col-md-11">
                                        <label className="mb-2">Id Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-11 mt-3">
                                        <label className="mb-2">Nombre Indicador</label>
                                        <input 
                                            value={Nombre_Indicador}
                                            onChange={(e)=>setNombre_Indicador(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Nombre" 
                                        required/>
                                    </div>
                                    <div class="col-md-3 mt-3">
                                        <label className="cbox2">Activa</label>
                                        <div>
                                            <input 
                                                value={isChecked}
                                                onChange={(e)=>setActiva(e.target.value)}
                                                type="checkbox" 
                                                class="cbox2" 
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Indicadores_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateIndicador