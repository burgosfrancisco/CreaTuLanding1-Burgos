import './ItemListContainer.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function ItemListContainer({ greetings }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((resp) => {
        const productosFirebase = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosFirebase);
      })
      .catch((error) => console.error("Error al traer productos", error));
  }, []);

  return (
    <>
      <h1>{greetings}</h1>
      <div className='container-cards'>
        {productos.map(prod => (
          <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} id={prod.id} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
