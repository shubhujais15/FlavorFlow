import React, { useRef, useState } from 'react';
import Header from './Header.js';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/home");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/home");
        })
        .catch((error) => {
          setErrorMessage("User Not Registered");
        });
    }
  };

  const toggleisSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleInputChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  return (
    <div className="shadow-xl">
      <Header />
      <div className='mt-4 mx-2 rounded-lg shadow-md flex'>
        <img className='w-1/2 h-1/2 rounded-md' src="https://wallpapercave.com/wp/wp9919642.jpg" alt="background-img" />
        <h1 className='ml-40 mt-2 italic text-2xl text-pink-950'>Step into flavor. Sign in to enjoy your meal😊</h1>
      </div>

          
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-teal-600 p-8 top-[430px] ml-[1150px] transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 text-white bg-opacity-90 rounded-xl"
      >
        <h1 className="py-4 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="👤Full Name"
            className="p-2 my-3 w-full text-black bg-white rounded-md outline-transparent"
            onChange={handleInputChange}
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="✉️ Email Address"
          className="p-2 my-3 w-full text-black bg-white rounded-md outline-transparent"
          onChange={handleInputChange}
        />
        <input
          ref={password}
          type="password"
          placeholder="🔑 Password"
          className="p-2 my-3 w-full text-black bg-white rounded-md outline-transparent"
          onChange={handleInputChange}
        />

        <button
          className="p-2 my-5 ml-1 w-1/2 rounded-lg bg-zinc-700 hover:bg-zinc-800 active:scale-95 focus:outline-none"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {errorMessage && <p className="text-red-500 m-1 font-bold">{errorMessage}</p>}

        <div className="flex">
          <p className="mx-2">{!isSignInForm ? "Already Registered?" : "New to FlavorFLow?"}</p>
          <p className="cursor-pointer" onClick={toggleisSignInForm}>
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
