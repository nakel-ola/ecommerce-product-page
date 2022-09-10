import PropType from "prop-types";
import React from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import styles from "../styles/Popup.module.css";
import { items } from "./ImagesCard";

const Popup = (props) => {
  const { active, setActive,setOpen } = props;

  const handleBack = () => {
    if (active > 0 && active < items.length) {
      setActive(active - 1);
    }
  };
  const handleForward = () => {
    if (active < items.length - 1) {
      setActive(active + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.iconButton} onClick={() => setOpen(false)}>
            <IoClose className={styles.icon}/>
        </div>
        <div className={styles.image}>
          <img src={items[active].image} alt="" />

          <div className={`${active > 0 ? styles.leftButton : styles.hidden}`} onClick={handleBack}>
            <IoChevronBack className={styles.icon} />
          </div>
          <div className={`${active < items.length -1 ? styles.rightButton : styles.hidden}`} onClick={handleForward}>
            <IoChevronForward />
          </div>
        </div>

        <ul className={styles.thumbnails}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`${styles.thumbnail} ${active === index ? styles.active : ""}`}
              onClick={() => setActive(index)}
            >
              <img src={item.thumbnail} alt="" />
              <div />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Popup.propTypes = {
  active: PropType.number,
  setActive: PropType.func,
  setOpen: PropType.func,
};
export default Popup;
