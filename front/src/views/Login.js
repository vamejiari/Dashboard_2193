import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:5500/Login/'

const Login=()=>{
    const [Login, setLogin]=useState({usuario:'', contrasena:''})
    const navigate=useNavigate()
    const inputChange=({target})=>{
        const {name, value}=target
        setLogin({
            ...Login,
            [name]:value
        })
    }

    const onSubmit=async()=>{
        await axios.post(URI, {Usuario:Login.usuario, Contrasena:Login.contrasena})
        //.catch(({response})=>{
          //  console.log(response.data)
        //})
        navigate('/Hospitales')
        
    }

    return(
        <section className="vh-40 gradient-custom">
            <div className="container py-1 h-60">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-11 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-success text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Ingresar</h2>
                                <p className="text-white-50 mb-5">Por favor ingrese su usuario y contraseña</p>

                                <div className="form-outline form-white mb-4">
                                    <input
                                        value={Login.usuario}
                                        onChange={inputChange} 
                                        type="text" 
                                        id="typeUsuarioX" 
                                        className="form-control form-control-lg" 
                                        name='usuario'
                                    />
                                    <label className="form-label">Usuario</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                <input
                                        value={Login.contrasena}
                                        onChange={inputChange} 
                                        type="password" 
                                        id="typePasswordX" 
                                        className="form-control form-control-lg" 
                                        name='contrasena'
                                    />
                                    <label className="form-label">Contraseña</label>
                                </div>

                                <button className="btn btn-dark" type="submit" onClick={()=>onSubmit()}>Login</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    )
}

export default Login