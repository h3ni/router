import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Moviedesc from "./pages/MovieDescription/Moviedesc";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Ripper Untold",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/WH2Bdsya0GU?si=qV7D8lhGdV4kuDNj",
    },
    {
      id: 2,
      title: "Harry potter",
      description: "A detective etc...",
      posterUrl:
        "https://c8.alamy.com/compfr/pm5w1f/poster-daniel-radcliffe-comme-harry-potter-de-warner-bros-pictures-fantasy-adventure-harry-potter-et-les-reliques-de-la-partie-2-un-communique-de-warner-bros-pictures-pm5w1f.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/mNgwNXKBEW0?si=mVr2Lx4KFKHDBQ2-",
    },
    {
      id: 3,
      title: "Fast And Furious 5",
      description: "A detective etc...",
      posterUrl:
        "https://www.originalfilmart.com/cdn/shop/products/fast_five_2011_french_original_film_art.jpg?v=1586353503",
      rating: 5,
      trailer: "https://www.youtube.com/embed/vcn2GOuZCKI?si=mzcfMeT4wX3KPoOq",
    },
    {
      id: 4,
      title: "The Green Mile",
      description: "A detective etc...",
      posterUrl:
        "https://i.etsystatic.com/27725708/r/il/ed0708/2888849810/il_570xN.2888849810_4fbk.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/Ki4haFrqSrw?si=4rk6kZrdH-JOXORF",
    },
    {
      id: 5,
      title: "Pirates of the Caribbean",
      description: "A detective etc...",
      posterUrl:
        "https://filmlibrary.ie/cdn/shop/products/pirates-of-the-caribbean-on-stranger-tides-poster_1200x1200.jpg?v=1605717088",
      rating: 4,
      trailer: "https://www.youtube.com/embed/0BXCVe8Yww4?si=hoE6yJcI-Puvq0YE",
    },
    {
      id: 6,
      title: "Taxi driver",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 1,
      trailer: "https://www.youtube.com/embed/T5IligQP7Fo?si=rQ6PU2Am3qBEgWde",
    },
  ]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/movie-details/:movieId"
          element={<Moviedesc movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
