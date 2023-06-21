import {FC} from 'react';
import { DevelopmentBenefis } from './DevelopmentBenefis';
import { ServicesBenefis } from './ServicesBenefis';

export const ArticleInfo:FC = ():JSX.Element => {
  return (
    <div className='article-info'>
        <div className='article-info_container'>
            <div className='article-info_title'>Beneficios</div>
            <div className='article-info_description'>🚀 Impulsa tu negocio en línea con nuestros Desarrolladores Web profesionales 🚀</div>

            <DevelopmentBenefis />

            <ServicesBenefis />
        </div>
    </div>
  )
}
