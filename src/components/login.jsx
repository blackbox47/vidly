import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  doSubmit = () => {
    //// Call backend Services
    console.log("Login Form Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="m-4">
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default Login;
