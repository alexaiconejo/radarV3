import React from 'react';
import './navbar.css';


export default function Navbar(){
 return (
  <div className="heading">
   <div id="logo">
 <img id= "logoImg" src="../src/assets/logo.png" alt="" />  
 </div> 

 <div id="menu">

<div id="menuPCBox">
   <ul id="menuPC">
        <li><a href="">reporta</a></li>
        <li><a href="">notas</a></li>
        <li><a href="">nosotrxs</a></li>
    </ul>
</div>
   
 
    <div id="botonMenu" >
    <a href="#main2"><img id= "menuImg" src="../src/assets/menu.png" alt="" />
</a>

     </div>
 

 </div>
   

   

  </div>
 );
}