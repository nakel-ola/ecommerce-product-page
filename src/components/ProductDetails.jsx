import PropType from "prop-types";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import styles from "../styles/ProductDetails.module.css";

const ProductDetails = ({
  setCart,
  cart,
  title,
  image,
  price,
  description,
}) => {
  const selected = cart.find((c) => c.title === title);

  const addToCart = () => {
    const newCart = [...cart];
    let data = newCart.find((cart) => cart.title === title);

    if (data) {
      data.quantity = data.quantity + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { title, image, price, quantity: 1 }]);
    }
  };

  const removeFromCart = () => {
    const newCart = [...cart];
    let data = newCart.find((cart) => cart.title === title);
    if (data?.quantity > 1) {
      data.quantity = data.quantity - 1;
      setCart(newCart);
    } else {
      const index = newCart.findIndex((cart) => cart.title === title);
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <section className={styles.container}>
      <p className={styles.companyName}>SNEAKER COMPANY</p>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <article className={styles.price}>
        <div className="">
          <h1>$125.00</h1>
          <div className="">
            <p className="">50%</p>
          </div>
        </div>
        <s className="">${price}</s>
      </article>

      <section className={styles.buttons}>
        <div className={styles.iconButtons}>
          <div className={styles.iconButton} onClick={removeFromCart}>
            <IoRemoveOutline className={styles.icon} />
          </div>
          <div className={styles.iconButton}>
            <p className="">{selected?.quantity ?? 0}</p>
          </div>
          <div className={styles.iconButton} onClick={addToCart}>
            <IoAddOutline className={styles.icon} />
          </div>
        </div>
        {!selected && (
          <button className="" onClick={addToCart}>
            <BsCart3 className={styles.icon} />
            Add to cart
          </button>
        )}
      </section>
    </section>
  );
};

ProductDetails.propTypes = {
  setCart: PropType.func,
  cart: PropType.any,
  image: PropType.string,
  description: PropType.string,
  title: PropType.string,
  price: PropType.number,
  quantity: PropType.number,
};

export default ProductDetails;
