import React from 'react';
import './HomePage.css';
import Figure from 'react-bootstrap/Figure';

function HomePage() {
  return (

<div className="homepage">

  <section id="bienvenida">
    
    <header>
      <h1>Welcome!🌸</h1>
    </header>
  </section>
<section>
  <h1 className="Description">⛩️Find original products imported from Japan⛩️</h1>
  </section>
  
  <div className="contenido1">
    <div className="texto">
      <p className="texto1">
      You will find a wide selection of products related to the world of manga and anime.
      </p>
      <p className="texto2">
      We have games and collectibles, here you will have everything you need to satisfy your passion for this fascinating universe. We offer high-quality products at competitive prices, along with exceptional customer service.
      </p>
     
      <p className="texto3">
      You can choose from classics to the latest hits. Discover collectible figures, clothing, accessories, sleeves and much more.
      </p>
      <p className="texto4">
        ⭐Explore our online store!⭐

        
      </p>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://cdn.shopify.com/s/files/1/0268/7015/3269/products/Y898457_b_360x.jpg?v=1675658880"
      />
      <Figure.Caption>
       Gachapon Jujutsu Kaisen
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
        width={179}
        height={180}
        alt="171x180"
        src="https://cdn.shopify.com/s/files/1/0268/7015/3269/products/71wHTd6wWtL._AC_SL1302_360x.jpg?v=1675659539"
      />
      <Figure.Caption>
       Gachapon Quintuplets
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
        width={188}
        height={180}
        alt="171x180"
        src="https://cdn.shopify.com/s/files/1/0268/7015/3269/products/130F4E5E-4009-466F-8786-0AD3AA121796_1bea8cb1-6a4d-4763-bd8e-71f7d6ee2b82_360x.jpg?v=1675329015"
      />
      <Figure.Caption>
       Gachapon Kimetsu No Yaiba
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
        width={188}
        height={180}
        alt="171x180"
        src="https://cdn.shopify.com/s/files/1/0268/7015/3269/products/amyu-mustore_c2209126_15bd47a4-25de-4765-a4fe-be0630598dfb_360x.jpg?v=1676964456"
      />
      <Figure.Caption>
       Gachapon ChainsawMan
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
        width={215}
        height={180}
        alt="195x180"
        src="https://cdn.shopify.com/s/files/1/0268/7015/3269/products/ITEM_4549660726319_cf7a1493-a90f-4f33-99c0-b20cf40a4a8d_360x.jpg?v=1675326371"
      />
      <Figure.Caption>
       Gachapon Sakura
      </Figure.Caption>
    </Figure>

    </div>
    <div className="image">
    <img src="images/gatito.png" alt="logo" width="540" height="565" />
    <img src="images/figuras.png" alt="logo" width="540" height="565" />
      
    </div>
  </div>


 

  
      
    </div>
   
    
  );
}

export default HomePage;
