import React from "react";

import FormInput from "../form-input/form.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUser } from "../../firebase/fireabase.utils";

import '../../styles/components/sing-Up/sing-up.styles.scss'
import "../../styles/components/custom-button/custom-button.styles.scss";

class SingUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don´t match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUser(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sing-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sing Up with your email and password</span>
        <form className="sing-up-form" onSubmit={this.handleSubmit}>
          
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label=" Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit"> SING UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SingUp;
