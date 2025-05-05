import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <h2 style={{ color: '#6c63ff', margin: 0 }}>MiTienda</h2>

      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Inicio</Link>
        </li>
        <li>
          <Link to="/categoria/ropa" style={{ textDecoration: 'none', color: '#333' }}>Ropa</Link>
        </li>
        <li>
          <Link to="/categoria/calzado" style={{ textDecoration: 'none', color: '#333' }}>Calzado</Link>
        </li>
        <li>
          <Link to="/categoria/accesorios" style={{ textDecoration: 'none', color: '#333' }}>Accesorios</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
