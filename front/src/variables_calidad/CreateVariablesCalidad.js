import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h3>Crear Variable Calidad</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Id Variable</label>
                    <input
                        value={Id_Variable_Calidad}
                        onChange={(e)=>setId_Variable_Calidad(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre Variable</label>
                    <input
                        value={Nombre_Variable}
                        onChange={(e)=>setNombre_Variable(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo Valor</label>
                    <input
                        value={Tipo_Valor}
                        onChange={(e)=>setTipo_Valor(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div> 
                <div className="mb-3">
                    <label className="form-label">Id Indicador</label>
                    <input
                        value={Id_Indicador}
                        onChange={(e)=>setId_Indicador(e.target.value)}
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
                <button type="submit" className="btn btn-success"><i className="fa-regular fa-square-plus"></i></button>
            </form>
        </div>
    )
}

export default CompCreateVariableCalidad