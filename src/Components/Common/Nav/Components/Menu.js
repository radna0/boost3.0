import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import Menus from '../Data/Menus.json';
import Banner from './Banner.js'
import Language from './Language.js';

function Menu() {
    
   const active = "nav_links_mobile  active ";
   const notActive = 'nav_links_mobile';

    const { t } = useTranslation();
    const location = useLocation();

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
     if(window.innerWidth <= 960){

        setClick(false);
     }else{

     }
 };

  useEffect(() =>{
    showButton();
 }, []);
 window.addEventListener('resize', showButton);

  
    return (
    <React.Fragment>
        <div className="nav_navigation_mobile_logo">
          <Banner />
           <div onClick={handleClick} className="nav_navbar">
            <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
           </div>
        </div>
        <div  className="nav_show_mobile">
         <ul className={click ? 'nav_box_mobile_active' : 'nav_box_mobile'}>
            {
                Menus.map( menu => {
                    const locationCheck = location.pathname.includes(menu.pathname) ? active : notActive 
                    
                    return (
                        <li key={menu.id} className="nav_lists_mobile" > 
                          <Link onClick={closeMobileMenu} className={locationCheck} to={menu.pathname}>{t(menu.page)}</Link>
                        </li>
                    )
                } )
            }

            <Language />
        </ul>
     </div>
    </React.Fragment>
    );
  }
  
  export default Menu;