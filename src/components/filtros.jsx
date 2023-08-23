import React from 'react';
import './filtros.css'


export default function filtros(){


return(

 
    <div id="filtros">

      <div id='gap'></div>

      <div id='filtrosBox'>
        <div id='boxes'>
          <div id='display'>

            <h1>160</h1>
            <h4>casos de violencia</h4>
            <h3>Argentina</h3>
          </div>
          <div id='opciones'>

            <div id='filtroTipo'>

              <div class='tipos'>
    
             <div class='tipo1Icon'></div>
                   <h4>tipo 1</h4>
                <label class="switch">
                
                   <input type="checkbox" />
                   <span class="slider"></span>
                </label>   
               </div>
               
              <div class='tipos'>
              <div class='tipo2Icon'></div>
                <h4>tipo 2</h4>
                <label class="switch">
          
                <input type="checkbox" />
                <span class="slider"></span>
                </label>   
              </div>
              
              <div class='tipos'>            
              <div class='tipo3Icon'></div>
                 <h4>tipo 3</h4>
                <label class="switch">

                 <input type="checkbox" />
                  <span class="slider"></span>
                  </label>   
              </div>

            </div>

             

          </div>
       </div>
    
    
       <div id='mapGap'>
        
       </div>


      </div>

      <div id='gap2'></div>

      <div id='filtrosBox2'>

        <div id='rangeSlider'></div>

        <div id='botonBajar'>
         <button> <a href='#main2'>1</a></button>
        </div>

      </div>


    </div>
);
}

