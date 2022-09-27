import { NavLink } from 'react-router-dom';
import image from './../../assets/img/img-principal.jpg';

export default function Home() {

  return (
    <main>
        <section>
            <article>
                <div class="content">
                    <h1>El campito Refugio</h1>
                    <h2>VALE LA PENA INVOLUCRARSE</h2>
                    <p>Ac&aacute; va una pequeña bajada lorem ipsum lorem ipsum.</p>
                </div>
                <img src={image} alt="Perro con humano" height="auto" width="50%" />
            </article>
        </section>
        <section class="box-container">
            <div class="box background-grey">
                <NavLink to='/'><h3>Veterinaria y Unidad de Cuidados Intensivos</h3></NavLink>
            </div>
            <div class="box background-orange">
                <NavLink to='/'><h3>Comportamiento y Sociabilizaci&oacute;n</h3></NavLink>
            </div>
            <div class="box background-purple">
                <NavLink to='/donate'><h3>Donaciones y Padrinazgos</h3></NavLink>
            </div>
            <div class="box background-light-blue">
                <NavLink to='/volunteer'><h3>Quiero ser Voluntario</h3></NavLink>
            </div>
            <div class="box background-green">
                <NavLink to='/'><h3>El Campito Escolar</h3></NavLink>
            </div>
            <div class="box background-pink">
              <a href='https://adoptauncamperito.com.ar/' target="_blank" rel="noreferrer"><h3>Quiero Adoptar</h3></a>
            </div>
            <div class="box background-light-orange">
                <NavLink to='/'><h3>Visitas</h3></NavLink>
            </div>
            <div class="box background-orange">
                <NavLink to='/contact'><h3>Comunicaci&oacute;n y Redes Sociales</h3></NavLink>
            </div>
        </section>
    </main>

  )
}
