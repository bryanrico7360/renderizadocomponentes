export default function ProductoList({ productos }) {
  return (
    <section style={{ marginBottom: '40px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#fff' }}>Ejercicio 1 - Lista de productos</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong> - ${producto.precio}
            <span style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '10px' }}>
              (Categoría: {producto.categoria.nombre})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}