import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const { ACCESS_KEY, SECRET_KEY } = process.env;
const page = 1;
const per_page = 30;
//search response {total:, total_pages, results: [{urls: {regular, raw, full, thumb,small}]
//per_page, page, client_id, query
//https://api.unsplash.com/search/photos?client_id=sadd&query=cute&page=1&per_page=30

function App() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (search.length > 2) {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${search}&page=${page}&per_page=${per_page}`
      )
        .then((res) => res.json())
        .then((data) => setResponse(data));
    }
  }, [search]);

  return (
    <div className="App">
      <SearchBar setSearchHandler={(e) => setSearch(e.target.value)} />
      {response.results !== undefined && <RenderImages  response={response}/>}
    </div>
  );
}

export default App;
