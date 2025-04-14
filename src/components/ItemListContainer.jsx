const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '20px',
      paddingTop: '80px' // para evitar que se superponga con el navbar
    }}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
