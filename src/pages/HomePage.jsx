import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

function HomePage() {
  return (
<div className="homepage">
  <section id="bienvenida">
    <header>
      <h1>Bienvenido!🌸</h1>
    </header>
  </section>

<section>
  <h1 className="Description">⛩️Encuentra productos originales importados desde Japón⛩️</h1>
  </section>

  <div className="contenido1">
    <div className="texto">
      <p className="texto1">
        Encontrarás una amplia selección de productos relacionados con el mundo del manga y anime.
      </p>
      <p className="texto2">
        Contamos con juegos y artículos de colección, aquí tendrás todo lo que necesitas para satisfacer tu pasión por este fascinante universo. Ofrecemos productos de alta calidad a precios competitivos, junto con un servicio de atención al cliente excepcional.
      </p>
      <p className="texto3">
        Podrás elegir entre clásicos hasta los últimos éxitos. Descubre figuras coleccionables, ropa, accesorios, mangas y mucho más.
      </p>
      <p className="texto4">
        ⭐¡Explora nuestra tienda en línea!⭐
      </p>
    </div>
    <div className="image">
      <img src="images/gatito.png" alt="logo" width="450" height="450" />
    </div>
  </div>

  <img src="images/banner.png" alt="logo" style={{width: '100%', height: 'auto'}} />

  <div className="contenido2">

  
      
    </div>
    </div>
    
  );
}

export default HomePage;
