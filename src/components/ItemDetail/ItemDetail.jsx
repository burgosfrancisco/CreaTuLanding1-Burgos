import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './ItemDetail.css'; // ✅ Importás el CSS

function ItemDetail({ producto }) {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    agregarAlCarrito(producto, cantidad);
  };

  return (
    <div className="item-detail"> {/* ✅ Clase para aplicar estilos */}
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>

      <div className="item-actions">
        <label htmlFor="cantidad">Cantidad: </label>
        <input
          id="cantidad"
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
        <button onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;
