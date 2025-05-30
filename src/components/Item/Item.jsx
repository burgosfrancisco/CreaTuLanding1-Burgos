import './Item.css';
import { Link } from 'react-router-dom';

function Item({ id, nombre, precio }) {
  return (
    <div className='cards'>
      <h2>{nombre || "Sin stock"}</h2>
      <p>Precio: ${precio || "Sin stock"}</p>
      {nombre && (
        <Link to={`/detalle/${id}`}>
          <button className='boton'>Ver detalle</button>
        </Link>
      )}
    </div>
  );
}

export default Item;
