import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Areas_Hospitales/'

const CompCreateAreaHospital=()=>{
    //CONFIGURAR HOOKS
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACION
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area})
        navigate('/Areas_Hospitales')
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
                                <h3 class="register-heading">Asignar Área a Hospital</h3>
                                <div class="row register-form">
                                    <div class="col-md-4">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Código Habilitacion" 
                                        required/>
                                    </div>
                                    <div class="col-md-7">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Areas_Hospitales'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateAreaHospital