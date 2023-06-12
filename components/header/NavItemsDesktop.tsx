import { FC, useState } from 'react';
import { NavSubItemsHostingDesktop } from './NavSubItemsHostingDesktop';
import { NavSubItemsDomainDesktop } from './NavSubItemsDomainDesktop';

export const NavItemsDesktop:FC = ():JSX.Element => {

  const [itemHostingIsActive, setItemHostingIsActive] = useState(false);
  const [itemDomainIsActive, setItemDomainIsActive] = useState(false);

  const handleHostingClick = () => {
    setItemHostingIsActive(!itemHostingIsActive);
    setItemDomainIsActive(false);
  }
  
  const handleDomainClick = () => {
    setItemDomainIsActive(!itemDomainIsActive);
    setItemHostingIsActive(false);
  }

  return (
    <div className='nav-item-desktop'>
        <div className='nav-item-desktop_container'>
            <div className='nav-item-desktop_option' onClick={handleHostingClick}>
              Hosting
              <svg className='expand' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg> 
            </div>
            <div className='nav-item-desktop_option'>
              Dominios
              <svg className='expand' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg> 
            </div>
            <div className='nav-item-desktop_option'>Contacto</div>
        </div>

        {
          itemHostingIsActive &&
          <NavSubItemsHostingDesktop />
        }
        {
          itemDomainIsActive &&
          <NavSubItemsDomainDesktop />
        }
    </div>
  )
}
