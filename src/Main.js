import SearchBar from "./components/SearchBar";
import {Outlet} from "react-router-dom";

export default function Main(props) {
  const {setSearch} = props;
  return (
    <>
      <SearchBar
        setSearchHandler={(query) => setSearch(query)}
      />
      <Outlet/>
    </>
  );
}
