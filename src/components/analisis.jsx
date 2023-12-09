import React from 'react';
import './analisis.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Analisis() {
  // Define las constantes para los números de casos
  const casosPoliticos = 129;
  const casosNegacionismo = 79;
  const casosMisoginia = 76;
  const casosNazismo = 34;
  const casosRacismo = 20;

  return (
    <div id="analisis">
      <div id='fondoAnalisisImg'> <img src="radarPuntos.png" alt="" /></div>

      <div id="analisisHeader">
        <div id='analisisTituloSec'>
          <h4 id='tituloAnalisisRadar'>REGISTRO DE ATAQUES <br /> DE DERECHAS ARGENTINAS RADICALIZADAS
          </h4>
          <h1 id='tituloAnalisis'>RELEVAMIENTO
            2020 - 2023 </h1>
          <h4 id='analisisCasos'> 247 CASOS</h4>
          <h4 id='analisisCasosBajada'>organizados por sus narrativas de odio </h4>
        </div>
        <div id='analisisImg'></div>
      </div>

      <div id='analisisDatos'>
        <div id='datos1'>
          <h1 id='datoN1'>{casosPoliticos}</h1>
          <div className='info'>
            <div className='barra'></div>
            <p className='textAnalisis'>contra identidades políticas </p>
          </div>
        </div>
        <div id='datos2'>
          <h1 id='datoN2'>{casosNegacionismo}</h1>
          <div className='info'>
            <div className='barra'></div>
            <p className='textAnalisis'>negacionismo <br /> y apología a la dictadura </p>
          </div>
        </div>
        <div id='datos3'>
          <h1 id='datoN3'>{casosMisoginia}</h1>
          <div className='info'>
            <div className='barra'></div>
            <p className='textAnalisis'> misoginia, antifeminismo <br /> y antiLGBTINBQ+</p>
          </div>
        </div>
        <div id='datos4'>
          <h1 id='datoN4'>{casosNazismo}</h1>
          <div className='info'>
            <div className='barra'></div>
            <p className='textAnalisis'>nazismo, antisemitismo <br /> y supremacismo</p>
          </div>
        </div>
        <div id='datos5'>
          <h1 id='datoN5'>{casosRacismo}</h1>
          <div className='info'>
            <div className='barra'></div>
            <p className='textAnalisis'>racismo y xenofobia</p>
          </div>
        </div>
      </div>

      <h3 id='enConstruccion'>RADAR es una herramienta dinámica en construcción.</h3>

      <h4 id='analisisTextoFinal'>
        En esta primera etapa se visualizan hechos geolocalizables del período 2020-2023 pero se encuentra abierta a recibir reportes fuera de ese marco espacio-temporal.
      </h4>

      <h6 id='aclaracionAnalisis'>*Las narrativas no son excluyentes. Algunos casos abarcan más de una.</h6>

      <ScrollLink
        to="App"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        <button id='subir'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      </ScrollLink>
    </div>
  );
}
