import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header >
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
        </div>
        </Header>
      </Router>
    </div>
  );
}

export default App;
