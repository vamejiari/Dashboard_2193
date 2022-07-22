import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Variables_Produccion_Hospitales/'

const CompCreateVariableProduccionHospital=()=>{
    //Configurar hooks
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Procedimiento para guardar la informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Variable_Produccion:Id_Variable_Produccion, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Activa:Activa})
        navigate('/Variables_Produccion_Hospitales')
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
                                <h3 class="register-heading">Asignar Variable Producción a Hospital</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Variable Producción</label>
                                        <input 
                                            value={Id_Variable_Produccion}
                                            onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div class="col-md-7 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div class="col-md-7 mt-3">
                                        <label className="mb-2">Activa</label>
                                        <div>
                                            <input
                                                value={isChecked}
                                                type="checkbox" 
                                                onChange={(e)=>setActiva(e.target.value)}
                                                className="cbox2"
                                            />
                                        </div> 
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Variables_Produccion_Hospitales'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVariableProduccionHospital