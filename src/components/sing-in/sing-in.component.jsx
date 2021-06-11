import React from "react";
import FormInput from "../form-input/form.component";
import CustomButton from "../custom-button/custom.button.component";
import { signInWithGoogle } from "../../firebase/fireabase.utils";

import "../../styles/components/sing-in/sing-in.styles.scss";

class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sing-in">
        <h2> I already have an account</h2>
        <span>Sing In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit"> Sing In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {""} Sign in with Google {""}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SingIn;
