// import React, { useState } from 'react';
// import data from "../db.json";

// const Movies = () => {
//   const [toggle, setToggle] = useState(true);

//   const change = () => {
//     setToggle(!toggle);
//   }

//   return (
//     <>
//       {toggle ? (
//         <div onClick={change}>
//           <div className="card" style={{ width: "18rem" }}>
//             <img src="..." className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div onClick={change}>
//           <div className="another-div">
//             This is another div.
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Movies;

// import React, { useState } from "react";
// import data from "../db.json";
// import "./Movies.css";
// import { useHistory } from 'react-router-dom'; 

// const Movies = () => {
//   const [toggle, setToggle] = useState(true);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
  // const history = useHistory();

  // const goToPreviousPage = () => {
  //   history.goBack();
  // };

  // const change = () => {
  //   setToggle(!toggle);
  // };

  // const handleCardClick = (movie) => {
  //   setSelectedMovie(movie);
  //   setToggle(false);
  // };

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredMovies = data.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleSearchInputClick = (event) => {
  //   event.stopPropagation();
  // };

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search movies"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           // onClick={handleSearchInputClick}
//         />
//       </div>
//       {toggle ? (
//         <div onClick={change} className="container">
//           {filteredMovies.map((movie) => (
//             <div
//               key={movie.id}
//               className="card "
//               style={{ width: "18rem" }}
//               onClick={() => handleCardClick(movie)}
//             >
//               <img src={movie.image} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 {/* <p className="card-text">{movie.genre}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div onClick={change}>
//           <div className="another-div card">
//             {selectedMovie ? (
//               <>
//                 <img src={selectedMovie.image} alt="" />
//                 <h2>{selectedMovie.title}</h2>
//                 <p>Genre: {selectedMovie.genre}</p>
//                 <p>Rating: {selectedMovie.rating}</p>
//               </>
//             ) : (
//               <p>No movie selected</p>
//             )}

//             <div>
//               <button className="btn btn-primary" >Go to Previous Page</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Movies;


import React, { useState } from "react";
import data from "../db.json";
import "./Movies.css";
import  MovieList  from "./MovieList";
import  MovieDetails  from "./MovieDetails";


const Movies = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedMovie = data.find((movie) => movie.id === selectedMovieId);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {!selectedMovieId ? (
        <MovieList movies={filteredMovies} handleCardClick={handleCardClick} />
      ) : (
        <MovieDetails movie={selectedMovie} />
      )}
    </>
  );
};

export default Movies;
