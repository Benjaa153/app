import Header from "./Header";
import Principal from "./Principal";
import Foooter from "./Foooter";
import "bootstrap/dist/css/bootstrap.min.css";
import BotonFace from "./BotonFace";
import imgEncendida from '../Img/lamparaEncendida.jpg'
import imgApagada from '../Img/lamparaApagada.png'

import { useState } from "react";

function App() {
  const [encender, setEncender] = useState(false);

  const [contador, setContador] = useState(1);

  const [nombre, setNombre] = useState(["Benjamin", "Orellana", "Edad: 20"]);

  const incrementar2 = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(1);
  };

  const Prender = () => {
    setEncender(true);
  };
  const Apagar = () => {
    setEncender(false);
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={incrementar2}>
        aumentar
      </button>

      <button className="btn btn-danger" onClick={decrementar}>
        restar
      </button>

      <button className="btn btn-warning" onClick={reiniciar}>
        reiniciar
      </button>

      {
                      // if
        contador > 10 ?
        <Header 
        nombre={nombre}
        ></Header> 
        
        : <Foooter
          contador = {contador}
          nombre = {nombre}
        ></Foooter>

      }

      <h1>NUMERO : {contador}</h1>

      {
        encender == false ? <img src={imgApagada}></img> : <img src={imgEncendida}></img>
      }
      <button onClick={Prender}>Encender</button>
      <button onClick={Apagar}>Apagar</button>
    </div>

  );
}

export default App;
