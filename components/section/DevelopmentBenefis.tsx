import {FC} from 'react';
import Image from 'next/image';

export const DevelopmentBenefis:FC = ():JSX.Element => {
  return (
    <div className='development-benefis'>
        <Image 
            src='/images/undraw_static_website_re_x70h.svg' 
            alt='imgen de desarrollo web' 
            layout="responsive"
            width={500}
            height={500}
            objectFit='cover'
            objectPosition='center' />

        <div className='development-benefis_container'>
            <div className='development-benefis_text'>✅ Experiencia y conocimientos: Nuestro equipo de Desarrolladores Web cuenta con años de experiencia en la creación de sitios web exitosos. Te brindaremos soluciones personalizadas y adaptadas a tus necesidades específicas.</div>

            <div className='development-benefis_text'>💡 Creatividad y diseño único: Creamos sitios web con un diseño elegante y moderno que captura la atención de tus visitantes. Utilizamos las últimas tendencias y tecnologías para asegurarnos de que tu sitio web se destaque en el mercado.</div>
        
            <div className='development-benefis_text'>🌐 Presencia en línea: En el mundo digital actual, tener una presencia en línea sólida es crucial para el éxito de tu negocio. Nuestros Desarrolladores Web te ayudarán a construir una presencia en línea efectiva y profesional.</div>

            <div className='development-benefis_text'>🔧 Funcionalidad y rendimiento: Nos aseguramos de que tu sitio web no solo se vea bien, sino que también funcione de manera óptima. Optimizamos la velocidad de carga, la navegación intuitiva y la compatibilidad con dispositivos móviles para garantizar una experiencia de usuario excepcional.</div>
        
            <div className='development-benefis_text'>💼 Impulsa tus ventas: Un sitio web bien diseñado y funcional puede ayudarte a atraer más clientes y aumentar tus ventas. Nuestros Desarrolladores Web se enfocan en crear una estructura y flujos de usuario que conviertan visitantes en clientes satisfechos.</div>
        
            <div className='development-benefis_text'>🔒 Seguridad y confiabilidad: Nos preocupamos por la seguridad de tu sitio web y la protección de los datos de tus clientes. Implementamos medidas de seguridad sólidas para garantizar que tu sitio web esté protegido contra amenazas y ataques cibernéticos.</div>
        
            <div className='development-benefis_text'>📈 Escalabilidad y crecimiento: Nuestros Desarrolladores Web construyen sitios web escalables que se pueden adaptar al crecimiento de tu negocio. Podrás agregar nuevas funcionalidades y características a medida que tu negocio se expanda.</div>
        </div>
    </div>
  )
}
