import PropType from "prop-types";
import React from "react";
import { IoClose } from "react-icons/io5";
import styles from "../styles/MenuCard.module.css";
import { options } from "./Navbar";

const MenuCard = ({ setShow,show }) => {
  return (
    <div className={`${show ? styles.wrapper : styles.hidden} `}>
      <div className={styles.container}>
        <div className={styles.iconButton} onClick={() => setShow(false)}>
          <IoClose className={styles.icon} />
        </div>

        <ul className={styles.list}>
          {options.map((option, index) => (
            <li key={index} className="">
              <a role="link" className="">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  show: PropType.bool,
  setShow: PropType.func,
};

export default MenuCard;
