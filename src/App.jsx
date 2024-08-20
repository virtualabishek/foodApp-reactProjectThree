import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
