import React, { useEffect, useState } from 'react';
import '../Styles/style.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        return response.json();
      })
      .then(data => {
        setProductos(data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const agregarAlCarrito = (idProducto) => {
    const producto = productos.find((producto) => producto.id_producto === idProducto);
  if (producto) {
    const productoEnCarrito = carrito.find((item) => item.id_producto === idProducto);
    if (productoEnCarrito) {
      const carritoActualizado = carrito.map((item) => {
        if (item.id_producto === idProducto) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    console.log('Producto agregado al carrito:', producto);
  }
    // const producto = productos.find(producto => producto.id_producto === idProducto);
    // if (producto) {
    //   setCarrito([...carrito, producto]);
    //   console.log('Producto agregado al carrito:', producto);
    // }
  };

  const desaparecerCarro= ()=>{
    const carro = document.getElementById('carrito')
    if (carro.style.display === 'none') {
      carro.style.display = 'block';
    } else if (carro.style.display === 'block') {
      carro.style.display = 'none';
    }
    
  }
  const eliminarDelCarrito = (idProducto) => {
    const nuevoCarrito = carrito.filter(producto => producto.id_producto !== idProducto);
    setCarrito(nuevoCarrito);
  };
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
                <svg className="bi bi-cart3" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={desaparecerCarro}>
                  <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <div id="carrito" className="dropdown-menu" style={{display:'block'}}>
                  <table id="lista-carrito" className="table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrito.map((producto) => (
                        <tr key={producto.id_producto}>
                          <td><img src={`./assets/img/${producto.imagen_prodcuto}`} alt="Producto" style={{width:'40px',height:'40px'}}/></td>
                          <td>{producto.nombre_producto}</td>
                          <td>{producto.precio_producto * producto.cantidad}</td>
                          <td>{producto.cantidad}</td>

                          <td><button onClick={() => eliminarDelCarrito(producto.id_producto)}>Eliminar</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <a href="#" id="vaciar-carrito" className="button-vaciar">Vaciar Carrito</a>
                  <a href="#" id="procesar-pedido" className="button-pedido">Procesar Compra</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="modal" id="modal">
          <div className="modal-content">
            <img src="" alt="" className="modal-img" id="modal-img" />
          </div>
          <div className="modal-boton" id="modal-boton">X</div>
        </div>

        <div className="container-productos" id="lista-productos">
          {productos.map((producto) => (
            <div className="card" key={producto.id_producto}>
              <img src={`../assets/img/${producto.imagen_prodcuto}`} className="card-img" alt="Producto" />
              <h3>{producto.nombre_producto}</h3>
              <p>$<span className="precio">{producto.precio_producto}</span></p>
              <p>Disponibles: <small>{producto.stock_producto}</small></p>
              <button className="button agregar-carrito" onClick={() => agregarAlCarrito(producto.id_producto)} >Comprar</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-section">
        <div className="copyright-area">
          <div className="container-footer">
            <div className="row-footer">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2020, todos los derechos reservados <a href="index.html">PETSHOP</a></p>
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

export default Productos;
