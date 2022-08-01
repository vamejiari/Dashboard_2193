import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Indicadores_Calidad_Hospitales/'

const CompCreateIndicadorCalidadHospital=()=>{
    //Hooks
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, Id_Indicador:Id_Indicador, Activa:Activa})
        navigate('/Indicadores_Calidad_Hospitales')
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
                                <h3 className="register-heading">Asignar Indicador Calidad a Hospital</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Habilitacion" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Indicador" 
                                        required/>
                                    </div>
                                    <div className="col-md-7 mt-3">
                                        <label className="cbox2">Activa</label>
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
                                <Link to={'/Indicadores_Calidad_Hospitales'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateIndicadorCalidadHospital