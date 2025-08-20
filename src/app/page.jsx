import ProductoList from "@/components/ProductoList";
import UsuarioList from "@/components/UsuarioList";
import CursoList from "@/components/CursoList";
import PedidoList from "@/components/PedidoList";
import BlogList from "@/components/BlogList";

const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

// Datos para el Ejercicio 2
const usuarios = [
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
];

// Datos para el Ejercicio 3
const cursos = [
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];

// Datos para el Ejercicio 4
const pedidos = [
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];

// Datos para el Ejercicio 5
const blogs = [
    { id: 1, titulo: "Aprendiendo React", autor: { nombre: "Ana", pais: "Colombia" }, categorias: ["JavaScript", "Frontend"], comentarios: [ { usuario: "Luis", texto: "Muy útil", respuestas: [ { usuario: "Marta", texto: "Totalmente de acuerdo", reacciones: [ { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } }, { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } } ] } ] } ] },
    { id: 2, titulo: "Next.js SSR", autor: { nombre: "Luis", pais: "México" }, categorias: ["JavaScript", "SSR"], comentarios: [ { usuario: "Marta", texto: "Interesante", respuestas: [ { usuario: "Ana", texto: "Lo probaré", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } } ] } ] } ] },
    { id: 3, titulo: "Node.js API", autor: { nombre: "John", pais: "USA" }, categorias: ["Backend", "API"], comentarios: [ { usuario: "Pedro", texto: "Me sirvió mucho", respuestas: [ { usuario: "Luis", texto: "Gracias por compartir", reacciones: [ { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } } ] } ] } ] },
    { id: 4, titulo: "Django ORM", autor: { nombre: "Marta", pais: "España" }, categorias: ["Backend", "Python"], comentarios: [ { usuario: "Ana", texto: "Claro y conciso", respuestas: [ { usuario: "John", texto: "Lo usaré en mi proyecto", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } } ] } ] } ] },
    { id: 5, titulo: "Flutter Widgets", autor: { nombre: "Pedro", pais: "Portugal" }, categorias: ["Mobile", "UI"], comentarios: [ { usuario: "Luis", texto: "Genial explicación", respuestas: [ { usuario: "Marta", texto: "Muy claro todo", reacciones: [ { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } } ] } ] } ] }
];

export default function TallerCompletoPage() {
  return (
    <main
      style={{
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#121212',
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      <h1 style={{ textAlign: 'center', margin: '40px 0', color: '#fff' }}>
        Taller Listas en Next.js
      </h1>

      <ProductoList productos={productos} />
      <UsuarioList usuarios={usuarios} />
      <CursoList cursos={cursos} />
      <PedidoList pedidos={pedidos} />
      <BlogList blogs={blogs} />
    </main>
  );
};