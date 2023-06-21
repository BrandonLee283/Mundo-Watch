import emailjs from '@emailjs/browser';
import React, { useRef, useEffect, useState } from 'react'
import '../Styles/style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Carrito() {
  const navigate = useNavigate()
  const form = useRef();
  const location = useLocation();
  const arrayData = location.state?.arrayData || [];
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState("");

  console.log(arrayData);
  var sumaTotal = 0

  useEffect(() => {
    fetch('http://localhost:3001/estados')
      .then(response => response.json())
      .then(data => {
        setEstados(data)
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener las estados:', error);
      });

  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h6yu2sm', 'template_4xufr69', form.current, 'bK1Bg8yRxKN1BqIA5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <header>
        <div className="menu logo-nav">
          <a href="index.html" className="logo">Mundo watch</a>
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
              <li className="car"><a href="carrito.html">
                <svg className="bi bi-cart3" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container-carrito">
          <h2>Realizar Compra</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="contenido titulo">
              <label htmlFor="cliente" className="">Cliente :</label>
              <input type="text" className="form-control" id="cliente" name="cliente" placeholder="Ingrese su nombre" onKeyPress={event => event.charCode === 32 || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)} onPaste={event => event.preventDefault()} required />
            </div>
            <div className="contenido titulo">
              <label htmlFor="email" className="">Correo :</label>
              <input type="email" className="form-control" id="correo" name="correo" placeholder="Ingrese su correo" required />
            </div>


            <textarea

              name="message"
              cols="40"
              rows="5"
              value={arrayData
                .map(
                  (producto) =>
                    `${producto.cantidad} ${producto.nombre_producto} $${producto.precio_producto} c/u`
                )
                .join('\n')}
              readOnly
              required />

            <div className="" id="loaders">
              <img id="cargando" src="assets/img/cargando.gif" width="220" alt="Cargando" />
            </div>
            <select name="state" className='Estados' onChange={(e) => setEstado(e.target.value)}>
              <option >Seleccione un municipio de algun estado</option>
              {estados.map((estado) => {
                return (
                  <option key={estado.id_estado} value={estado.municipio}>{estado.municipio}</option>
                )
              })}

            </select>
            <div className="botones-envio">
              <a onClick={() => navigate('/')} className="button" id="volver">Seguir comprando</a>
              <input type="submit" className="button" id="procesar-compra" value="Realizar compra" />
            </div>
          </form>
        </div>
      </main>
      <footer className="footer-section">
        <div className="copyright-area">
          <div className="container-footer">
            <div className="row-footer">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2020, todos los derechos reservados <a href="index.html">Mundo Watch</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
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

export default Carrito;
