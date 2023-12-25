import {FC} from 'react';

interface Props {
  category: string;
  oldPrice?: number;
  newPrice?: number;
  domainAmount: number;
  acountEmail?: string;
  gigas: string;
  ram: string;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  textFive?: string;
  textSix?: string;
  textSeven?: string;
  textDB?: string;
  buttonLink: string;
}

export const ServiceCard:FC<Props> = ({
  category, 
  oldPrice, 
  newPrice, 
  domainAmount, 
  acountEmail, 
  gigas, 
  ram, 
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  textSix,
  textSeven,
  textDB,
  buttonLink
}):JSX.Element => {
  return (
    <div className='service-card'>
        <div className='service-card_category'>{category}</div>
        <div className='service-card_container'>
            <div className='service-card_desc'>20% DESCUENTO</div>
            {oldPrice && <div className='service-card_old-prince'>Precio normal ${oldPrice}</div>}
            {newPrice && <div className='service-card_new-prince'>${newPrice}</div>}
            <div className='service-card_item'><strong>1 Dominio gratis</strong> el primer año</div>
            <div className='service-card_item'>
              <strong>Hosting</strong> para {domainAmount > 1 ? `${domainAmount} dominios` : `${domainAmount} dominio`}
            </div>
            <div className='service-card_item'>
              <strong>{acountEmail}</strong> 
              {acountEmail !== '25' ? 'Cuentas de Email ilimitadas' : ' Cuentas de Email'}
            </div>
            <div className='service-card_item'><strong>{gigas}</strong> de Almacenamiento NVMe</div>
            <div className='service-card_item'><strong>{ram}</strong> de <strong>RAM Garantizado</strong></div>
            <div className='service-card_item'>{textOne}</div>
            <div className='service-card_item'>{textTwo}</div>
            <div className='service-card_item'>{textThree}</div>
            <div className='service-card_item'>{textFour}</div>
            <div className='service-card_item'>{textFive}</div>
            <div className='service-card_item'>{textSix}</div>
            <div className='service-card_item'><strong>{textSeven}</strong></div>
            <div className='service-card_item'><strong>{textDB}</strong></div>
            <a 
              className='service-card_button'
              href={buttonLink}
              target='_blank'
            >
              CONTRATAR
            </a>
        </div>
    </div>
  )
}
