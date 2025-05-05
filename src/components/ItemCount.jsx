import { useState } from 'react';

function ItemCount() {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <button onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 1}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
    </div>
  );
}

export default ItemCount;
