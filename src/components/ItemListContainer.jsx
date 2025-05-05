import '../ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data/productos';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = categoriaId ? getProductosPorCategoria : getProductos;
    fetchData(categoriaId).then(setItems);
  }, [categoriaId]);

  return (
    <div style={{ paddingTop: '80px', color: 'white' }}>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};


export default ItemListContainer;
// aca termina el componenteS aa