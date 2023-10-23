import {FC} from 'react';
import Image from 'next/image';

interface Props {
    itemHostingIsActive: boolean;
}

export const NavSubItemsHostingDesktop:FC<Props> = ({itemHostingIsActive}):JSX.Element => {

    console.log(itemHostingIsActive);

  return (
    <div className={`nav-sub-items-desktop ${itemHostingIsActive ? 'nav-sub-items-desktop-active' : ''}`}>
        <div className='nav-sub-items-desktop_container'>
            <div className='nav-sub-items-desktop_category'>Hosting Wordpress</div>
            <div className='nav-sub-items-desktop_category'>Hosting Web</div>
            <div className='nav-sub-items-desktop_category'>Hosting Avanzado</div>
        </div>

        <div className='nav-sub-items-desktop_container'>
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hssd/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting SSD</div>
                        <div className='nav-sub-items-desktop_description'>Facilidad y sencillez para los nuevos emprendedores.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hw/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Wordpress</div>
                        <div className='nav-sub-items-desktop_description'>El Hosting más Veloz para tu sitio WordPress.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hc/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Correo</div>
                        <div className='nav-sub-items-desktop_description'>E-mail Profesional. Seguro y a la bandeja de entrada.</div>
                    </a>
                </div>
            </div>
        </div>

        <div className='nav-sub-items-desktop_container'>
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hwoo/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting WooCommerce</div>
                        <div className='nav-sub-items-desktop_description'>Abre tu tienda online sin renunciar a WordPress.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hp/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Prestashop</div>
                        <div className='nav-sub-items-desktop_description'>El CMS de las tiendas online más utilizado en España.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hm/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Magento</div>
                        <div className='nav-sub-items-desktop_description'>El CMS con posibilidades infinitas en el proceso de compra y venta online.</div>
                    </a>
                </div>
            </div>
        </div>
        
        <div className='nav-sub-items-desktop_container'>
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/he/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Elástico</div>
                        <div className='nav-sub-items-desktop_description'>Un servicio de alojamiento web a la carta.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hr/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting Reseller</div>
                        <div className='nav-sub-items-desktop_description'>El alojamiento Reseller 100% personalizable.</div>
                    </a>
                </div>
            </div>
            
            <div className='nav-sub-items-desktop_category'>
                <div className='nav-sub-items-desktop_category-item'>
                    <div className='nav-sub-items-desktop_image'>
                        <Image src='/images/wordpress-ico.svg' alt='icono de wordpress' width={30} height={30} />
                    </div>
                    <a className='nav-sub-items-desktop_text' href='https://clientes.sered.net/hseo/5100.html' target='_blank'>
                        <div className='nav-sub-items-desktop_title'>Hosting SEO</div>
                        <div className='nav-sub-items-desktop_description'>Más rápido y versátil, selecciona hasta 70 IPs.</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
