import React from 'react';
import './reporta.css'


export default function reportaForm(){

<<<<<<< HEAD
=======
function Submit(e){
  const formEle = document.querySelector("#formSheet")
  e.preventDefault
  console.log("submitted")
  const formData = new FormData(formEle)
fetch("https://script.google.com/macros/s/AKfycbySxucaKUPO4gM1WPoknylJuhqL4ElNwvgyDUfzVypgXlTX3u3CtrdBAuwSpB2DQ2O8/exec", {method: "POST", body: formData})
}

>>>>>>> preProdu

return(

 
    <div id="reportaForm">
      

      <div id="form">

        <div id='formHeader'>
<<<<<<< HEAD
        <h1 id='titulo'>Relevamiento nacional de ataques de derechas radicalizadas
</h1>
        <h4>*este reporte no implica la realización de ningún tipo de denuncia institucional sino un aporte a un relevamiento colaborativo con fines periodísticos. 
        <br /> **no publicaremos ninguna información sin tu autorización </h4>
        </div>

        <form action="formData.php" method="post">
=======
        <h1 id='tituloForm'>Relevamiento nacional de ataques de derechas radicalizadas
</h1>
        <h4 id='bajadaForm'>*este reporte no implica la realización de ningún tipo de denuncia institucional sino un aporte a un relevamiento colaborativo con fines periodísticos. 
        <br /> **no publicaremos ninguna información sin tu autorización </h4>
        </div>

        <form id='formSheet' onSubmit={(e)=>Submit(e)}>
>>>>>>> preProdu
          <div class='FormInput'>
            <label htmlFor="email"></label>
            <h3>Email</h3>

            <br />
<<<<<<< HEAD
            <input className="formInput" type="email" name="mail" id="email" required placeholder="Escribe tu email" />
=======
            <input className="formInput" type="email" name="Mail" id="mail" required placeholder="Escribe tu email" />
>>>>>>> preProdu
          </div>
          <br />

          <div>
<<<<<<< HEAD
           <label class='FormInput' htmlFor="titulo">
=======
           <label class='formInput' htmlFor="titulo">
>>>>>>> preProdu
              <h3>¿Qué pasó?</h3>
              <p>una descripción lo más detallada del hecho</p>
           </label>
            <input
             className="formInput" 
              type="text"
<<<<<<< HEAD
              name="tituloHecho"
=======
              name="Titulo"
>>>>>>> preProdu
              id="titulo"
              required
              placeholder="Escribe tu respuesta"
              maxLength="30"
            />
          </div>
          <br />
<<<<<<< HEAD
          <div class='FormInput'>
=======
          <div class='formInput'>
>>>>>>> preProdu
            <label htmlFor="fecha">
              <h3>¿Cuándo pasó?</h3>
              <p>si no es posible indicar fecha exacta, incorporar una referencia de tiempo en la descripción del hecho</p>
            </label>
            <input 
             className="formInput" type="date" name="fechaHecho" id="fecha" required />
          </div>
<br />
<div>
  <label htmlFor="lugar">
    <h3>¿Dónde pasó?</h3>
    <p>Si es posible, insertar enlace de googlemaps o referencia geográfica</p>
  </label>
<<<<<<< HEAD
  <input  className="formInput"  type="text" name="lugarHecho" id="lugar" placeholder="Escribe aquí" />
=======
  <input  className="formInput"  type="text" name="Lugar" id="lugar" placeholder="Escribe aquí" />
>>>>>>> preProdu
</div>
<br />
<div>
  <label htmlFor="agresor">
    <h3>¿qué sabes sobre la(s) persona(s) agresora(s)?
</h3>
  </label>
  <input
    className="formInput" 
     type="text"
<<<<<<< HEAD
    name="agresorHecho"
    id="agresor"
    value=""
=======
    name="Agresor"
    id="agresor"
>>>>>>> preProdu
    placeholder="Escribe aquí"
    required
  />
</div>
<div>
  <label htmlFor="intervencion">
    <h3>¿hubo intervención policial? ¿alguna respuesta estatal o judicial? ¿cuál? 
</h3>
  </label>
  <input
   className="formInput" 
    type="text"
<<<<<<< HEAD
    name="intervencionHecho"
    id="contexto"
    value=""
=======
    name="Intervencion"
    id="intervencion"
>>>>>>> preProdu
    placeholder="Escribe aquí"
  />
</div>
<div>
  <label htmlFor="archivos">
    <h3>Archivos relacionados</h3>
    <p>Fotos, videos o documentos relativos al hecho.</p>
  </label>
  <br />
<<<<<<< HEAD
  <input  className="formInput"  type="file" name="archivosHecho" id="archivos" multiple />
=======
  <input  className="formInput"  type="file" name="Archivos" id="archivos" multiple />
>>>>>>> preProdu
</div>
<div>
  <label htmlFor="comentarios">
    <h3>Comentarios adicionales
</h3>
  </label>
  <input
   className="formInput" 
    type="text"
<<<<<<< HEAD
    name="comentariosHecho"
    id="observaciones"
    value=""
=======
    name="Comentarios"
    id="observaciones"
>>>>>>> preProdu
    placeholder="Escribe aquí"
  />
</div>

<br />
<div>
  <input type="submit" value="ENVIAR" />
</div>

        </form>
      </div>
    </div>
);
}

