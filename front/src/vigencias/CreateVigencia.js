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
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Calendario} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Vigencia</h3>
                                <div className="row register-form">
                                    <div className="col-md-8">
                                        <label className="mb-2">Id Vigencia</label>
                                        <input 
                                            value={Id_Vigencia}
                                            onChange={(e)=>setId_Vigencia(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Trimestre</label>
                                        <input 
                                            value={Trimestre}
                                            onChange={(e)=>setTrimestre(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Trimestre" 
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
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Vigencias'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateVigencia