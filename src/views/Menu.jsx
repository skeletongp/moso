import React from "react"
import book from "../assets/book.png"
import { NavLink } from "react-router-dom";

class Menu extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        menu: false
      };
      this.toggleMenu = this.toggleMenu.bind(this);
    }
  
    toggleMenu(){
      this.setState({ menu: !this.state.menu })
    }
  
    render() {
  
    const show = (this.state.menu) ? "show" : "" ;
  
    return (
  <>
            
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom m-mt-0">
        
            <NavLink to="/" className=" ">  
             <img src={book} alt="logo" className="App-logo m-10 "/>
            </NavLink>
           
        <button className="navbar-toggler ml-auto" type="button" onClick={ this.toggleMenu }>
             <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav ml-auto">
              <NavLink className="nav-item nav-link" exact to="/" activeClassName="active" onClick={ this.toggleMenu }> Inicio</NavLink>
              <NavLink className="nav-item nav-link" to="/servicios" activeClassName="active" onClick={ this.toggleMenu }> Servicios</NavLink>
              <NavLink className="nav-item nav-link" to="/about" activeClassName="active" onClick={ this.toggleMenu }> Sobre mí</NavLink>
              <NavLink className="nav-item nav-link" to="/contact" activeClassName="active" onClick={ this.toggleMenu }> Contacto</NavLink>
            
          </div>
        </div>
      </nav>
   </>
    );

   
    }
  }
  export default Menu