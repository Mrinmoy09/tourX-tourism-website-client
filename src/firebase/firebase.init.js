import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}

export default intializeAuthentication;