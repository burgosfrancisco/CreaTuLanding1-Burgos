import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import './FinalizarCompra.css';

function FinalizarCompra() {
  const { carrito, total, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!total || total <= 0 || isNaN(total)) {
      alert("Error: el total es inválido.");
      return;
    }

    const orden = {
      comprador: formData,
      items: carrito,
      total,
      fecha: new Date(),
    };

    try {
      const ordenRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(ordenRef.id);
      vaciarCarrito();
      alert("¡Orden confirmada!");
    } catch (error) {
      console.error("Error al generar la orden:", error);
      alert("Hubo un error al generar la orden. Intenta nuevamente.");
    }
  };

  if (ordenId) {
    return (
      <div className="finalizar-compra-gracias">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu código de orden es: <strong>{ordenId}</strong></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="finalizar-compra-form">
      <h2>Finalizar compra</h2>

      <label>Nombre:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Dirección:</label>
      <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />

      <label>Teléfono:</label>
      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />

      <button type="submit">Enviar orden</button>
    </form>
  );
}

export default FinalizarCompra;
