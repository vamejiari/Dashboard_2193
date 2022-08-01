import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Check from '../resources/CheckList.png'

const URI='http://localhost:5500/Registros_Produccion/'

const CompCreateRegistroProduccion=()=>{
    const [Id_Registro, setId_Registro]=useState('')
    const [Poblacion_Pobre, setPoblacion_Pobre]=useState('')
    const [No_Poss, setNo_Poss]=useState('')
    const [Subsidiado, setSubsidiado]=useState('')
    const [Contributivo, setContributivo]=useState('')
    const [Otros, setOtros]=useState('')
    const [Total, setTotal]=useState('')
    const [Calculo_UVR, setCalculo_UVR]=useState('')
    const [Id_Periodo, setId_Periodo]=useState('')
    const [Codigo_Habilitacion, setCodigo_Habilitacion]=useState('')
    const [Id_Area, setId_Area]=useState('')
    const [Id_Variable_Produccion, setId_Variable_Produccion]=useState('')
    const [Id_UVR, setId_UVR]=useState('')
    const [Id_Consolidado, setId_Consolidado]=useState('')
    const navigate=useNavigate()

    //Almacenar informacion
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI, {Id_Registro:Id_Registro, Poblacion_Pobre:Poblacion_Pobre, No_Poss:No_Poss, Subsidiado:Subsidiado, Contributivo:Contributivo, Otros:Otros, Total:Total,Calculo_UVR:Calculo_UVR, Id_Periodo:Id_Periodo, Codigo_Habilitacion:Codigo_Habilitacion, Id_Area:Id_Area, Id_Variable_Produccion:Id_Variable_Produccion, Id_UVR:Id_UVR, Id_Consolidado:Id_Consolidado})
        navigate('/Registros_Produccion')
    }
    return(
        <form onSubmit={store} className="need-validation">
            <div className="container register mb-5">
                <div className="row">
                    <div className="col-4 abs-center">
                        <img src={Check} className="btn" alt="Mapa" width={315}/>
                    </div>
                    <div className="col-md-8 register-right">
                        <div className="tab-content mt-5">
                            <div>
                                <h3 className="register-heading">Crear Consolidado Produccion</h3>
                                <div className="row register-form">
                                    <div className="col-md-4">
                                        <label className="mb-2">Id Registro</label>
                                        <input 
                                            value={Id_Registro}
                                            onChange={(e)=>setId_Registro(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Código Identificación" 
                                        required/>
                                    </div>
                                    <div className="col-md-7">
                                        <label className="mb-2">Hospital</label>
                                        <input 
                                            value={Codigo_Habilitacion}
                                            onChange={(e)=>setCodigo_Habilitacion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Hospital" 
                                        required/>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Variable</label>
                                        <input 
                                            value={Id_Variable_Produccion}
                                            onChange={(e)=>setId_Variable_Produccion(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Variable" 
                                        required/>
                                    </div>
                                    <div className="col-md-3 mt-3">
                                        <label className="mb-2">Periodo</label>
                                        <input 
                                            value={Id_Periodo}
                                            onChange={(e)=>setId_Periodo(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Periodo" 
                                        required/>
                                    </div>
                                    
                                    <div className="col-md-4 mt-3">
                                        <label className="mb-2">Área</label>
                                        <input 
                                            value={Id_Area}
                                            onChange={(e)=>setId_Area(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Área" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Población Pobre</label>
                                        <input 
                                            value={Poblacion_Pobre}
                                            onChange={(e)=>setPoblacion_Pobre(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="ml-3 mb-2">No Poss</label>
                                        <input 
                                            value={No_Poss}
                                            onChange={(e)=>setNo_Poss(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Subsidiado</label>
                                        <input 
                                            value={Subsidiado}
                                            onChange={(e)=>setSubsidiado(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Contributivo</label>
                                        <input 
                                            value={Contributivo}
                                            onChange={(e)=>setContributivo(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Otros</label>
                                        <input 
                                            value={Otros}
                                            onChange={(e)=>setOtros(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Total</label>
                                        <input 
                                            value={Total}
                                            onChange={(e)=>setTotal(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad Atenciones" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Calculo UVR</label>
                                        <input 
                                            value={Calculo_UVR}
                                            onChange={(e)=>setCalculo_UVR(e.target.value)}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Valor UVR" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">UVR</label>
                                        <input 
                                            value={Id_UVR}
                                            onChange={(e)=>setId_UVR(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="UVR" 
                                        required/>
                                    </div>
                                    <div className="col-md-5 mt-3">
                                        <label className="mb-2">Consolidado</label>
                                        <input 
                                            value={Id_Consolidado}
                                            onChange={(e)=>setId_Consolidado(e.target.value)}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="UVR" 
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn mb-5" id='Agregar'>Crear</button>
                                <Link to={'/Registros_Produccion'} className='btn mb-5' id='Cancelar' >Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </form>
    )
}

export default CompCreateRegistroProduccion