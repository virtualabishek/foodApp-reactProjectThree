import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : food.extendedIngredients && food.extendedIngredients.length > 0 ? (
        food.extendedIngredients.map((item, index) => (
          <Item key={index} item={item} />
        ))
      ) : (
        <p>No ingredients found.</p>
      )}
    </div>
  );
}
