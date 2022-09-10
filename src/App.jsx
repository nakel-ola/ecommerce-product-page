import React, { useState } from "react";
import ImagesCard from "./components/ImagesCard";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import ProductDetails from "./components/ProductDetails";
import styles from "./styles/App.module.css";
import image_1_thumbnail from "./assets/images/image-product-1-thumbnail.jpg";


const data = {
  image: image_1_thumbnail,
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  price: 125.00,
};

function App() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const [cart,setCart] = useState([])


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar cart={cart}/>

        <main className={styles.main}>
          <section>
            <ImagesCard setOpen={setOpen} active={active} setActive={setActive}/>
            <ProductDetails setCart={setCart} cart={cart} {...data} />
          </section>

          {open && (
            <Popup setOpen={setOpen} active={active} setActive={setActive} />
          )}


        </main>
      </div>
    </div>
  );
}

export default App;
