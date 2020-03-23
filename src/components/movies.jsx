import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import MovieTable from "./movieTable";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleListGroup = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = path => {
    console.log(path);
  };

  render() {
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            m => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;

    const paginated_movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        <div className="row m-2">
          <div className="col-3 m-2 myCSS">
            <ListGroup
              items={this.state.genres}
              onListGroup={this.handleListGroup}
              selectedGenre={this.state.selectedGenre}
            ></ListGroup>
          </div>
          <div className="col">
            <span>
              {filtered.length === 0
                ? "There is no Movie in the Database"
                : "There is " + filtered.length + " movies in the Database"}
            </span>

            <MovieTable
              paginated_movies={paginated_movies}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            ></MovieTable>

            <Pagination
              itemCounts={filtered.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              currentListItem={this.state.currentListItem}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
