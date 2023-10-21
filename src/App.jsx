import otherImg from "./assets/imagenes/372662235_672981214741320_8124692078299428657_n.webp";
import CardProducto from "./components/CardProducto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="">Logo</a>

          <div>
            <ul>
              <li>Productos</li>
              <li>Información</li>
              <li>Sobre Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container hero_section">
        <div className="hero">
          <div className="left">
            <h1>Impresiones 3D a la Medida</h1>
            <p>
              Descubre un mundo de posibilidades con nuestras impresiones 3D
              personalizadas. Transforma tus ideas en objetos reales con la
              mejor calidad y precisión. ¡Haz que tu imaginación cobre vida!
            </p>
            <button>Explora Ahora</button>
          </div>

          <div className="right">
            <img className="first" src={otherImg} alt="imagen hero right" />
            <p>Elden Ring - Malenia</p>
          </div>
        </div>
      </main>

      <section className="container">
        <div className="productos">
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
          <CardProducto />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
