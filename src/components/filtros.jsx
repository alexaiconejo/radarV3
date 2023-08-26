import React from 'react';
import './filtros.css'
<<<<<<< HEAD


export default function filtros(){
=======
import { Switch, Select, MenuItem } from "@mui/material";



export default function filtros({caseCount}){
>>>>>>> preProdu


return(

 
    <div id="filtros">

      <div id='gap'></div>

<<<<<<< HEAD
      <div id='filtrosBox'>
        <div id='boxes'>
          <div id='display'>

            <h1>160</h1>
            <h4>casos de violencia</h4>
            <h3>Argentina</h3>
=======

      <div id='filtrosBox'>
        <div id='boxes'>
        <div id='botonFiltros'>
          <button id='plegable'><h6 id='cerrarFiltros'>x</h6>
          <h6>Filtros</h6>
          
        </button>
        </div>

          <div id='display'>
          <h4>casos:</h4>
            <h1 id='cantCasos'>{caseCount}</h1>
            
>>>>>>> preProdu
          </div>
          <div id='opciones'>

            <div id='filtroTipo'>

              <div class='tipos'>
    
<<<<<<< HEAD
             <div class='tipo1Icon'></div>
                   <h4>tipo 1</h4>
                <label class="switch">
                
                   <input type="checkbox" />
                   <span class="slider"></span>
                </label>   
=======
             <div class='tipo3Icon'></div>
                   <h4 class='tipoClass'>violencia física, sexual y atentados contra la vida </h4>
                   <Switch  defaultChecked></Switch>
>>>>>>> preProdu
               </div>
               
              <div class='tipos'>
              <div class='tipo2Icon'></div>
<<<<<<< HEAD
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
=======
                <h4 class='tipoClass'>insultos, hostigamientos y amenazas </h4>
                <Switch  defaultChecked></Switch> 
              </div>
              
              <div class='tipos'>            
              <div class='tipo1Icon'></div>
                 <h4 class='tipoClass'>Ataque a símbolos, murales y lugares </h4>
                <Switch  defaultChecked ></Switch>

              </div>


            </div>
            <div class='componente' >
                <h4>componentes</h4>

  <Select
       labelId="modoFiltrado"
       id="simple-select"


  >
<MenuItem value={0}>Todos</MenuItem>
    <MenuItem value={1}>negacionismo y apología a la dictadura</MenuItem>
    <MenuItem value={2}>contra identidades políticas</MenuItem>
    <MenuItem value={3}>nazismo, antisemitismo y supremacismo</MenuItem>
    <MenuItem value={4}>misoginia, antifeminismo y antiLGBTINBQ+</MenuItem>
    <MenuItem value={5}>racismo y xenofobia</MenuItem>




  </Select>


              </div>
>>>>>>> preProdu

             

          </div>
       </div>
    
    
       <div id='mapGap'>
        
<<<<<<< HEAD
=======

>>>>>>> preProdu
       </div>


      </div>

      <div id='gap2'></div>

<<<<<<< HEAD
      <div id='filtrosBox2'>

        <div id='rangeSlider'></div>

        <div id='botonBajar'>
         <button> <a href='#main2'>1</a></button>
        </div>

      </div>
=======
>>>>>>> preProdu


    </div>
);
}

