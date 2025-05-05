const productos = [
  { id: '1', nombre: 'Remera', categoria: 'ropa', precio: 2000, imagen: '/imagenes/remera.jpg' },
  { id: '2', nombre: 'Zapatillas', categoria: 'calzado', precio: 8000, imagen: '/imagenes/zapatillas.jpg' },
  { id: '3', nombre: 'Pantalón', categoria: 'ropa', precio: 5000, imagen: '/imagenes/pantalon.jpg' },
  { id: '4', nombre: 'Gorra', categoria: 'accesorios', precio: 1500, imagen: '/imagenes/gorra.jpg' },
];

  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos), 1000);
    });
  };
  
  export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos.find(p => p.id === id)), 1000);
    });
  };
  
  export const getProductosPorCategoria = (categoriaId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos.filter(p => p.categoria === categoriaId)), 1000);
    });
  };
  //