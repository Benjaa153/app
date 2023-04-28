import React from 'react'
import ImgLogo from '../Img/logo512.png'
import '../Styles/principal.css'
const Principal = () => {

  return (
    <>
    <div>Este es el contenido Principal el numero es</div>
    <img
        className='img1-negro'
        src={ImgLogo}
    ></img>
     <img
        className='img1-rojo'

        src={ImgLogo}
    ></img>
     <img
        src={ImgLogo}
    ></img>
     <img
        className='img1-verde'
     
        src={ImgLogo}
    ></img>
    </>

  )
}

export default Principal