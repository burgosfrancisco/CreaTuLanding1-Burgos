import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="barra">
        <Link to="/" className="logo-link">
          <img
            src="https://img.freepik.com/psd-gratis/ilustracion-icono-cumpleanos-dibujada-mano_23-2151630913.jpg?semt=ais_hybrid&w=740"
            alt="Logo"
            className="logo-img"
          />
        </Link>
        <ul className="nav-bar">
          <li><Link to="/">Tortas</Link></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;
