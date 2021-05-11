import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
   
      <Navbar />
      <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
        </Wrapper>
      <Header />
    </>
  );
}

export default App;
