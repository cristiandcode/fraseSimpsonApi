import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";

function App() {
  return (
  
    <Container className="text-center my-5">
      <img src={logo} alt="Logo de los simpson" className="w-50" />
      <Frase></Frase>
      <Button variant="warning" className="mb-5">Obtener frase</Button>
    </Container>
   
  );
}

export default App;
