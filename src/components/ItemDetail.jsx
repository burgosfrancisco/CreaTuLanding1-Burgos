import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '12px',
      padding: '2rem',
      maxWidth: '800px',
      margin: '2rem auto'
    }}>
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '10px'
        }}
      />
      <div style={{ flex: 1 }}>
        <h2>{item.nombre}</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${item.precio}</p>
        <p style={{ marginBottom: '1rem' }}>
          Producto de excelente calidad. ¡No te lo pierdas!
        </p>
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail;

