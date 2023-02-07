import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./MyComponents/Navbar";
// import Home from "./MyComponents/SearchView";
import AboutView from "./MyComponents/AboutView";
import SearchView from "./MyComponents/SearchView";
import MovieView from "./MyComponents/MovieView";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=bfafa2d3c4889019446136dd50acf0f4&language=
             en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data ) => {
          console.log(data.results)
          setSearchResult(data.results)
          });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movie/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
