import React from 'react';

function Home() {
  return (
    <>
      <header>
        <div className="menu logo-nav">
          <a href="index.html" className="logo">Mundo Watch</a>
          <label className="menu-icon"><span className="fas fa-bars icomin"></span></label>
          <nav className="navigation">
            <ul>
              <li><a href="nosotros.html">Nosotros</a></li>
              <li><a href="productos.html">Productos</a></li>
              <li><a href="contacto.html">Contacto</a></li>
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

      <div className="slider">
        <ul>
          <li><img src="assets/img/slide1.jpg" alt="..." /></li>
          <li><img src="assets/img/slide2.jpg" alt="..." /></li>
          <li><img src="assets/img/slide3.jpg" alt="..." /></li>
        </ul>
      </div>

      <div className="container-index">
        <div className="container-circulos">
          <div className="container-imagen">
            <img src="assets/img/alimentos.jpg" className="circulo" />
            <h2>Alimentos</h2>
          </div>
          <div className="container-imagen">
            <img src="assets/img/ropa.jpg" className="circulo" />
            <h2>Ropa</h2>
          </div>
          <div className="container-imagen">
            <img src="assets/img/juguetes.jpg" className="circulo" />
            <h2>Juguetes</h2>
          </div>
        </div>

        <div className="ver-todo">
          <a className="button" href="productos.html">Ver todos</a>
        </div>

        <div className="contenedor-columna">
          <div className="columna1">
            <h2>SOBRE Mundo Watch</h2>
            <p>En Mundo Watch nuestro equipo trabaja constantemente con energía y entusiasmo para nuestros clientes y sus mascotas. Nos encanta lo que hacemos y eso se refleja no solo en nuestros servicios, sino también en la forma en que construimos relaciones con nuestros clientes.</p>
          </div>
          <div className="columna2">
            <img src="assets/img/index.png" alt="" />
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="copyright-area">
          <div className="container-footer">
            <div className="row-footer">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p><a href="index.html">Mundo Watch</a></p>
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

export default Home;
