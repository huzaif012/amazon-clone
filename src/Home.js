import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://technoinfoplus.com/wp-content/uploads/2020/04/amazon-best-movies-feb-2020_1582278965498.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
        id="12321341"
          title="The Lean Start Up"
          price={250}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={4}
        />
        <Product
        id="12321342"
          title='MacBook pro 16"'
          price={199900}
          image="https://www.kindpng.com/picc/b/86/867874.png"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
        id="12321343"
          title="Apple iPhone 11 Pro Max (64GB, Midnight Green)"
          image="https://images-na.ssl-images-amazon.com/images/I/61itOh%2BJe8L._SL1024_.jpg"
          price={117100}
          rating={5}
        />
        <Product
        id="12321344"
          title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
          image="https://images-na.ssl-images-amazon.com/images/I/81edobp8PkL._SL1500_.jpg"
          price={116000}
          rating={5}
        />
        <Product
        id="12321345"
          title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
          price={59999}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
        id="12321346"
          title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
          image="https://images-na.ssl-images-amazon.com/images/I/81644xBqdyL._SX425_.jpg"
          price={94990}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
