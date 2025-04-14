const CartWidget = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        🛒
        <span style={{
          backgroundColor: '#6c63ff',
          color: 'white',
          borderRadius: '50%',
          padding: '0.25rem 0.5rem',
          fontSize: '0.8rem'
        }}>
          3
        </span>
      </div>
    );
  };
  
  export default CartWidget;
  