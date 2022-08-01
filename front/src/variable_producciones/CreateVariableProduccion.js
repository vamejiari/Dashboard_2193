import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Varia from '../resources/Variables.png'

const URI='http://localhost:5500/Variables_Produccion/'

const CompCreateVariableProduccion=()=>{
    //CONFIGURAR HOOKS
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Nombre_Variable, setNombre_Variable]=useState('')
    const [Tipo_Variable, setTipo_Variable]=useState('')
    const [Activa, setActiva]=useState('')
    const [Variable_Suma, setVariable_Suma]=useState('')
    const [isChecked, setIsChecked]=useState(true)
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Variable_Produccion:Id_Variable_Produccion, Nombre_Variable:Nombre_Variable, Tipo_Variable:Tipo_Variable, Activa:Activa, Variable_Suma:Variable_Suma})
        navigate('/Variables_Produccion')
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
                                <h3 className="register-heading">Crear Variable Produccion</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <label className="mb-2">Id Variable</label>
                                        <input 
                                            value={Id_Variable_Produccion}
                                            onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="mb-2">Tipo Variable</label>
                                        <input 
                                            value={Tipo_Variable}
                                            onChange={(e)=>setTipo_Variable(e.target.value)}
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
                                    
                                    <div className="col-md-3 mt-3">
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
                                    <div className="col-md-7 mt-3">
                                        <label className="mb-2">Variable Suma</label>
                                        <input 
                                            value={Variable_Suma}
                                            onChange={(e)=>setVariable_Suma(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Suma" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Variables_Produccion'} className='btn mb-5' id='Cancelar' >Cancelar</Link> 
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVariableProduccion