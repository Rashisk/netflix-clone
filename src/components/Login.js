import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignedIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src= {BACKGROUND_IMG_URL}
          alt="logo"
          className="h-screen overflow-y-scroll scrollbar-hide md:w-screen"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/4 md:w-3/12 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-2 my-1 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-1 w-full bg-gray-700"
        />
        <p className="text-red-500 w-full ">{errorMessage}</p>
        <button
          className="p-2 my-3 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignedIn ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
