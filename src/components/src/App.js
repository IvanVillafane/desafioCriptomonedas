import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Productos from "./components/Productos";
import NavBarnuevo from "./components/NavBarNuevo";
import aplicandoGrid from "./components/AplicandoGrid";




function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div>
        <NavBarnuevo/>
        <Productos/>
        <AplicandoGrid/>
      </div>
        {/* <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div> */}
      </Router>

      <div>
        <NavBarnuevo/>
        <Productos/>
        <AplicandoGrid/>
      </div>
      <div>
      </div>
      
    </>
  );
}

export default App;