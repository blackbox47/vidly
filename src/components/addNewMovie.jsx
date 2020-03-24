import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { getMovies } from "./../services/fakeMovieService";

class AddNewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: ""
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .max(10)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(5)
      .required()
  };

  doSubmit() {
    /// call backend Services
    console.log("Add new movie page");
    // const movies = {
    //   _id: "5555b21ca3eeb7f6fbccd471821",
    //   title: "The Avengers+++++",
    //   genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    //   numberInStock: 7,
    //   dailyRentalRate: 3.5
    // };
    // saveMovie(movies);
    // console.log(getMovies());
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="m-4">
        {this.renderInput("title", "Title")}
        {this.renderInput("genre", "Genre")}
        {this.renderInput("numberInStock", "Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default AddNewMovie;
