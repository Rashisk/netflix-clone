import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
// rafce full form - React Arrow Function Component Export

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // After getting the information, we'll dispatch the action to add user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        // Dispatch an action to remove user
        dispatch(removeUser());
        // ...
      }
    });
  }, []);
  return (
    <div className="flex flex-col absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between">
          {showGptSearch && (
            <select
              className="text-white bg-gray-900 mx-2 my-3 py-1 px-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="p-2 m-2"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-3 px-2 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <div className="hidden md:flex flex-col">
            <img
              className="w-14 h-14 mx-3 my-1"
              src={USER_AVATAR}
              alt="usericon"
            />
            <p className="text-center font-bold text-white">
              {user?.displayName}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            type="button"
            className="font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
