
 const MovieDetails = ({ movie }) => {
    return (
      <div className="another-div card">
        {movie ? (
          <>
            <img src={movie.image} alt="" />
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
          </>
        ) : (
          <p>No movie selected</p>
        )}
        <div>
          <button className="btn btn-primary">Go to Previous Page</button>
        </div>
      </div>
    );
  };

  export default MovieDetails