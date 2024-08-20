import styles from "./footitem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>View Reciepe</button>
    </div>
  );
}
