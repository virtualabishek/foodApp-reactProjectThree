import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a1727cc282ea4d3fa9ea280141bdcf93";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recepieCard}>
        <h1 className={styles.recepieName}>{food.title}</h1>
        <img src={food.image} className={styles.receipeImage} alt="food.name" />
        <div className={styles.receipeDetail}>
          <span>
            <strong> ⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong> Server{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegeterian" : " 🍗 Non - Vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong> $ {food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        {food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3>{item.name}</h3>
          </div>
        ))}

        <h2>Instruction</h2>
        <div className={styles.receipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
