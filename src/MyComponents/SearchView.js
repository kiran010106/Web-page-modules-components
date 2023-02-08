import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

// tmdb api key bfafa2d3c4889019446136dd50acf0f4

const MovieCard = ({ movie }) => {
  const posterUrl=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl= `/movies/${movie.id}`
  return(
    <div className=" col-md-3 col-md-3 col-2 my-4">
    <div className="card">
    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
    <div className="card-body">
      <h5 className="card-title">{movie.original_title}</h5>
      <Link to = {detailUrl} className="btn btn-primary">show details</Link>
      </div>
    </div>
  </div>
  )
}
  


const SearchView = ({keyword, searchResults}) => {
  const title = `you are searching for ${keyword}`;
    
const resultsHtml = searchResults?.map((obj, i) => {
     return<MovieCard movie={obj} key={i} />
})



  return (
    <>
      <Hero text={title}/>
       {
        (resultsHtml &&
           <div className="container">
              <div className="row">
                  {resultsHtml}
              </div>
           </div>
        
        )
       }
    </>
  );
};
export default SearchView ;
