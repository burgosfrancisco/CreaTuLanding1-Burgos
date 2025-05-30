import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProducto({ id: resp.id, ...resp.data() });
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((error) => console.error("Error al obtener el producto", error))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
