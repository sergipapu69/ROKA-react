import React from 'react'
import '../css/Navbar.css';
import Logo from '../assets/img/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (

    <>
    <div className='topBar'>
        <div className='topTopBar'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='navBarIcons'/>
            <img src={Logo} alt="Logo-Roka" className='Logo'/>
        <FontAwesomeIcon icon={faCartShopping} className='navBarIcons' />
        </div>

        <div className='navBar'>
            <div className="categoryItem">
                <a href="">Inicio</a>
            </div>
            <div className="categoryItem">
                <a href="">Nosotros</a>
            </div>
            <div className="categoryItem">
                <a href="">Productos</a>
            </div>
            <div className="categoryItem">
                <a href="">Contactanos</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar