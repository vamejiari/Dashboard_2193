import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nov from '../resources/Novedad.png'

const URI='http://localhost:5500/Novedades/'

const CompCreateNovedad=()=>{
    //Hooks
    const [Id_Novedad, setId_Novedad]=useState('')
    const [Novedad, setNovedad]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const navigate=useNavigate()

    //Almacenar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Novedad:Id_Novedad, Novedad:Novedad, Id_Periodo:Id_Periodo, Codigo_Habilitacion:Codigo_Habilitacion})
        navigate('/Novedades')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div class="container register mb-5">
                <div class="row">
                    <div class="col-4 abs-center">
                        <img src={nov} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div class="col-md-8 register-right">
                        <div class="tab-content mt-5">
                            <div>
                                <h3 class="register-heading">Crear Novedad</h3>
                                <div class="row register-form">
                                    <div class="col-md-5">
                                        <label className="mb-2">Id Novedad</label>
                                        <input 
                                            value={Id_Novedad}
                                            onChange={(e)=>setId_Novedad(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div class="col-md-6">
                                        <label className="mb-2">Periodo</label>
                                        <input 
                                            value={Id_Periodo}
                                            onChange={(e)=>setId_Periodo(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Periodo" 
                                        required/>
                                    </div>
                                    <div class="col-md-11 mt-3">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div class="col-md-11 mt-3" id="Novedad">
                                        <label className="mb-2">Novedad</label>
                                        <input 
                                            value={Novedad}
                                            onChange={(e)=>setNovedad(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Novedad" 
                                        required/>
                                    </div>
                                    
                                    
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Novedades'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateNovedad