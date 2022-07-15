import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h3>Crear Variable Produccion</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Variable</label>
                    <input
                        value={Id_Variable_Produccion}
                        onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3"> 
                    <label className="form-label">Nombre</label>
                    <input
                        value={Nombre_Variable}
                        onChange={(e)=>setNombre_Variable(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Variable</label>
                    <input
                        value={Tipo_Variable}
                        onChange={(e)=>setTipo_Variable(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                    <label className="form-label">Variable Suma</label>
                    <input
                        value={Variable_Suma}
                        onChange={(e)=>setVariable_Suma(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
               
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateVariableProduccion