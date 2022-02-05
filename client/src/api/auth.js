import { API_URL } from "./apiConfig";
import {
    auth,
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
} from "./firebase-service";

export const fetchData = async (routes) => {
    const res = await fetch(API_URL + routes)
    return res.json()
}

export const login = async (event) => {
    event.preventDefault();
    const [email, password] = event.target;
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    if (userCredential.user) {
        console.log(`LoggedIn as ${userCredential.user.email}`);
        return true
    }
    return false
}

export const signup = async (event) => {
    event.preventDefault();
    const [email, password] = event.target;
    const userCredential = await signUpWithEmailAndPassword(auth, email.value, password.value);
    if (auth.currentUser) {
        console.log(`LoggedIn as ${userCredential.user.email}`);
        return true
    }
    return false
}

export const getUser = () => {
    return auth.currentUser;
}

export const getAuth = () => {
    return auth;
}

export const checkIfAuthenticated = () => {
    const userToken = auth.currentUser.getIdToken();
}