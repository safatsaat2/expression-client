import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"

const AuthProvider = ({children}) => {

    const AuthContext = createContext();
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            return unsubscribe;
        }
    }, [auth])


    const authInfo = {
        user,
        loading,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;