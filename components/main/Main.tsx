import {FC, Dispatch, SetStateAction} from 'react';
import Image from 'next/image';
import { MainContent } from './MainContent';

interface Props {
  setValuePosition: Dispatch<SetStateAction<number>>
}

export const Main:FC<Props> = ({setValuePosition}):JSX.Element => {

  return (
    <div className='main'>
      <div className='main_container'>
        <div className='main_container-img'>
          <div>
            <Image 
              src='/images/main-image.webp'
              alt='Imagen de desarrollador web'
              layout="responsive"
              width={500}
              height={500}
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div>
        
        <MainContent setValuePosition={setValuePosition} />
      </div>
    </div>
  )
}
