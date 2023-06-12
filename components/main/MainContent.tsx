import {FC} from 'react';
import Image from 'next/image';

export const MainContent:FC = ():JSX.Element => {
  return (
    <div className='main-content'>
        <div className='main-content_text-atention'>IMPULSA TU NEGOCIO CON UN SITIO WEB</div>
        <div className='main-content_text-title'>Desarrollo tu sitio web profesional</div>
        <div className='main-content_text-charact'>óptimo, dinámico y diseño elegante</div>
        <div className='main-content_items'>
            <Image className='main-content_image' src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
            <div className='main-content_item-text'>Instalación en un clic</div>
        </div>
        <div className='main-content_items'>
            <Image className='main-content_image' src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
            <div className='main-content_item-text'>Soporte experto en WP 24x7</div>
        </div>
        <div className='main-content_items'>
            <Image className='main-content_image' src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
            <div className='main-content_item-text'>Garantía de 45 días</div>
        </div>
       <div className='main-content_desc'>20% de descuento</div>
        <div className='main-content_price'>Sitios web desde $250</div>
        <div className='main-content_hosting'>Incluye hosting y dominio por 1 año</div>
        <a className='main-content_button' href="https://wa.link/iq3sg8" target='_blank'>Contactar Ahora!</a>
    </div>
  )
}
