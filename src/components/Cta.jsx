import React from 'react'
import './css/Cta.css'
import fotoCta from '../assets/b42a8b72-55d8-454b-9d28-bd11ae4ec3de.jfif'

const Cta = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '3816671884';
        const message = encodeURIComponent('Hola, quiero comprar una entrada para Save The Date');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className='container cta'>
            <div className="cta-wrapper">
                <div className="imagen-cta">
                    <img src={fotoCta} alt="" />
                </div>
                <div className="texto-cta">
                    <h2>Compra tus entradas</h2>
                    <p>El sábado 3 de mayo prepárate para una experiencia que sacudirá tus sentidos. Beats intensos, visuales hipnóticos y una energía que no se detiene hasta el amanecer. ¿Estás listo para perderte en el ritmo?
                        Compra tu anticipada ahora y asegura tu lugar en la pista.</p>
                    <button onClick={handleWhatsAppClick}>Comprar Entradas</button>
                </div>
            </div>
        </div>
    )
}

export default Cta