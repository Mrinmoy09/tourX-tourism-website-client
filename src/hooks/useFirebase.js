import { useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import intializeAuthentication from "../firebase/firebase.init";


intializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  const ClearError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  // clear error
  useEffect(() => {
    ClearError();
  }, [error]);

  //google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };


  //signInWithEmailAndPassword
  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setError(err.message));
  };



  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  // get password
  const getPhotoURL = (e) => {
    setPhotoURL(e?.target?.value);
  };

  // signUp
  const signUpWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
    // sign out
    const logOut = () => {
      signOut(auth)
        .then((result) => {
          setUser({});
        })
        .catch((err) => {
          setError(err.message);
        });
    };

  // update name and email
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }).then((result) => {});
  };

  // sendVilifiedEmail
  function sendVilifiedEmail() {
    sendEmailVerification(auth.currentUser).then((result) => {
      alert(
        `Please verify your email, a verification email has been sent to ${email}`
      );
    });
  }

  return {
    sendVilifiedEmail,
    setUserName,
    sendEmailVerification,
    signInWithGoogle,
    user,
    setUser,
    error,
    auth,
    setError,
    logOut,
    getEmail,
    getPassword,
    signUpWithEmail,
    signInWithEmail,
    getName,
    getPhotoURL,
    isLoading,
    setIsLoading
  };
};

export default useFirebase;