import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="containerCart">
      <Link to="/cart" className="cart-link">
        <img
          className="carrito"
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          alt="Carrito"
        />
        <span className="cart-count">({cantidadTotal})</span>
      </Link>
    </div>
  );
}

export default CartWidget;