
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading , setLoading] = useState(true)



const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth, email, password)
}

const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
   setLoading(true)
    return signOut(auth)
}

const googleLogin=(googleProvider)=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider )
}
const githubLogin=(githubProvider)=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider )
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        // console.log("user in the", currentUser);
        setUser(currentUser)
        setLoading(false)
        
    })
    return () => {
        unSubscribe();
    }
}, [])

    const allInfo={
        createUser,
        googleLogin,
        githubLogin,
        signIn,
        logOut,
        user,
        loading,





    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;