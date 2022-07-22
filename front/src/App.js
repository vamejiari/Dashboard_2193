import logo2 from './resources/asgestion2.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// IMPORTAR LOS COMPONENTES DEPARTAMENTO
import CompShowDepartamentos from './departamentos/ShowDepartamentos.js';
import CompCreateDepartamento from './departamentos/CreateDepartamento.js';
import CompEditDepartamento from './departamentos/EditDepartamento.js';
// IMPORTAR LOS COMPONENTES MUNICIPIO
import CompShowMunicipios from './municipios/ShowMunicipios.js';
import CompCreateMunicipio from './municipios/CreateMunicipio.js';
import CompEditMunicipio from './municipios/EditMunicipio.js';
// IMPORTAR LOS COMPONENTES DE NIVEL
import CompShowNiveles from './niveles/ShowNiveles.js';
import CompEditNivel from './niveles/EditNivel.js';
import CompCreateNivel from './niveles/CreateNivel.js';
// IMPORTAR LOS COMPONENTES DE HOSPITAL
import CompShowHospitales from './hospitales/ShowHospitales.js';
import CompCreateHospital from './hospitales/CreateHospital';
import CompEditHospital from './hospitales/EditHospital';
// IMPORTAR LOS COMPONENTES DE AREA
import CompShowAreas from './areas/ShowAreas';
import CompCreateArea from './areas/CreateArea';
import CompEditArea from './areas/EditArea';
// IMPORTAR LOS COMPONENTE DE AREA HOSPITAL
import CompShowAreaHospitales from './area_hospitales/ShowAreaHospitales';
import CompCreateAreaHospital from './area_hospitales/CreateAreaHospital';
// IMPORTAR LOS COMPONENTES DE USUARIO
import CompShowUsuarios from './usuarios/ShowUsuarios';
import CompCreateUsuario from './usuarios/CreateUsuario';
import CompEditUsuario from './usuarios/EditUsuario';
// IMPORTAR  LOS COMPONENTES DE VARIABLE PRODUCCION
import CompShowVariablesProduccion from './variable_producciones/ShowVariablesProduccion';
import CompCreateVariableProduccion from './variable_producciones/CreateVariableProduccion';
import ComEditVariableProduccion from './variable_producciones/EditVariableProduccion';
// IMPORTAR LOS COMPONENTE DE UVR
import CompShowUVR from './uvr/ShowUVR';
import CompCreateUVR from './uvr/CreateUVR';
import CompEditUVR from './uvr/EditUVR';
// IMPORTAR LOS COMPONENTES DE VARIABLES PRODUCCION HOSPITAL
import CompShowVariablesProduccionHospitales from './variables_produccion_hospital/ShowVariablesProduccionHospitales';
import CompCreateVariableProduccionHospital from './variables_produccion_hospital/CreateVariableProduccionHospital';
// IMPORTAR LOS COMPONENTES DE LAS METAS DE PRODUCCION
import CompShowMetasProduccion from './metas_produccion/ShowMetasProduccion';
import CompCreateMetaProduccion from './metas_produccion/CreateMetaProduccion';
import CompEditMetaProduccion from './metas_produccion/EditMetaProduccion';
// IMPORTAR COMPONENTES DE VIGENCIA
import CompShowVigencias from './vigencias/ShowVigencias';
import CompCreateVigencia from './vigencias/CreateVigencia';
import CompEditVigencia from './vigencias/EditVigencia';
// IMPORTAR COMPONENTES PERIODO
import CompShowPeriodos from './periodos/ShowPeriodos';
import CompCreatePeriodo from './periodos/CreatePeriodo';
import CompEditPeriodo from './periodos/EditPeriodo';
// IMPORTAR COMPONENTES NOVEDADES
import CompShowNovedades from './novedades/ShowNovedades';
import CompCreateNovedad from './novedades/CreateNovedad';
import CompEditNovedad from './novedades/EditNovedad';
// IMPORTAR COMPONENTES INDICADORES
import CompShowIndicadores from './indicadores/ShowIndicadores';
import CompEditIndicador from './indicadores/EditIndicador';
import CompCreateIndicador from './indicadores/CreateIndicador';
// IMPORTAR COMPONENTES VARIABLES CALIDAD
import CompShowVariablesCalidad from './variables_calidad/ShowVariablesCalidad';
import CompCreateVariableCalidad from './variables_calidad/CreateVariablesCalidad';
import CompEditVariableCalidad from './variables_calidad/EditVariableCalidad';
// IMPORTAR COMPONENTES VARIABLES CALIDAD HOSPITAL
import CompShowVariablesCalidadHospitales from './variables_calidad_hospital/ShowVariablesCalidadHospitales';
import CompCreateVariableCalidadHospital from './variables_calidad_hospital/CreateVariableCalidadHospital';
// IMPORTAR COMPONENTES INDICADORES CALIDAD HOSPITAL
import CompShowIndicadoresCalidadHospitales from './indicadores_calidad_hospitales/ShowIndicadoresCalidadHospitales';
import CompCreateIndicadorCalidadHospital from './indicadores_calidad_hospitales/CreateIndicadorCalidadHospital';
// IMPORTAR METAS INDICADORES CALIDAD
import CompShowMetasIndicadoresCalidad from './metas_indicadores_calidad/ShowMetasIndicadoresCalidad';
import CompCreateMetaIndicadorCalidad from './metas_indicadores_calidad/CreateMetaIndicadorCalidad';
import CompEditMetaIndicadorCalidad from './metas_indicadores_calidad/EditMetaIndicadorCalidad';
// IMPORTAR COMPONENTES REGISTROS CALIDAD
import CompShowRegistrosCalidad from './registros_calidad/ShowRegistrosCalidad';
import CompCreateRegistroCalidad from './registros_calidad/CreateRegistrosCalidad';
import CompEditRegistroCalidad from './registros_calidad/EditRegistroCalidad';
// IMPORTAR COMPONENTES REGISTROS INDICADOR CALIDAD
import CompShowRegistrosIndicadorCalidad from './registros_indicador_calidad/ShowRegistrosIndicadorCalidad';
import CompCreateRegistroIndicadorCalidad from './registros_indicador_calidad/CreateRegistroIndicadorCalidad';
import CompEditRegistroIndicadorCalidad from './registros_indicador_calidad/EditRegistroIndicadorCalidad';
// IMPORTAR COMPONENTES CONSOLIDADOS INDICADOR CALIDAD
import CompShowConsolidadoIndicadorCalidad from './consolidados_indicador_calidad/ShowConsolidadosIndicadoresCalidad';
import CompCreateConsolidadoIndicadorCalidad from './consolidados_indicador_calidad/CreateConsolidadoIndicadorCalidad';
import CompEditConsolidadoIndicadorCalidad from './consolidados_indicador_calidad/EditConsolidadoIndicadorCalidad';
// IMPORTAR COMPONENTES CONSOLIDADOS CALIDAD
import CompShowConsolidadosCalidad from './consolidados_calidad/ShowConsolidadosCalidad';
import CompCreateConsolidadoCalidad from './consolidados_calidad/CreateConsolidadoCalidad';
import CompEditConsolidadoCalidad from './consolidados_calidad/EditConsolidadoCalidad';
// IMPORTAR COMPONENTES REGISTROS PRODUCCION
import CompShowRegistrosProduccion from './registros_produccion/ShowRegistrosProduccion';
import CompCreateRegistroProduccion from './registros_produccion/CreateRegistroProduccion';
import CompEditRegistroProduccion from './registros_produccion/EditRegistroProduccion';
// IMPORTAR COMPONENTES CONSOLIDADOS PRODUCCION
import CompShowConsolidadosProduccion from './consolidados_produccion/ShowConsolidadosProduccion';
import CompCreateConsolidadoProduccion from './consolidados_produccion/CreateConsolidadoProduccion';
import CompEditConsolidadoProduccion from './consolidados_produccion/EditConsolidadoProduccion';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* CADA RUTA QUE SE UTILIZARA CUANDO SE DEFINA EL ENRUTADOR */}
          {/* Rutas departamento */}
          <Route path="/Departamentos" element={<CompShowDepartamentos />} />
          <Route path="/Departamentos/create" element={<CompCreateDepartamento />} />
          <Route path="/Departamentos/edit/:Id_Departamento" element={<CompEditDepartamento />} />
          {/* Rutas municipio */}
          <Route path="Municipios" element={<CompShowMunicipios />} />
          <Route path="/Municipios/create" element={<CompCreateMunicipio />} />
          <Route path="/Municipios/edit/:Id_Municipio" element={<CompEditMunicipio />} />
          {/* Rutas nivel */}
          <Route path="/Niveles" element={<CompShowNiveles />} />
          <Route path="/Niveles/edit/:Id_Nivel" element={<CompEditNivel />} />
          <Route path="/Niveles/create" element={<CompCreateNivel />} />
          {/* Rutas hospital */}
          <Route path="/Hospitales" element={<CompShowHospitales />} />
          <Route path="/Hospitales/create" element={<CompCreateHospital />} />
          <Route path="/Hospitales/edit/:Codigo_Habilitacion" element={<CompEditHospital />} />
          {/* Rutas área */}
          <Route path="/Areas" element={<CompShowAreas />} />
          <Route path="/Areas/create" element={<CompCreateArea />} />
          <Route path="/Areas/edit/:Id_Area" element={<CompEditArea />} />
          {/* Rutas Area Hospital */}
          <Route path="/Areas_Hospitales" element={<CompShowAreaHospitales />} />
          <Route path="/Areas_Hospitales/create" element={<CompCreateAreaHospital />} />
          {/* Rutas usuario */}
          <Route path="/Usuarios" element={<CompShowUsuarios />} />
          <Route path="/Usuarios/create" element={<CompCreateUsuario />} />
          <Route path="/Usuarios/edit/:Cedula" element={<CompEditUsuario />} />
          {/* Rutas Variable Produccion */}
          <Route path="/Variables_Produccion" element={<CompShowVariablesProduccion />} />
          <Route path="/Variables_Produccion/create" element={<CompCreateVariableProduccion />} />
          <Route path="/Variables_Produccion/edit/:Id_Variable_Produccion" element={<ComEditVariableProduccion />} />
          {/* Rutas UVR */}
          <Route path="/UVRS" element={<CompShowUVR />} />
          <Route path="/UVRS/create" element={<CompCreateUVR />} />
          <Route path="/UVRS/edit/:Id_UVR" element={<CompEditUVR />} />
          {/* Rutas variable produccion hospital */}
          <Route path="/Variables_Produccion_Hospitales" element={<CompShowVariablesProduccionHospitales />} />
          <Route path="/Variables_Produccion_Hospitales/create" element={<CompCreateVariableProduccionHospital />} />
          {/* Rutas Metas de producción */}
          <Route path="/Metas_Produccion" element={<CompShowMetasProduccion />} />
          <Route path="/Metas_Produccion/create" element={<CompCreateMetaProduccion />} />
          <Route path="/Metas_Produccion/edit/:Codigo_Habilitacion/:Id_Variable_Produccion/:Anio" element={<CompEditMetaProduccion />} />
          {/* Rutas Vigencias */}
          <Route path="/Vigencias" element={<CompShowVigencias />} />
          <Route path="/Vigencias/create" element={<CompCreateVigencia />} />
          <Route path="/Vigencias/edit/:Id_Vigencia" element={<CompEditVigencia />} />
          {/* Rutas Periodos */}
          <Route path="/Periodos" element={<CompShowPeriodos />} />
          <Route path="/Periodos/create" element={<CompCreatePeriodo />} />
          <Route path="/Periodos/edit/:Id_Periodo" element={<CompEditPeriodo />} />
          {/* Rutas Novedades */}
          <Route path="/Novedades" element={<CompShowNovedades />} />
          <Route path="/Novedades/create" element={<CompCreateNovedad />} />
          <Route path="/Novedades/edit/:Id_Novedad" element={<CompEditNovedad />} />
          {/* Rutas Indicadores */}
          <Route path="/Indicadores_Calidad" element={<CompShowIndicadores />} />
          <Route path="/Indicadores_Calidad/create" element={<CompCreateIndicador />} />
          <Route path="/Indicadores_Calidad/edit/:Id_Indicador" element={<CompEditIndicador />} />
          {/* Rutas Variable Calidad */}
          <Route path="/Variables_Calidad" element={<CompShowVariablesCalidad />} />
          <Route path="/Variables_Calidad/create" element={<CompCreateVariableCalidad />} />
          <Route path="/Variables_Calidad/edit/:Id_Variable_Calidad" element={<CompEditVariableCalidad />} />
          {/* Rutas Variable Calidad Hospital */}
          <Route path="/Variables_Calidad_Hospitales" element={<CompShowVariablesCalidadHospitales />} />
          <Route path="/Variables_Calidad_Hospitales/create" element={<CompCreateVariableCalidadHospital />} />
          {/* Rutas Indicador Calidad Hospital */}
          <Route path="/Indicadores_Calidad_Hospitales" element={<CompShowIndicadoresCalidadHospitales />} />
          <Route path="/Indicadores_Calidad_Hospitales/create" element={<CompCreateIndicadorCalidadHospital />} />
          {/* Rutas Meta Indicador Calidad */}
          <Route path="/Metas_Indicadores_Calidad" element={<CompShowMetasIndicadoresCalidad />} />
          <Route path="/Metas_Indicadores_Calidad/create" element={<CompCreateMetaIndicadorCalidad />} />
          <Route path="/Metas_Indicadores_Calidad/edit/:Id_Meta_Indicador" element={<CompEditMetaIndicadorCalidad />} />
          {/* Rutas Registros calidad */}
          <Route path="/Registros_Calidad" element={<CompShowRegistrosCalidad />} />
          <Route path="/Registros_Calidad/create" element={<CompCreateRegistroCalidad />} />
          <Route path="/Registros_Calidad/edit/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Periodo" element={<CompEditRegistroCalidad />} />
          {/* Rutas Registros Indicador Calidad */}
          <Route path="/Registros_Indicadores_Calidad" element={<CompShowRegistrosIndicadorCalidad />} />
          <Route path="/Registros_Indicadores_Calidad/create" element={<CompCreateRegistroIndicadorCalidad />} />
          <Route path="/Registros_Indicadores_Calidad/edit/:Codigo_Habilitacion/:Id_Indicador/:Id_Periodo" element={<CompEditRegistroIndicadorCalidad />} />
          {/* Rutas Consolidados Indicador Calidad */}
          <Route path="/Consolidados_Indicadores_Calidad" element={<CompShowConsolidadoIndicadorCalidad />} />
          <Route path="/Consolidados_Indicadores_Calidad/create" element={<CompCreateConsolidadoIndicadorCalidad />} />
          <Route path="/Consolidados_Indicadores_Calidad/edit/:Codigo_Habilitacion/:Id_Indicador/:Id_Vigencia" element={<CompEditConsolidadoIndicadorCalidad />} />
          {/* Rutas Consolidados Calidad */}
          <Route path="/Consolidados_Calidad" element={<CompShowConsolidadosCalidad />} />
          <Route path="/Consolidados_Calidad/create" element={<CompCreateConsolidadoCalidad />} />
          <Route path="/Consolidados_Calidad/edit/:Codigo_Habilitacion/:Id_Variable_Calidad/:Id_Vigencia" element={<CompEditConsolidadoCalidad />} />
          {/* Rutas Registros Produccion */}
          <Route path="/Registros_Produccion" element={<CompShowRegistrosProduccion />} />
          <Route path="/Registros_Produccion/create" element={<CompCreateRegistroProduccion />} />
          <Route path="/Registros_Produccion/edit/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Periodo" element={<CompEditRegistroProduccion />} />
          {/* Rutas consolidados produccion */}
          <Route path="/Consolidados_Produccion" element={<CompShowConsolidadosProduccion />} />
          <Route path="/Consolidados_Produccion/create" element={<CompCreateConsolidadoProduccion />} />
          <Route path="/Consolidados_Produccion/edit/:Codigo_Habilitacion/:Id_Variable_Produccion/:Id_Vigencia" element={<CompEditConsolidadoProduccion />} />

          <Route path="/Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      <footer className= "text-center text-dark">
        <div id="div-bg">
          <div className="container p-4 pb-4 col-lg-3 col-md-2 mb-3 mb-md-0">
            <img src={logo2} className="btn" alt="Logo" width="300" href="https://asgestion.com.co/" />
            <section className="p-2 mb-1">
              <a className="btn btn-floating m-1" id='fb' href="https://www.facebook.com/AsgestionSalud/" role="button"><i className="fa-brands fa-facebook-f"></i></a>
              <a className="btn btn-floating m-1" id='tw' href="https://twitter.com/AsgestionSalud?t=JrHV1Rt9g5I2gvTh-L3s3A&s=09" role="button"><i className="fab fa-twitter" /></a>
              <a className="btn btn-floating m-1" id='ig' href="https://www.instagram.com/asgestionsalud/?hl=es" role="button"><i className="fab fa-instagram" /></a>
              <a className="btn btn-floating m-1" id='ln' href="https://co.linkedin.com/company/asgestionsalud" role="button"><i className="fab fa-linkedin-in" /></a>
              <a className="btn btn-floating m-1" id='yt' href="https://www.youtube.com/channel/UC2BP6oR7TO9INjtv1zZA4mA" role="button"><i className="fab fa-youtube" /></a>
            </section>
            <div className="text-center p-0 pb-2">
              © Desarrollado por:
              <div>
                <a className="text-dark" href="https://asgestion.com.co/">Asgestión S.A.S</a>
              </div>
              2022
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
