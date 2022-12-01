import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";
import RenderImagesWrapper from "./components/RenderImagesWrapper";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RenderBookmark from "./components/RenderBookmark";

const ACCESS_KEY = "<Add your ACCESS_KEY>";

const page = 1;
const per_page = 30;
const bookmark_local_key = "bookmarks-images";
//search response {total:, total_pages, results: [{urls: {regular, raw, full, thumb,small}]
//per_page, page, client_id, query
//https://api.unsplash.com/search/photos?client_id=sadd&query=cute&page=1&per_page=30

function App() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState({});
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem(bookmark_local_key)) || []
  ); //[imageObj]

  useEffect(() => {
    if (search.length > 2) {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${search}&page=${page}&per_page=${per_page}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.errors === undefined) {
            setResponse(data);
          }
        });
    }
  }, [search]);

  useEffect(() => {
    localStorage.setItem(bookmark_local_key, JSON.stringify(bookmark));
  }, [bookmark]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setSearch={setSearch} />}>
            <Route
              index
              element={
                <RenderImagesWrapper
                  response={response}
                  addBookmark={(image) => {
                    setBookmark((old) => {
                      return [...old, image];
                    });
                  }}
                />
              }
            />
            <Route
              path="bookmarks"
              element={
                <RenderBookmark bookmark={bookmark} setBookmark={setBookmark} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
