import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./Firebase"

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Google sign-in error: ", error);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Logout error: ' , error)
    }
}