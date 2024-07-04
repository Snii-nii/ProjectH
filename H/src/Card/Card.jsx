import Picture from "../assets/000.jpg"
import styles from "./Card.module.css"


function Card() {
  return ( 
      <div className={styles.card}>
        <img className={styles["card-image"]} src={Picture} alt="Soita Sonjalle jos tämä teksti näkyy" />
      </div>
   );
}

export default Card;