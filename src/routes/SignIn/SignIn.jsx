import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logoWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <Button onClick={logoWithGoogle} buttonType="google">
        Sign in with google
      </Button>
      {/* <Button onClick={signInWithGoogleRedirect} buttonType="inverted">
        Sign in with google redirect{" "}
      </Button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
