import React from 'react';
import '../Styles/style.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Nosotros() {
  return (
    <>
      <header>
        <div className="menu logo-nav">
          <a href="index.html" className="logo">Mundo Watch</a>
          <label className="menu-icon"><span className="fas fa-bars icomin"></span></label>
          <nav className="navigation">
            <ul>
            <li>
                <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>
              </li>
              <li>
                <NavLink to="/productos" activeClassName="active">Productos</NavLink>
              </li>
              <li>
                <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
              </li>
              <li className="search-icon">
                <input type="search" placeholder="Search" />
                <label className="icon">
                  <span className="fas fa-search"></span>
                </label>
              </li>
              <li className="car">
                <a href="carrito.html">
                  <svg className="bi bi-cart3" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="columna1">
            <h2>Nosotros</h2>
            <p>
              Mundo Watch es una tienda virtual, aquí te vas a encontrar gran variedad de estilos de relojes.
            </p>
            <br />
            <p>
            Trabajamos con marcas reconocidas y sometemos cada reloj a rigurosos estándares de calidad para asegurarnos de su precisión y durabilidad.
            </p>
            <br />
            <p>
            En Mundo Watch, nos enorgullece brindar una experiencia de compra excepcional y un servicio al cliente de primer nivel. Nos esforzamos por superar tus expectativas en cada interacción y asegurarnos de tu satisfacción en cada paso del proceso.            </p>
            <br />
          </div>
          <div className="columna2">
            <img src="assets/img/nosotros.jpg" alt="" />
          </div>
        </div>
      </main>

      <footer className="footer-section">
        <div className="copyright-area">
          <div className="container-footer">
            <div className="row-footer">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2020, todos los derechos reservados <a href="index.html">PETSHOP</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Nosotros;
