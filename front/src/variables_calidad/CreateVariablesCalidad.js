import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Varia from '../resources/Variables.png'

const URI='http://localhost:5500/Variables_Calidad/'

const CompCreateVariableCalidad=()=>{
    //Hooks
    const [Id_Variable_Calidad, setId_Variable_Calidad]=useState('')
    const [Nombre_Variable, setNombre_Variable]=useState('')
    const [Tipo_Valor, setTipo_Valor]= useState('')
    const [Id_Indicador, setId_Indicador]=useState('')
    const [Activa, setActiva]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Variable_Calidad:Id_Variable_Calidad, Nombre_Variable:Nombre_Variable, Tipo_Valor:Tipo_Valor, Id_Indicador:Id_Indicador, Activa:Activa})
        navigate('/Variables_Calidad')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Varia} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Variable Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <label className="mb-2">Id Variable</label>
                                        <input 
                                            value={Id_Variable_Calidad}
                                            onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Cedula" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 ">
                                        <label className="mb-2">Tipo</label>
                                        <input 
                                            value={Tipo_Valor}
                                            onChange={(e)=>setTipo_Valor(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Tipo" 
                                        required/>
                                    </div>
                                    <div className="col-md-11 mt-3">
                                        <label className="mb-2">Nombre</label>
                                        <input 
                                            value={Nombre_Variable}
                                            onChange={(e)=>setNombre_Variable(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre" 
                                        required/>
                                    </div>
                                    
                                    <div className="col-md-8 mt-3">
                                        <label className="mb-2">Indicador</label>
                                        <input 
                                            value={Id_Indicador}
                                            onChange={(e)=>setId_Indicador(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Indicador" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="cbox2">Activa</label>
                                        <div>
                                            <input 
                                                value={isChecked}
                                                onChange={(e)=>setActiva(e.target.value)}
                                                type="checkbox" 
                                                className="cbox2" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Variables_Calidad'} className='btn mb-5' id='Cancelar' >Cancelar</Link> 
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVariableCalidad