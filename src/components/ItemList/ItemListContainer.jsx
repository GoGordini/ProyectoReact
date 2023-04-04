import ItemList from "./ItemList";
import styles from "./ItemList.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.texto}>
      <ItemList greeting={greeting} />
    </div>
  );
};

export default ItemListContainer;

// La parte previa al return es de lógica (el contenido), en JS, y se llama contenedor.
// La parte del return es jsx. En esta parte, las cosas que vienen de JS van entre llaves. Lo que se recibe como
// parámetro es un objeto que se denomina props. La props se envían desestructuradas.
//UseState clase 28 mar 1.15 hs.
