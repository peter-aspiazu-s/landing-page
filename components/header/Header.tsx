import {FC, useState} from 'react';
import { NavItem } from './NavItem';
import { NavItemsDesktop } from './NavItemsDesktop';

export const Header:FC = ():JSX.Element => {

    const [menuIsActive, setMenuIsActive] = useState(false);

    const handleClickMenu = () => {
        setMenuIsActive(!menuIsActive);
    }

  return (
    <div className='header'>
        <div className='header_logo-container'>
            <div className='header_logo-text'>Aspiazu Technology</div>
        </div>

        <div className='header_menu-button'>
            <button className='header-button' onClick={handleClickMenu}>
                <div className={menuIsActive ? 'header-line-one header-line-one-transform' : 'header-line-one'}></div>
                <div className={menuIsActive ? 'header-line-two header-line-two-opacity' : 'header-line-two'}></div>
                <div className={menuIsActive ? 'header-line-three header-line-three-transform' : 'header-line-three'}></div>
            </button>
        </div>

        {
            menuIsActive &&
            <NavItem />
        }

        {/* DESKTOP MENU */}
        <NavItemsDesktop />

    </div>
  )
}