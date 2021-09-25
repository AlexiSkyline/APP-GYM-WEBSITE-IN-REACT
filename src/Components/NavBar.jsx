import React, { useState } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

export const NavBar = () => {
    
    const [ nav, setNav ] = useState( false );

    const changeBackground = () => {
        if( window.scrollY >= 50 ) {
            setNav( true );
        } else {
            setNav( false ); 
        }
    }

    window.addEventListener( 'scroll', changeBackground );
    return (
        <nav className={ nav ? 'nav ative' : 'nav' }>
            <Link to='#' className='logo'>
                <img src={ logo } alt='' />
            </Link>

            <input 
                className='menu-btn'
                type='checkbox'
                id='menu-btn' 
            />

            <label className='menu-icon' htmlFor="menu-btn">
                <span className='nav-icon'></span>
            </label>

            <ul className='menu'>
                <li><Link to='#'>Header</Link></li>
                <li><Link to='#'>FEATURES</Link></li>
                <li><Link to='#'>OFFER</Link></li>
                <li><Link to='#'>ABOUT</Link></li>
                <li><Link to='#'>CONTACT</Link></li>
            </ul>
        </nav>
    )
}
