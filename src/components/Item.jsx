import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
