import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hospital from '../resources/Hospital.png'

const URI='http://localhost:5500/Hospitales/'

const CompCreateHospital=()=>{
    //CONFIGURAR HOOKS
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [NIT, setNit]=useState('')
    const [Nombre, setNombre]=useState('')
    const [Id_Nivel, setId_Nivel]=useState('')
    const [Id_Departamento, setId_Departamento]=useState('')
    const [Id_Municipio, setId_Municipio]=useState('')
    const navigate=useNavigate()

    //PROCEDIMIENTO PARA GUARDAR LA INFORMACION
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Codigo_Habilitacion:Codigo_Habilitacion, NIT:NIT, Nombre:Nombre, Id_Nivel:Id_Nivel, Id_Departamento:Id_Departamento, Id_Municipio:Id_Municipio})
        navigate('/Hospitales')
    }
    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Hospital} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Hospital</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Código Habilitación</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Habilitación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">NIT</label>
                                        <input 
                                            value={NIT}
                                            onChange={(e)=>setNit(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="NIT" 
                                        required/>
                                    </div>
                                    <div className="col-md-11 mt-3">
                                        <label className="mb-2">Nombre</label>
                                        <input 
                                            value={Nombre}
                                            onChange={(e)=>setNombre(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre" 
                                        required/>
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <label className="mb-2">Nivel</label>
                                        <input 
                                            value={Id_Nivel}
                                            onChange={(e)=>setId_Nivel(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nivel" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Departamento</label>
                                        <input 
                                            value={Id_Departamento}
                                            onChange={(e)=>setId_Departamento(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Departamento" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Municipio</label>
                                        <input 
                                            value={Id_Municipio}
                                            onChange={(e)=>setId_Municipio(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Municipio" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Hospitales'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateHospital