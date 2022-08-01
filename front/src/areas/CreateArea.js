import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Area from '../resources/Area.png'

const URI='http://localhost:5500/Areas/'

const CompCreateArea=()=>{
    //CONFIGURAR HOOKS
    const [Id_Area, setId_Area]=useState('')
    const [Nombre_Area, setNombre_Area]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACIÓN
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Area:Id_Area, Nombre_Area:Nombre_Area})
        navigate('/Areas')
    }

    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Area} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Área</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Nombre Área</label>
                                        <input 
                                            value={Nombre_Area}
                                            onChange={(e)=>setNombre_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Areas'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}
export default CompCreateArea