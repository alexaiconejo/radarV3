import React from 'react';
import './verificado.css'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useEffect } from 'react';







export default function Verificado() {

    useEffect(() => {
        window.scrollTo(0, 0); // Desplázate automáticamente hacia arriba cuando se carga la página
      }, []);

    return (


        <><div className="verificado">

       
            <div id='verificadoTextContainer'>
                <h6 className='verficadoText'>Este caso fue verificado por una fuente directa. <br /> No hay notas relacionadas.
                </h6>

            </div>


            <button className="verificadoBotonVolver" ><a href="https://ra-dar.com.ar/" target="_blank" rel="noopener noreferrer"><h2 className='verificadoBotonText'>VOLVER</h2></a></button>

        </div>
        
       </>


        
    
        
    );
}

