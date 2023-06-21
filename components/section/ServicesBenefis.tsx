import {FC} from 'react';
import Image from 'next/image';

export const ServicesBenefis:FC = ():JSX.Element => {
  return (
    <div className='services-benefis'>
      <div className='services-benefis_service'> 
        <div className='services-benefis_container-img'>
          <Image 
            src='/images/undraw_work_together_re_5yhn.svg'
            alt='imgen de sitio web' 
            layout="responsive"
            width={500}
            height={500}
            objectFit='cover'
            objectPosition='center' />
        </div>

        <div className='services-benefis_container-text'>
          <div className='services-benefis_title'>✅ Landing Pages impactantes</div>
          <div className='services-benefis_description'>Nuestro equipo de expertos en Landing Pages creará páginas de aterrizaje que capturarán la atención de tus visitantes y los guiarán hacia la acción que deseas que realicen. Maximiza tus conversiones y obtén resultados tangibles.</div>
        </div>
      </div>


      <div className='services-benefis_service'>  
        <div className='services-benefis_container-img service-benefis_order'>
          <Image 
            src='/images/undraw_heatmap_uyye.svg' 
            alt='imgen de sitio web' 
            layout="responsive"
            width={500}
            height={500}
            objectFit='cover'
            objectPosition='center' />
        </div>

        <div className='services-benefis_container-text'>
          <div className='services-benefis_title'>💻 Sitios web personalizados</div>
          <div className='services-benefis_description'>Diseñamos y desarrollamos sitios web a medida que reflejan la identidad y los valores de tu marca. Desde sitios web informativos hasta portafolios en línea, nos aseguramos de que tu presencia en línea sea profesional, atractiva y efectiva.</div>
        </div>
      </div>
      
      
      <div className='services-benefis_service'>  
        <div className='services-benefis_container-img'>
          <Image  
            src='/images/undraw_web_shopping_re_owap.svg' 
            alt='imgen de sitio web' 
            layout="responsive"
            width={500}
            height={500}
            objectFit='cover'
            objectPosition='center' />
        </div>

        <div className='services-benefis_container-text'>
          <div className='services-benefis_title'>🛒 Tiendas en línea de éxito</div>
          <div className='services-benefis_description'>¿Quieres vender tus productos en línea? Nuestro equipo de expertos en e-commerce te ayudará a crear una tienda en línea que no solo se vea increíble, sino que también ofrezca una experiencia de compra fluida y segura para tus clientes.</div>
        </div>
      </div>


    </div>
  )
}
