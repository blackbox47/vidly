import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.label}
        type="text"
        className="form-control"
        ref={props.reference}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
      {/* {props.error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default Input;
