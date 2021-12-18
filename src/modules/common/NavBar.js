import React from 'react';
import './MainTemplate.css'
import { Link } from 'react-router-dom'
import { NavBarData } from './NavBarData';
import * as GiIcons from "react-icons/gi";

function NavBar() {

    return (
        <nav className='nav-menu'>
            <div className='nav-menu-top'>
                <div style={{ fontSize: '30px' }}>
                    <GiIcons.GiPalmTree color='#72b352' />
                </div>
            </div>
            <ul className='nav-menu-items'>
                {NavBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default NavBar;
