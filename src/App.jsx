import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra';
import Navbar from './components/Navbar/Navbar'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <> {/* ✅ Usamos un fragment para envolver */}
      <Navbar /> {/* ✅ Renderiza el Navbar */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finalizar-compra" element={<FinalizarCompra />} />
      </Routes>
    </>
  );
}

export default App;