import { useState, useEffect } from "react";

export default function SearchBar(props) {
  const {search, setSearchHandler } = props;

  return (
    <div className="search-bar-wrapper">
      <h1>React Photo Search</h1>
      <p className="bookmark-btn">Bookmarks</p>
      <form
        id="search-form"
        onSubmit={(e) => {
          //set the props search query
          e.preventDefault();
          setSearchHandler(e);
        }}
      >
        <input type="text" placeholder="search free high resolution images" minLength="3" value={search}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
