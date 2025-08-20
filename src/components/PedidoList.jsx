export default function PedidoList({ pedidos }) {
  return (
    <section style={{ marginBottom: '40px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#fff' }}>Ejercicio 4 - Lista de pedidos</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id} style={{ border: '1px solid #444', padding: '15px', marginBottom: '15px', borderRadius: '5px', backgroundColor: '#1e1e1e' }}>
          <h3 style={{ textAlign: 'center', margin: '20px 0', color: '#fff' }}>Pedido de: {pedido.cliente}</h3>
          <h4 style={{ margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>Productos:</h4>
          <ul>
            {pedido.productos.map((producto, index) => (
              <li key={index}>{producto.nombre} (Cantidad: {producto.cantidad})</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
