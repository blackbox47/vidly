import React, { Component } from "react";
import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/not-found";
import Login from "./components/login";
import Registration from "./components/registration";
import AddNewMovie from "./components/addNewMovie";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <NavBar></NavBar>
        <Switch>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/movies/new" component={AddNewMovie}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movie}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies"></Redirect>
          {/* <Route path="/" exact component={Movie}></Route> */}
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    );
  }
}

export default App;
