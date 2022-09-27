import React from "react";
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import logo from './../../assets/img/logo.svg';

export default function Nav() {
  
  function handleNavMenu() {
    let links = document.getElementById("myLinks");
    links.classList.contains('hidden') ? links.classList.remove('hidden') : links.classList.add('hidden');
  }

  return (
    <header>
      <NavLink to='/'><img src={logo} alt="Logo del campito" height="auto" width="55%" /></NavLink>
        <nav>
            <ul class="hidden" id="myLinks">
                <li> <NavLink to='/about'> Nosotros</NavLink> </li>
                <li class="hidden">|</li>
                <li> <NavLink to='/collaborate'> Colabor&aacute;</NavLink> </li>
                <li class="hidden">|</li>
                <li> <a href='https://adoptauncamperito.com.ar/' target="_blank" rel="noreferrer"> Adopt&aacute;</a></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/volunteer'> Voluntariado</NavLink></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/project'> Proyectos</NavLink></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/contact'> Contactanos</NavLink></li>
            </ul>
        </nav>
        <i onClick={handleNavMenu}> <FaBars color="#000" size='20px' class="fas fa-bars appear fa-4xs"/></i>
    </header>
  );
}
