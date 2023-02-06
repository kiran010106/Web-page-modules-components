import React from "react";
import Hero from "./Hero";

const SearchView = ({keyword, searchResults}) => {
  const title = `you are searching for ${keyword}`;
    console.log(searchResults, "are the search results")
  return (
    <>
      <Hero text={title}/>
     
    </>
  );
};
export default SearchView ;
