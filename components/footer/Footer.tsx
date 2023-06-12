import {FC} from 'react';

export const Footer:FC = ():JSX.Element => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_title'>Aspiazu Technology</div>
            
            <div className='footer_container-items'>
                <div className='footer_options'>
                    <div className='footer_item-title'>Hosting Confiable</div>
                    <a className='footer_item' href='https://clientes.sered.net/hssd/5100.html' target='_blank'>Hosting SSD</a>
                    <a className='footer_item' href='https://clientes.sered.net/hw/5100.html' target='_blank'>Hosting Wordpress</a>
                    <a className='footer_item' href='https://clientes.sered.net/hc/5100.html' target='_blank'>Hosting Correo</a>
                    <a className='footer_item' href='https://clientes.sered.net/hwoo/5100.html' target='_blank'>Hosting WooCommerce</a>
                    <a className='footer_item' href='https://clientes.sered.net/hp/5100.html' target='_blank'>Hosting Prestashop</a>
                    <a className='footer_item' href='https://clientes.sered.net/hm/5100.html' target='_blank'>Hosting Magento</a>
                    <a className='footer_item' href='https://clientes.sered.net/he/5100.html' target='_blank'>Hosting Elástico</a>
                    <a className='footer_item' href='https://clientes.sered.net/hr/5100.html' target='_blank'>Hosting Reseller</a>
                    <a className='footer_item' href='https://clientes.sered.net/hseo/5100.html' target='_blank'>Hosting SEO</a>
                </div>
                
                <div className='footer_options'>
                    <div className='footer_item-title'>Extras</div>
                    <a className='footer_item' href='https://clientes.sered.net/sv/5100.html' target='_blank'>Servidores</a>
                    <a className='footer_item' href='https://clientes.sered.net/vpn/5100.html' target='_blank'>VPN</a>
                    <a className='footer_item' href='https://clientes.sered.net/em/5100.html' target='_blank'>Email Marketing</a>
                    <a className='footer_item' href='https://clientes.sered.net/ssl/5100.html' target='_blank'>Certificados SSL</a>
                    <a className='footer_item' href='https://clientes.sered.net/as/5100.html' target='_blank'>Antispam</a>
                    <a className='footer_item' href='https://clientes.sered.net/hostingmexico/5100.html' target='_blank'>Hosting México</a>
                </div>
            </div>

            <div className='footer_container-copy-privacy'>
                <div className='footer_copy'>&copy; 2019 - 2023 Aspiazu Technology</div>

                <div className='footer_container-privacy'>
                    <div className='footer_privacy'>Privacidad</div>
                    <div className='footer_info'>Información legal</div>
                </div>
            </div>
        </div>
    </div>
  )
}
