import React from 'react'
import VimeoPlayer from './VimeoPlayer'
import './css/Videos.css'
import Logo from '../assets/Logo.svg'

const Videos = () => {
  return (
    <div className='container videos'>
      <VimeoPlayer />
      <div className="videos-text">
        <img src={Logo} alt="Logo Prana" className='logo-videos' />
        <p>
          "Prana" atrae a una audiencia diversa
          y apasionada, compuesta por amantes
          de la música, buscadores espirituales
          y aquellos que buscan una experiencia
          más allá de lo convencional. Nuestros
          asistentes están abiertos a nuevas
          experiencias y buscan marcas que
          compartan su visión de autenticidad,
          creatividad y conexión.
        </p>
      </div>
      <VimeoPlayer />
    </div>
  )
}

export default Videos
