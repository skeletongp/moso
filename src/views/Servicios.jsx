import React from "react"

const servicios= [
{
    "id": 1,
    "nombre": "Digitación",
    "image": "https://i.pinimg.com/474x/74/ce/23/74ce234e98303b4125cf2dd7647e0d63.jpg",
    "precio": 20,
    "descripcion": "Digitación, diagramación y formato de todo tipo de documentos: Word, Excel, Powerpoint, Visio, Etc."
}, 
{ 
    "id": 2,
    "nombre": "Proyectos",
    "image": "http://ismaeldigitador.com/assets/img/portfolio/proyect.jpg?h=b28275a89292b88a441d1accf56eabcc",
    "precio": 200,
    "descripcion": "Desarrollamos propuestas para proyectos académicos de diferentes carreras."
},
{ 
    "id": 3,
    "nombre": "Programación",
    "image": "https://haycanal.com/uploads/noticias/14949/Cualenguaje_programacion.jpg",
    "precio": 2000,
    "descripcion": "Trabajos de Programación Estructurada, Orientada a Objetos y Base de Datos."
}]

const Servicio =() =>
servicios.map(s=> 
<>
<article class="s-shadow-bottom">
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src={s.image} />
    </div>
    <div class="s-bg-white s-pxy-2">
        <h3>{s.nombre}</h3>
        <p class="s-mb-0">{s.descripcion}</p>
    </div>
    <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        <div class="s-10 s-mr-1">
       
        </div>
        <div class="button s-to-right">A partir de RD$ {s.precio}</div>
    </footer>
</article>
</>
)
export default Servicio