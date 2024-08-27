import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a1727cc282ea4d3fa9ea280141bdcf93";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recepieCard}>
        <h1 className={styles.recepieName}>{food.title}</h1>
        <img
          src={food.image}
          className={styles.receipeImage}
          alt={food.title}
        />
        <div className={styles.receipeDetail}>
          <span>
            <strong> ⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : " 🍗 Non - Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐄 Vegan" : ""}</strong>
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
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.receipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 ? (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <p>No instructions found.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
