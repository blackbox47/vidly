import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Registration extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .required(),
    name: Joi.string().required()
  };

  doSubmit() {
    /// call backend Services
    console.log("Registration Form Submitted");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="m-4">
        {this.renderInput("username", "Username", "autoFocus")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default Registration;
