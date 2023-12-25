import {FC} from 'react';
import Image from 'next/image';

export const WhatsAppButton:FC = ():JSX.Element => {
  return (
    <div className='whatsapp-button'>
      <a href="https://wa.link/r7f210" target='_blank'>
        <Image 
              src='/images/whatsapp.webp'
              alt='imagen de whatsapp'
              width={80}
              height={60}
              style={{
                  cursor: 'pointer'
              }}
          />
      </a>
    </div>
  )
}
