import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logoWithGoogle = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logoWithGoogle}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
