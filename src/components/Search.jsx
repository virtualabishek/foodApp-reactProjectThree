import { useEffect } from "react";
import { useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a1727cc282ea4d3fa9ea280141bdcf93";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  //syntax of useEffect hook
  //useEffect(() => {}, [])
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    // function demo() {
    //   console.log("Demo function executed.");
    // }
    //demo();
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
