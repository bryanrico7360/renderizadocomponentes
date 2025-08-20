export default function UsuarioList({ usuarios }) {
  return (
    <section style={{ marginBottom: '40px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#fff' }}>Ejercicio 2 - Lista de usuarios</h2>
      <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong>
            <p style={{ margin: '5px 0 10px 20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>
              Dirección: {usuario.direccion.calle}, {usuario.direccion.ciudad}, {usuario.direccion.pais}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
