import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './Components/Nosotros';
import Productos from './Components/Productos';
import Contacto from './Components/Contacto';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros></Nosotros>} />
          <Route path="/productos" element={<Productos></Productos>} />
          <Route path="/contacto" element={<Contacto></Contacto>} />
          <Route path="*" element={<p>No encontrado</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
