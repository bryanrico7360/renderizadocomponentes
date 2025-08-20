export default function BlogList({ blogs }) {
  return (
    <section>
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#fff' }}>Ejercicio 5 - Lista de blogs</h2>
      {blogs.map((blog) => (
        <article key={blog.id} style={{ border: '1px solid #444', padding: '20px', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#1e1e1e' }}>
          <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#fff' }}>{blog.titulo}</h2>
          <p><em>Por: {blog.autor.nombre} ({blog.autor.pais})</em></p>
          <div style={{ color: 'rgba(255,255,255,0.85)' }}>
            <strong>Categorías:</strong> {blog.categorias.join(', ')}
          </div>

          <div style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <h4 style={{ color: '#fff' }}>Comentarios:</h4>
            {blog.comentarios.map((comentario, index) => (
              <div key={index} style={{ borderLeft: '2px solid #555', paddingLeft: '15px', marginBottom: '10px', color: '#fff' }}>
                <p><strong>{comentario.usuario}:</strong> {comentario.texto}</p>
                <div style={{ paddingLeft: '20px' }}>
                  {comentario.respuestas.map((respuesta, rIndex) => (
                    <div key={rIndex} style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '5px', color: '#fff' }}>
                      <p><strong>{respuesta.usuario}:</strong> {respuesta.texto}</p>
                      <ul style={{ fontSize: '0.85em', paddingLeft: '25px', color: 'rgba(255,255,255,0.85)' }}>
                        {respuesta.reacciones.map((reaccion, reaccionIndex) => (
                          <li key={reaccionIndex}>
                            {reaccion.tipo} por <strong>{reaccion.usuario.nombre}</strong> ({reaccion.usuario.rol})
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
