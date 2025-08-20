export default function CursoList({ cursos }) {
  return (
    <section style={{ marginBottom: '40px', borderBottom: '2px solid #333', paddingBottom: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#fff' }}>Ejercicio 3 - Lista de cursos</h2>
      {cursos.map((curso) => (
        <div key={curso.id} style={{ marginBottom: '15px' }}>
          <h3 style={{ textAlign: 'center', margin: '20px 0', color: '#fff' }}>{curso.nombre}</h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '40px', margin: 0 }}>
            {curso.modulos.map((modulo, index) => (
              <li key={index}>{modulo.nombre}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
