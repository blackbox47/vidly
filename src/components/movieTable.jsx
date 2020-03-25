import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";

class MovieTable extends Component {
  renderSortIcon = column => {
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };

  handleLike = movie => {
    const movies = [...this.props.paginated_movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { paginated_movies } = this.props;
    return (
      <table className="table">
        <thead>
          <tr className="myCSS">
            <th onClick={() => this.props.onSort("title")}>
              Title {this.renderSortIcon("title")}
            </th>
            <th onClick={() => this.props.onSort("genre.name")}>Genre</th>
            <th onClick={() => this.props.onSort("numberInStock")}>Stock</th>
            <th onClick={() => this.props.onSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
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
              <td className="myCSS">
                <Like
                  like={movie.liked}
                  onClick={() => this.handleLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(movie)}
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
  }
}

export default MovieTable;

// const MovieTable = props => {
//   const { paginated_movies } = props;
//   return (
// <table className="table">
//   <thead>
//     <tr>
//       <th onClick={() => props.onSort("title")}></th>
//       <th onClick={() => props.onSort("genre.name")}>Genre</th>
//       <th onClick={() => props.onSort("numberInStock")}>Stock</th>
//       <th onClick={() => props.onSort("dailyRentalRate")}>Rate</th>
//     </tr>
//   </thead>
//   <tbody>
//     {paginated_movies.map(movie => (
//       <tr key={movie._id}>
//         <td>
//           <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
//         </td>
//         <td>{movie.genre.name}</td>
//         <td>{movie.numberInStock}</td>
//         <td>{movie.dailyRentalRate}</td>
//         <td>
//           <button
//             onClick={() => props.onDelete(movie)}
//             className="btn btn-sm btn-danger"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
//   );
// };
// export default MovieTable;
