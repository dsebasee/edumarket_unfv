import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>EduMarket UNFV es el destino digital definitivo para estudiantes universitarios en busca de materiales de estudio. Nuestra aplicación web ofrece una experiencia de compra intuitiva y personalizada, conectando a estudiantes con una amplia gama de recursos académicos.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/?locale=es_LA"><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com/?lang=es"><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://pe.linkedin.com/"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>EduMarket UNFV</h2>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="#explore-menu"></a>Catálogo</li>
                <li><a href="#app-download"></a>EduApp</li>
                <li><a href="#footer"></a>Contacto</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>+Cerca de Ti</h2>
            <ul>
                <li>+51 987 654 321</li>
                <li>edumarket@unfv.edu.pe</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © edumarket.com - Todos los Derechos Reservados.</p>
    </div>
  )
}

export default Footer
