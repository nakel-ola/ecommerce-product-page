import PropType from "prop-types";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import image from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";
import styles from "../styles/Navbar.module.css";
import MenuCard from "./MenuCard";
import Popover from "./Popover";

export const options = ["Collections", "Men", "Women", "About", " Contact"];

const Navbar = ({ cart }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const totalLength = cart.reduce((amount,item) => item.quantity + amount,0);

  return (
    <nav className={styles.container}>
      <section className={styles.left}>
        <div className={styles.menu} onClick={() => setShow(true)}>
          <IoMenuOutline className={styles.icon}/>
        </div>
        <picture className={styles.logo}>
          <img src={logo} alt="" />
        </picture>

        <ul className={styles.list}>
          {options.map((option, index) => (
            <li key={index} className={option === active ? styles.active : ""} onClick={() => setActive(option)}>
              <a role="link">{option}</a>
              {option === active && <span />}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.right}>
        <div className={styles.cart}>
          <div className={styles.icons}>
            <div className={styles.iconButton} onClick={() => setOpen(true)}>
              <BsCart3 className={styles.icon} />
              <div className={styles.badge}>
                <p>{totalLength}</p>
              </div>
            </div>
          </div>
          <Popover open={open} cart={cart} setOpen={setOpen} />
        </div>

        <div className={styles.avatar}>
          <img src={image} alt="" />
        </div>
      </section>

      <MenuCard show={show} setShow={setShow}/>

      
    </nav>
  );
};

Navbar.propTypes = {
  cart: PropType.any,
};

export default Navbar;
