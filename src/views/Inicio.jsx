import React from "react"
import logo from "../assets/book.png"
import { Link } from "react-router-dom";

 const Inicio = () => (
   <>
        <div className="card ed-grid m-grid-2 p-4" >
            <img src="http://ismaeldigitador.com/assets/img/portfolio/logo.jpg?h=5fab2ade0ac3b94c1efc2bd5c3c21908" className="card-img-top" alt="logo" />
            
            <div className="card-body ed-grid">
                        <h2 className="t-2 card-text center ed-grid m-auto">Bienvenidos a este pequeño espacio web donde compartiré informaciones acerca de mí y de mi trabajo. Aquí podrás ver ejemplos de lo que hago, además de tener acceso a los canales de contacto. </h2>
                   
            </div>
        
        </div>
   </>
)
export default Inicio


