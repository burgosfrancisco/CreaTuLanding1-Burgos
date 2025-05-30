import './Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";

function Cart() {
  const { carrito } = useContext(CartContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <button onClick={() => window.location.href = '/'}>Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.map((prod) => (
        <div key={prod.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
          <p>Producto: {prod.nombre}</p>
          <p>Precio: ${prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Subtotal: ${prod.precio * prod.cantidad}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>

      {!mostrarFormulario ? (
        <button onClick={() => setMostrarFormulario(true)}>Finalizar compra</button>
      ) : (
        <FinalizarCompra />
      )}
    </div>
  );
}

export default Cart;
