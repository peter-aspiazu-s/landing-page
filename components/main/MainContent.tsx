import {FC} from 'react';
import Image from 'next/image';

export const MainContent:FC = ():JSX.Element => {
  return (
    <div className='main-content'>
        <div className='main-content_text-atention'>IMPULSA TU NEGOCIO CON UN SITIO WEB</div>
        <div className='main-content_text-title'>Desarrolla tu sitio web profesional</div>
        <div className='main-content_text-charact'>óptimo, dinámico y diseño elegante</div>
        <div className='main-content_items'>
          <div className='main-content_item-icon'>🚀</div>
          <div className='main-content_item-text'>Desarrollo personalizado: Crearemos un sitio web a medida utilizando la potencia de Next.js, brindándote un rendimiento excepcional y una experiencia de usuario única.</div>
        </div>
        <div className='main-content_items'>
          <div className='main-content_item-icon'>✅</div>
          <div className='main-content_item-text'>Garantía de calidad: Estamos comprometidos con la excelencia en nuestro trabajo. Nos aseguramos de que tu sitio web cumpla con los más altos estándares de calidad.</div>
        </div>
        <div className='main-content_items'>
          <div className='main-content_item-icon'>🎁</div>
          <div className='main-content_item-text'>¡Obtén un 20% de descuento! Aprovecha esta oferta exclusiva y obtén tu sitio web por menos.</div>
        </div>
        <div className='main-content_price'>Sitios web desde $250</div>
        <div className='main-content_hosting'>💼Nuestros precios accesibles te permiten tener presencia en línea sin comprometer la calidad. Además, incluimos <strong>hosting y dominio por 1 año.</strong></div>
        <a className='main-content_button' href="https://wa.link/iq3sg8" target='_blank'>Contactar Ahora!</a>
    </div>
  )
}
