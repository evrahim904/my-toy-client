import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserData = (user,name,photo) =>{
        
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log("user updated")
        })
        .catch(error =>{
            console.log(error)
        })
    }
    const signIn = (email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)

        return signOut(auth)
    }
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.log(error))
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("current user", currentUser);
            setLoading(false)

        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserData,
        signIn,
        signInWithGoogle,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;