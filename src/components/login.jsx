import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || "" });
    if (errors) return;

    //// Call backend Services
    console.log("Submitted");
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="m-4">
        <Input
          label="Username"
          name="username"
          value={this.state.account.username}
          onChange={this.handleChange}
          error={this.state.errors.username}
        />
        <Input
          label="Password"
          name="password"
          value={this.state.account.password}
          onChange={this.handleChange}
          error={this.state.errors.password}
        />
        <button
          disabled={this.validate()}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Login;

// <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             autoFocus
//             id="username"
//             name="username"
//             value={this.state.account.username}
//             onChange={this.handleChange}
//             ref={this.username}
//             type="text"
//             className="form-control"
//             placeholder="Enter username"
//           />
//         </div>
//         <div className="form-group">
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               name="password"
//               value={this.state.account.password}
//               onChange={this.handleChange}
//               ref={this.password}
//               type="password"
//               className="form-control"
//               placeholder="Password"
//             />
//           </div>
//         </div>
