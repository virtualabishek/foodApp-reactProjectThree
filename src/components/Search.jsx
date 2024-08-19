import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("Pizza");
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
