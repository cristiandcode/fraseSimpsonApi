import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import { useEffect, useState } from "react";

function App() {
  //Declarar variables o estados

  const [frasePersonaje, setFrasePersonaje] = useState({})

  useEffect(()=>{
    console.log('prueba')
    //Pedir al servidor una frase
    consultarApi();
  }, []);

  const consultarApi = async()=>{
    //pedir la frase a la API
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    //Almacenar la respuesta en el state
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      console.log(datos[0]);
      setFrasePersonaje(datos[0])
    }
    try{
      //pedir la frase a la API
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    //Almacenar la respuesta en el state
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      console.log(datos[0]);
      setFrasePersonaje(datos[0])
    }
    }catch(error){
      console.error(error);
      //Agregar un mensaje para el usuario final
    }
  }

  return (
    <Container className="text-center my-5">
      <img src={logo} alt="Logo de los simpson" className="w-50" />
      <Frase frasePersonajeProps={frasePersonaje}></Frase>
      <Button variant="warning" className="mb-5"onClick={consultarApi}>
        Obtener frase
      </Button>
    </Container>
  );
}

export default App;