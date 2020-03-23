import React from "react";
import { Link } from "react-router-dom";

const MovieTable = props => {
  const { paginated_movies } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => props.onSort("title")}>Title</th>
          <th onClick={() => props.onSort("genre.name")}>Genre</th>
          <th onClick={() => props.onSort("numberInStock")}>Stock</th>
          <th onClick={() => props.onSort("dailyRentalRate")}>Rate</th>
        </tr>
      </thead>
      <tbody>
        {paginated_movies.map(movie => (
          <tr key={movie._id}>
            <td>
              <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => props.onDelete(movie)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
