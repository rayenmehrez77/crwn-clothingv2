import React, { useState, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";
import Button from "../Button/Button";
import {
  createUserDocumentFromAuth,
  SigninAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/User.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetUserFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await SigninAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetUserFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
