import PropType from "prop-types";
import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import image_1_thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import image_1 from "../assets/images/image-product-1.jpg";
import image_2_thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import image_2 from "../assets/images/image-product-2.jpg";
import image_3_thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import image_3 from "../assets/images/image-product-3.jpg";
import image_4_thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import image_4 from "../assets/images/image-product-4.jpg";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/ImagesCard.module.css";

export const items = [
  {
    image: image_1,
    thumbnail: image_1_thumbnail,
  },
  {
    image: image_2,
    thumbnail: image_2_thumbnail,
  },
  {
    image: image_3,
    thumbnail: image_3_thumbnail,
  },
  {
    image: image_4,
    thumbnail: image_4_thumbnail,
  },
];

const ImagesCard = (props) => {
  const { active, setActive, setOpen, popup } = props;

  const screen = useWindowSize();

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
    <div className={styles.container}>
      <div
        className={styles.image}
        onClick={() => !popup && screen.width > "768" && setOpen(true)}
      >
        <img src={items[active].image} alt="" />
        {screen.width < "768" && (
          <>
            <div className={`${active > 0 ? styles.leftButton : styles.hidden}`} onClick={handleBack}>
              <IoChevronBack className={styles.icon} />
            </div>
            <div className={`${active < items.length -1 ? styles.rightButton : styles.hidden}`} onClick={handleForward}>
              <IoChevronForward />
            </div>
          </>
        )}
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
  );
};

// active === index ? styles.active : styles.thumbnail

ImagesCard.propTypes = {
  active: PropType.number,
  popup: PropType.bool,
  setOpen: PropType.func,
  setActive: PropType.func,
};

export default ImagesCard;
