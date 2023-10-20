import heroImg from "./assets/imagenes/technology-equipment-blue-laboratory-generated-by-ai.jpg";
import backImg from './assets/imagenes/homemade-wooden-toy-box-colorful-craft-decoration-generated-by-ai_188544-29661.jpg'
function App() {
  return (
    <>
      <header>
        <nav>
          <a href="">logo</a>

          <div>
            <ul>
              <li>About</li>
              <li>Products</li>
              <li>Info</li>
              <li>Conctact</li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container hero">
        <div className="left">
          <h1>Impresiones 3D a la Medida</h1>
          <p>
            Descubre un mundo de posibilidades con nuestras impresiones 3D
            personalizadas. Transforma tus ideas en objetos reales con la mejor
            calidad y precisión. ¡Haz que tu imaginación cobre vida!
          </p>
          <button>Explora Ahora</button>
        </div>

        <div className="right">
          <img className="first" src={heroImg} alt="imagen hero right" />
          <img className="second" src={backImg} alt="imagen hero right" />
        </div>
      </main>
    </>
  );
}

export default App;
