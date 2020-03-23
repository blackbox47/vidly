import React from "react";

const MovieForm = props => {
  return (
    <React.Fragment>
      <h1>Movie from {props.match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          props.history.replace("/movies");
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
