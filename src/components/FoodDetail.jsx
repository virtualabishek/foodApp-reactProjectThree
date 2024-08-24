import { useEffect, useState } from "react";

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
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="food.name" />
        <div>
          <span>
            <strong> ⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong> Server{food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegeterian" : " 🍗 Non - Vegeterian"}
          </span>
          <span>{food.vegan ? " 🐄Vegan" : ""}</span>
        </div>
        <div>
          <span> $ {food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instruction</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
