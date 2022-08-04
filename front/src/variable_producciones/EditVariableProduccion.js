import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Varia from '../resources/Variables.png'

const URI='http://localhost:5500/Variables_Produccion/'

const ComEditVariableProduccion=()=>{
    const[Nombre_Variable, setNombre_Variable]=useState('')
    const[Tipo_Variable, setTipo_Variable]=useState('')
    const[Activa, setActiva]=useState('')
    const[Variable_Suma, setVariable_Suma]=useState('')
    const navigate=useNavigate()
    const{Id_Variable_Produccion}=useParams()

    //PROCEDIMIENTO PARA ACTUALIZAR UNA VARIABLE DE PRODUCCION
    const update=async(e)=>{
        e.preventDefault()
        await axios.put(URI+Id_Variable_Produccion,{
            Nombre_Variable:Nombre_Variable,
            Tipo_Variable:Tipo_Variable,
            Activa:Activa,
            Variable_Suma:Variable_Suma
        })
        navigate('/Variables_Produccion')
    }

    useEffect(()=>{
        getVariableById()
    },[])

    const getVariableById=async()=>{
        const res=await axios.get(URI+Id_Variable_Produccion)
        setNombre_Variable(res.data.Nombre_Variable)
        setTipo_Variable(res.data.Tipo_Variable)
        setActiva(res.data.Activa)
        setVariable_Suma(res.data.Variable_Suma)
        const res2=await axios.get(URI+Id_Variable_Produccion)
        console.log(res2.data)
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
                                <h3 className="register-heading">Editar Variable Produccion</h3>
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
                                            value={Tipo_Variable}
                                            onChange={(e)=>setTipo_Variable(e.target.value)}
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
                                    <div className="col-md-7 mt-3">
                                        <label className="mb-2">Variable Suma</label>
                                        <input 
                                            value={Variable_Suma}
                                            onChange={(e)=>setVariable_Suma(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5 " id='Agregar'>Editar</button>
                                <Link to={'/Variables_Produccion'} className='btn btn-primary mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}
export default ComEditVariableProduccion