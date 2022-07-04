import logo from './descarga.jfif';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//IMPORTAR LOS COMPONENTES DEPARTAMENTO
import CompShowDepartamentos from './departamentos/ShowDepartamentos.js';
import CompCreateDepartamento from './departamentos/CreateDepartamento.js';
import CompEditDepartamento from './departamentos/EditDepartamento.js';
//IMPORTAR LOS COMPONENTES MUNICIPIO
import CompShowMunicipios from './municipios/ShowMunicipios.js';
import CompCreateMunicipio from './municipios/CreateMunicipio.js';
import CompEditMunicipio from './municipios/EditMunicipio.js';
//IMPORTAR LOS COMPONENTES DE NIVEL
import CompShowNiveles from './niveles/ShowNiveles.js';
import CompEditNivel from './niveles/EditNivel.js';
import CompCreateNivel from './niveles/CreateNivel.js';
//IMPORTAR LOS COMPONENTES DE HOSPITAL
import CompShowHospitales from './hospitales/ShowHospitales.js';
import CompCreateHospital from './hospitales/CreateHospital';
import CompEditHospital from './hospitales/EditHospital';
//IMPORTAR LOS COMPONENTES DE AREA
import CompShowAreas from './areas/ShowAreas';
import CompCreateArea from './areas/CreateArea';
import CompEditArea from './areas/EditArea';
//IMPORTAR LOS COMPONENTE DE AREA HOSPITAL
import CompShowAreaHospitales from './area_hospitales/ShowAreaHospitales';
import CompCreateAreaHospital from './area_hospitales/CreateAreaHospital';
//IMPORTAR LOS COMPONENTES DE USUARIO
import CompShowUsuarios from './usuarios/ShowUsuarios';
import CompCreateUsuario from './usuarios/CreateUsuario';
import CompEditUsuario from './usuarios/EditUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {/*CADA RUTA QUE SE UTILIZARA CUANDO SE DEFINA EL ENRUTADOR*/}
          {/*Rutas departamento*/}
          <Route path='/Departamentos' element={<CompShowDepartamentos/>}/>
          <Route path='/Departamentos/create' element={<CompCreateDepartamento/>}/>
          <Route path='/Departamentos/edit/:Id_Departamento' element={<CompEditDepartamento/>}/>
          {/*Rutas municipio*/}
          <Route path='Municipios' element={<CompShowMunicipios/>}/>
          <Route path='/Municipios/create' element={<CompCreateMunicipio/>}/>
          <Route path='/Municipios/edit/:Id_Municipio' element={<CompEditMunicipio/>}/>
          {/*Rutas nivel*/}
          <Route path='/Niveles' element={<CompShowNiveles/>}/>
          <Route path='/Niveles/edit/:Id_Nivel' element={<CompEditNivel/>}/>
          <Route path='/Niveles/create' element={<CompCreateNivel/>}/>
          {/*Rutas hospital*/}
          <Route path='/Hospitales' element={<CompShowHospitales/>}/>
          <Route path='/Hospitales/create' element={<CompCreateHospital/>}/>
          <Route path='/Hospitales/edit/:Codigo_Habilitacion' element={<CompEditHospital/>}/>
          {/*Rutas área*/}
          <Route path='/Areas' element={<CompShowAreas/>}/>
          <Route path='/Areas/create' element={<CompCreateArea/>}/>
          <Route path='/Areas/edit/:Id_Area' element={<CompEditArea/>}/>
          {/*Rutas Area Hospital*/}
          <Route path='/Areas_Hospitales' element={<CompShowAreaHospitales/>}/>
          <Route path='/Areas_Hospitales/create' element={<CompCreateAreaHospital/>}/>
          {/*Rutas usuario*/}
          <Route path='/Usuarios' element={<CompShowUsuarios/>}/> 
          <Route path='/Usuarios/create' element={<CompCreateUsuario/>}/>
          <Route path='/Usuarios/edit/:Cedula' element={<CompEditUsuario/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
