import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendario from '../resources/Calendario.png'

const URI='http://localhost:5500/Periodos/'

const CompCreatePeriodo=()=>{
    //Hooks
    const [Id_Periodo,setId_Periodo]=useState('')
    const [Mes, setMes]=useState('')
    const [Anio, setAnio]=useState('')
    const [Id_Vigencia, setId_Vigencia]=useState('')
    const navigate=useNavigate()

    //Almacenar información
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Periodo:Id_Periodo, Mes:Mes, Anio:Anio, Id_Vigencia:Id_Vigencia})
        navigate('/Periodos')
    }
    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Calendario} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Periodo</h3>
                                <div className="row register-form">
                                    <div className="col-md-8">
                                        <label className="mb-2">Id Periodo</label>
                                        <input 
                                            value={Id_Periodo}
                                            onChange={(e)=>setId_Periodo(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Mes</label>
                                        <input 
                                            value={Mes}
                                            onChange={(e)=>setMes(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Mes" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Año</label>
                                        <input 
                                            value={Anio}
                                            onChange={(e)=>setAnio(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Año" 
                                        required/>
                                    </div>
                                    <div className="col-md-8 mt-3">
                                        <label className="mb-2">Vigencia</label>
                                        <input 
                                            value={Id_Vigencia}
                                            onChange={(e)=>setId_Vigencia(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Vigencia" 
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Periodos'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreatePeriodo