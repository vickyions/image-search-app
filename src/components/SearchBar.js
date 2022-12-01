import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const { setSearchHandler } = props;
  const navigate = useNavigate();

  return (
    <div className="search-bar-wrapper">
      <div className="search-header">
        <h1>React Photo Search</h1>
        <p className="bookmark-btn" onClick={(e) => navigate("/bookmarks")}>
          Bookmarks
        </p>
      </div>
      <form
        id="search-form"
        onSubmit={(e) => {
          //set the props search query
          e.preventDefault();
          if (query.length > 2) {
            setSearchHandler(query);
          }
        }}
      >
        <input
          type="text"
          placeholder="search free high resolution images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
