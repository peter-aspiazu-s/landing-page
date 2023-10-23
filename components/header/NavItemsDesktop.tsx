import { FC, useState, RefObject } from 'react';
import { NavSubItemsHostingDesktop } from './NavSubItemsHostingDesktop';
import { NavSubItemsDomainDesktop } from './NavSubItemsDomainDesktop';

interface Props {
  refValue: RefObject<HTMLDivElement> | undefined;
}

export const NavItemsDesktop:FC<Props> = ({refValue}):JSX.Element => {

  const [itemHostingIsActive, setItemHostingIsActive] = useState(false);
  const [itemDomainIsActive, setItemDomainIsActive] = useState(false);

  const handleHostingClick = () => {
    setItemHostingIsActive(!itemHostingIsActive);
    setItemDomainIsActive(false);
  }
  
  // const handleDomainClick = () => {
  //   setItemDomainIsActive(!itemDomainIsActive);
  //   setItemHostingIsActive(false);
  // }

  const handleScroll = () => {
    const scrollOffset = 70; // Ajusta este valor según tus necesidades
    const targetPosition = refValue!.current!.offsetTop - scrollOffset;

    if (targetPosition !== undefined && refValue?.current) {
      refValue.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      window.scrollBy({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='nav-item-desktop'>
        <div className='nav-item-desktop_container'>
            <div className='nav-item-desktop_option' onClick={handleHostingClick}>
              Hosting
              <svg className={`expand ${itemHostingIsActive ? 'expand-transform' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg> 
            </div>
            <div className='nav-item-desktop_option'>
              Dominios
              <svg className='expand' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg> 
            </div>
            <div className='nav-item-desktop_option' onClick={handleScroll}>Contacto</div>
        </div>

        <NavSubItemsHostingDesktop itemHostingIsActive={itemHostingIsActive} />
        {
          itemDomainIsActive &&
          <NavSubItemsDomainDesktop />
        }
    </div>
  )
}
