import {FC} from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceLogo } from './ServiceLogo';

export const Services:FC = ():JSX.Element => {
  return (
    <div className='services'>
        <div className='services_container'>
            <div className='services_title'>Elige el servicio que necesitas</div>
            <div className='services_subtitle'>Desarrollamos la interfaz ideal para cada necesidad.</div>

            <div className='services_container-card'>
                <ServiceCard 
                    category='Landing Page' 
                    oldPrice={200}
                    newPrice={160}
                    domainAmount={1}
                    acountEmail='25'
                    gigas='6 GB'
                    ram='1 GB'
                    textOne='Botón de llamado a la acción'
                    textTwo='Lista de características o beneficios'
                    textThree='Testimonios o reseñas'
                    textFour='Datos de contacto'
                    textFive='Información adicional relevante'
                    textSix='Soporte técnico y asistencia'
                    buttonLink='https://wa.link/gy97zg'
                />

                <ServiceCard 
                    category='Sitio Web' 
                    oldPrice={350}
                    newPrice={280}
                    domainAmount={6}
                    gigas='15 GB'
                    ram='1 GB'
                    textOne='Diseño personalizado'
                    textTwo='Diseño responsivo'
                    textThree='Desarrollo frontend y backend'
                    textFour='Optimización SEO (Básico)'
                    textFive='Formulario de contacto'
                    textSix='Soporte técnico y asistencia'
                    buttonLink='https://wa.link/h47d87'
                    />
            
                <ServiceCard 
                    category='E-Commerce' 
                    oldPrice={800}
                    newPrice={640}
                    domainAmount={16}
                    gigas='40 GB'
                    ram='1 GB'
                    textOne='Plataforma de comercio electrónico'
                    textTwo='Diseño responsivo y experiencia de usuario optimizada'
                    textThree='Catálogo de productos'
                    textFour='Carrito de compras y proceso de pago'
                    textFive='Gestión de inventario y seguimiento de pedidos'
                    textSix='Soporte técnico y asistencia'
                    buttonLink='https://wa.link/4ya0jq'
                />
            </div>

            <ServiceLogo />
        </div>
    </div>
  )
}
