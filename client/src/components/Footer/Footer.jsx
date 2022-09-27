import logo from './../../assets/img/logo-cara.svg';
import { BsWhatsapp, BsEnvelope, BsInstagram, BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
    <div class="footer-container">
        <img src={logo} width="15%" height="auto" alt="Logo carita de perro del campito" />
        <div>
            <div class="info-container">
                <i><BsWhatsapp /></i>
                <p>+54 9 11 2537 1316</p>
            </div>
            <div class="info-container">
                <i><BsEnvelope /></i>
                <p>versiagregamosmail@mail.com.ar</p>
            </div>
            <div class="info-container">
                <i><IoLocation /></i>
                <p>Estamos en Esteban Echeverr&iacute;a, Argentina</p>
            </div>
        </div>
        <div class="redes">
            <h4>¡Seguinos!</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i><BsInstagram /></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i><BsFacebook /></i></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><i><BsYoutube /></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i><BsTwitter /></i></a>
        </div>
    </div>
    <p class="derechos">El Campito Refugio. Todos los derechos reservados.</p>
</footer>
  );
}
