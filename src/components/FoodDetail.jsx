import { useEffect } from "react";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a1727cc282ea4d3fa9ea280141bdcf93";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);
  return (
    <div>
      Food Details
      {foodId}
    </div>
  );
}
