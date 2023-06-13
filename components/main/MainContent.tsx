import {FC, useEffect, useRef, Dispatch, SetStateAction} from 'react';

interface Props {
  setValuePosition: Dispatch<SetStateAction<number>>
}

export const MainContent:FC<Props> = ({setValuePosition}):JSX.Element => {

  const targetRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (targetRef.current) {
        const { top } = targetRef.current.getBoundingClientRect();
        setValuePosition(top);
      }
    };

    updatePosition();

    window.addEventListener('scroll', updatePosition);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };

  },[]);

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
        <div className='main-content_price'>Sitios web desde $240</div>
        <div className='main-content_hosting'>💼Nuestros precios accesibles te permiten tener presencia en línea sin comprometer la calidad. Además, incluimos <strong>hosting y dominio por 1 año.</strong></div>
        <a 
          className='main-content_button' 
          href="https://wa.link/iq3sg8" 
          target='_blank'
          ref={targetRef}
        >Contactar Ahora!</a>
    </div>
  )
}
