import "./App.css";
import { useState , useEffect } from "react";
import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/SearchView";
import AboutView from "./MyComponents/AboutView";
import SearchView from "./MyComponents/SearchView";
import { Routes, Route } from "react-router-dom";

function App() {

const [searchResults , setSearchResult] = useState([]);
const [searchText , setSearchText] = useState('');


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route path="/about" element={<AboutView />} /> 
        <Route path="/" element={<SearchView keyword={searchText} 
        searchResults={searchResults}/>} /> 

      </Routes>
    </div>
  );
}

export default App;
