import PropType from "prop-types";
import React, { useRef } from "react";
import { IoTrashOutline } from "react-icons/io5";
// import image_1_thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import styles from "../styles/Popover.module.css";
import useOnClickOutside from "../hooks/useOnClickOutside"

// const data = {
//   image: image_1_thumbnail,
//   title: "Fall Limited Edition Sneakers",
//   price: 125.0,
//   quantity: 3,
// };

function Card({ image, title, price, quantity }) {
  const totalPrice = price * quantity;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>

      <div className={styles.details}>
        <p className="">{title}</p>
        <p>
          {price} x {quantity} <strong>${totalPrice}</strong>
        </p>
      </div>
      <div className="">
        <IoTrashOutline />
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropType.string,
  title: PropType.string,
  price: PropType.number,
  quantity: PropType.number,
};

const Popover = ({ cart,setOpen,open }) => {

    const ref = useRef();
    useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref} className={`${open ? styles.container : styles.hidden}`}>
      <div className={styles.header}>
        <p className="">Cart</p>
      </div>

      {cart.length > 0 ? (
        <>
          {cart.map((_, index) => (
            <Card key={index} {..._} />
          ))}

          <div className={styles.buttons}>
            <button className="">Checkout</button>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
            <p className="">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

Popover.propTypes = {
  cart: PropType.any,
  open: PropType.bool,
  setOpen: PropType.func,
};

export default Popover;
