import Divi from "./assets/divider.png"
import styles from "./Card/Card.module.css"


function Divider() {
  return ( 
      <div className={styles.card}>
        <img className={styles["card-image"]} src={Divi} alt="Soita Sonjalle jos tämä teksti näkyy" />
      </div>
   );
}

export default Divider;