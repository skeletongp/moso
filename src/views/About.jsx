import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import negocio from "../assets/negocio.png"

const About = () =>(
    <>
    <section id="about" className="bg-light text-dark mb-0">
        <div className="container">
            <h2 className="text-uppercase text-center text-primary">Sobre mí</h2>
            <div className="ed-grid ">
            <img src={negocio} alt="" className="ed-grid m-auto small"/>   
            </div>
            
            <hr className="star-light mb-5" />
            <div className="row">
                <div className="col-lg-5 ml-auto">
                    <p className="lead bioText" >Estudiante de Ingeniería en Software, con más de cinco años de experiencia en la asistencia a estudiantes universitarios de todas las carreras para el desarrollo y la sustentación de todo tipo de proyectos, especialmente aquellos que
                        requieren creatividad.</p>
                </div>
                <div className="col-lg-5 mr-auto">
                    <p className="lead bioText">Me apasiona aprender cada día más y que dicho aprendizaje pueda reflejarse a través de mi trabajo, mi pasión. Soy muy apegado a las normas del habla y las reglas ortográficas. Mis áreas favoritas son las que tienen que ver con lectura
                        y/o tecnología.</p>
                </div>
            </div>
            <div className="m-center mt-8">
                <h1 id="contacto" className="contactText m-auto" >mis redes</h1>
                <ul className="redes m-auto">
                    <li className="list-inline-item"><a className="btn btn-outline-primary bg-dark text-light btn-social text-center rounded-circle" role="button" href="https://www.facebook.com/Ismael9409"><i className="fa fa-facebook fa-fw" href=""></i></a></li>
                    <li className="list-inline-item"><a className="btn btn-outline-primary bg-dark text-light btn-social text-center rounded-circle" role="button" href="https://www.instagram.com/ismaeldigitador/"><i className="fa fa-google-plus fa-fw fa fa-instagram" href=""></i></a></li>
                    <li className="list-inline-item"><a className="btn btn-outline-primary text-light btn-social bg-dark  text-center rounded-circle" role="button" href="mailto:contrerasismael0@gmail.com"><i className="fa fa-google-plus fa-fw fas fa-at" href=""></i></a></li>
                    <li className="list-inline-item"><a className="btn btn-outline-primary bg-dark text-light btn-social text-center rounded-circle" role="button" href="https://api.whatsapp.com/send?phone=18493153337"><i className="fa fa-whatsapp fa-fw" href="https://api.whatsapp.com/send?phone=18493153337"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    </>
)
export default About