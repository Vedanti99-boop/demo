 const MovieList = ({ movies, handleCardClick }) => {
    return (
      <div className="container">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card"
            style={{ width: "18rem" }}
            onClick={() => handleCardClick(movie.id)}
          >
            <img src={movie.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default MovieList