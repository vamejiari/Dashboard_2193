import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Varia from '../resources/Variables.png'

const URI='http://localhost:5500/Variables_Calidad/'

const CompEditVariableCalidad=()=>{
    const [Nombre_Variable, setNombre_Variable]=useState('')
    const [Tipo_Valor, setTipo_Valor]=useState('')
    const [Activa, setActiva]=useState('')
    const navigate=useNavigate()
    const {Id_Variable_Calidad}=useParams()

    //Actualizar una variable
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Variable_Calidad,{
            Nombre_Variable:Nombre_Variable,
            Tipo_Valor:Tipo_Valor,
            Activa:Activa
        })
        navigate('/Variables_Calidad')
    }
    useEffect(()=>{
        getVariableCalidadById()
    },[])
    
    const getVariableCalidadById=async()=>{
        const res=await axios.get(URI+Id_Variable_Calidad)
        setNombre_Variable(res.data.Nombre_Variable)
        setTipo_Valor(res.data.Tipo_Valor)
        setActiva(res.data.Activa)
    }

    return(
        <form onSubmit={update} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Varia} className="btn" alt="Mapa" width={330}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content">
                            <div >
                                <h3 className="register-heading">Editar Variable Calidad</h3>
                                <div className="row register-form">
                                    <div className="col-md-7">
                                        <label className="mb-2">Nombre</label>
                                        <input
                                            value={Nombre_Variable} 
                                            onChange={(e)=>setNombre_Variable(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                        required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="mb-2">Tipo Variable</label>
                                        <input 
                                            value={Tipo_Valor}
                                            onChange={(e)=>setTipo_Valor(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Tipo" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Activa</label>
                                        <div>
                                            <input
                                                value={Activa}
                                                onChange={(e)=>setActiva(e.target.value)}
                                                type="checkbox"
                                                className="cbox2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5 " id='Agregar'>Editar</button>
                                <Link to={'/Variables_Calidad'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompEditVariableCalidad