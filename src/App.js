import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./views/Menu"
import Inicio from "./views/Inicio"
import Servicios from "./views/Servicios"
import About from './views/About';

function App() {
  return (
    
 <Router>
   <Menu />
    <Switch >
      
      <Route exact path="/" component = {() => <Inicio />} />
      <Route path="/servicios" component = {() =>(<div className="ed-grid m-grid-3"> {<Servicios />} </div> ) } />
      <Route path="/about" component = {() =><About />} />
    </Switch>

 </Router>
  );
}

export default App;
