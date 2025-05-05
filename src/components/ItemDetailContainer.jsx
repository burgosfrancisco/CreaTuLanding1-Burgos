import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/productos';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductoPorId(itemId).then(setItem);
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
