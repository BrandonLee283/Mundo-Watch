import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Productos from './Components/Productos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/nosotros" element={<Nosotros></Nosotros>} />
          <Route path="/contacto" element={<Contacto></Contacto>} />
          <Route path="/productos" element={<Productos></Productos>} />
          <Route path="*" element={<p>No encontrado</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
