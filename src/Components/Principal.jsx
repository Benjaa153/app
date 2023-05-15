import React from "react";
import "../Styles/principal.css";
import ImgLogoReact from "../Img/logo512.png"
import Header from "./Header";
const Principal = () => {
  return (
    <>
      <div>Este es el contenido Principal el numero es</div>
      <img
         alt="img Logo react hola"
          href="www.facebook.com"
            className="imgLogo-rojo"
              src={ImgLogoReact}
    ></img>
    <a
        href="http://www.facebook.com"
        target="_blank"
      >Facebook
      </a> 
    <img
         alt="img Logo react hola"
          href="https://es-la.facebook.com/"
            className="imgLogo-negro"
              src={ImgLogoReact}
    ></img> 
    <img
         alt="img Logo react hola"
          href="www.facebook.com"
            className="imgLogo-verde"
              src={ImgLogoReact}
    ></img> 
    <img
         alt="img Logo react hola"
          href="www.facebook.com"
            className="imgLogo-azul"
              src={ImgLogoReact}
    ></img> 
    </>
  );
};

export default Principal;
