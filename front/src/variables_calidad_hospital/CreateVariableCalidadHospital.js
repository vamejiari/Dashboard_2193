import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Variables_Calidad_Hospitales/'

const CompCreateVariableCalidadHospital=()=>{
    //Hooks
    const [Id_Variable_Calidad, setId_Variable_Calidad]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Variable_Calidad:Id_Variable_Calidad , Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Activa:Activa})
        navigate('/Variables_Calidad_Hospitales')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Hospital} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Asignar Variable Calidad a Hospital</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Variable Calidad</label>
                                        <input 
                                            value={Id_Variable_Calidad}
                                            onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-7 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div className="col-md-7 mt-3">
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
                                <Link to={'/Variables_Calidad_Hospitales'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVariableCalidadHospital