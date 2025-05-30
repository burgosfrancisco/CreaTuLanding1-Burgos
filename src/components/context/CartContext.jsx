import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  function agregarAlCarrito(producto, cantidad) {
    const productoExistente = carrito.find(p => p.id === producto.id);
    
    if (productoExistente) {
      const actualizado = carrito.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  }

  // Vaciar carrito
  function vaciarCarrito() {
    setCarrito([]);
  }

  // Calcular total de unidades y total en $
  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  const total = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

  // Valor que estará disponible en todos los componentes
  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, cantidadTotal, total }}>
      {children}
    </CartContext.Provider>
  );
}
