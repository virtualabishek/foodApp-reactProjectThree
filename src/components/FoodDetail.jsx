import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState(null); // Initialize as null to handle loading state
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a1727cc282ea4d3fa9ea280141bdcf93";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  // Handle the loading state
  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.title} />
        <div>
          <span>
            <strong> ⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong> Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegetarian" : " 🍗 Non - Vegetarian"}
          </span>
          <span>{food.vegan ? " 🐄 Vegan" : ""}</span>
        </div>
        <div>
          <span> $ {food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {food.analyzedInstructions[0]?.steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </div>
    </div>
  );
}
