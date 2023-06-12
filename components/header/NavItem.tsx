import { FC, useState } from 'react';

export const NavItem:FC = ():JSX.Element => {

    const [hostingIsActive, setHostingIsActive] = useState(false);
    const [domainIsActive, setDomainIsActive] = useState(false);

    const handleHostingClick = () => {
        setHostingIsActive(!hostingIsActive);
    }

    const handleDomainClick = () => {
        setDomainIsActive(!domainIsActive);
    }

  return (
    <div className='nav-item'>
        <div className='nav-item_container'>
            <div className='nav-item_container-options'>
                <div className='nav-item_options' onClick={handleHostingClick}>
                    Hosting
                    <svg className='expand' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
                </div>
                {
                    hostingIsActive &&
                    <div className='nav-item_options-items_container'>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hssd/5100.html' target='_blank'>Hosting SSD</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hw/5100.html' target='_blank'>Hosting WordPress</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hc/5100.html' target='_blank'>Hosting Correo</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hwoo/5100.html' target='_blank'>Hosting WooCommerce</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hp/5100.html' target='_blank'>Hosting Prestashop</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hm/5100.html' target='_blank'>Hosting Magento</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/he/5100.html' target='_blank'>Hosting Elástico</a>
                        <a className='nav-item_options-item' href='https://clientes.sered.net/hr/5100.html' target='_blank'>Hosting Reseller</a>
                    </div>
                }
            </div>

            <div className='nav-item_container-options'>
                <div className='nav-item_options'>
                    Dominios
                    <svg className='expand' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
                </div>
                {
                    domainIsActive &&
                    <div className='nav-item_options-items_container'>
                        <div className='nav-item_options-item'>Registrar Dominios</div>
                        <div className='nav-item_options-item'>Transferir Dominios</div>
                        <div className='nav-item_options-item'>Dominios Webempresa</div>
                        <div className='nav-item_options-item'>Buscador Whois</div>
                    </div>
                }
            </div>

            <div className='nav-item_container-options'>
                <div className='nav-item_options'>Contacto</div>
            </div>

        </div>
    </div>
  )
}
