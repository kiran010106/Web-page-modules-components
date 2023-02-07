import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState } from "react";



const MovieView = () => {
   const {id} = useParams()
   console.log(id)
const [movieDetails, setMovieDetails ] = useState({})

//    const 
    return(
        <>
          <Hero text = "Movie detail view movie" />
        </>

        )
}
export default MovieView;