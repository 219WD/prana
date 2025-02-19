import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./css/ContactSection.css";

export default function SeccionContacto() {
  return (
    <div className="fondo-contacto texto-blanco">
      <div className="contenedor">
        {/* Encabezado principal */}
        <div className="grid-principal">
          <div>
            <h1 className="titulo-principal">
              ESCRÍBENOS
              <br />UN MENSAJE
            </h1>
          </div>

          {/* Información de contacto */}
          <div className="grid-info">
            <div>
              <h2 className="subtitulo">UBICACIÓN</h2>
              <p>Calle Siempre Viva 743</p>
              <p>San Miguél de Tucumán</p>
              <p>Argentina</p>
            </div>

            <div>
              <h2 className="subtitulo">CONTACTO</h2>
              <a href="mailto:prana.info23@gmail.com" className="enlace">prana.info23@gmail.com</a>
              <a href="tel:0215887266" className="enlace">381 667 1884</a>
              <a href="tel:0845887876" className="enlace">381 657 4462</a>
            </div>

            <div>
              <h2 className="subtitulo">HORARIO DE ATENCIÓN</h2>
              <div className="horario">
                <p>Lunes a Viernes:</p><p>08:45 a 17:00</p>
                <p>Sábados:</p><p>09:00 a 14:00</p>
                <p>Domingos:</p><p>Cerrado</p>
                <p>Feriados:</p><p>Cerrado</p>
              </div>
            </div>

            <div>
              <h2 className="subtitulo">REDES SOCIALES</h2>
              <div className="redes">
                <a href="#" className="icono-red">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="icono-red">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="icono-red">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de ayuda */}
        <div className="ayuda">
          <p>
            Estamos disponibles para ayudarte con cualquier consulta sobre tu compra o un producto en línea
            (Lun - Vie de 08:45 a 16:30). Puedes llamarnos al 381 657 4462 o enviarnos un correo electrónico,
            garantizando una respuesta en 12 horas. Nuestra tienda en línea está cerrada los fines de semana.
          </p>
        </div>

        {/* Sección de boletín */}
        <div className="boletin">
          <h3>ÚNETE A NUESTRA COMUNIDAD</h3>
          <input type="email" placeholder="Correo electrónico" className="input-correo" />
        </div>

        {/* Enlaces de pie de página */}
        <div className="enlaces-pie">
          <div>
            <a href="#" className="enlace">SOBRE NOSOTROS</a>
            <a href="#" className="enlace">PREGUNTAS FRECUENTES</a>
            <a href="#" className="enlace">CONTÁCTANOS</a>
          </div>
          <div>
            <a href="#" className="enlace">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="enlace">POLÍTICA DE ENVÍOS</a>
            <a href="#" className="enlace">TÉRMINOS DE USO</a>
          </div>
          <div>
            <a href="#" className="enlace">CÓMO COMPRAR</a>
            <a href="#" className="enlace">RASTREA TU PEDIDO</a>
            <a href="#" className="enlace">DEVOLUCIONES Y CAMBIOS</a>
          </div>
        </div>
        <div className="dosDiecinueve">
            <hr />
            <p>© <a href="https://www.instagram.com/219labs">219Labs</a>. Todos los derechos reservados. 2025</p>
        </div>
      </div>
    </div>
  );
}
