import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

interface IAuth {   // interface for Auth context
  user: User | null;  // user object
  signUp: (email: string, password: string) => Promise<void>; // sign up function with email and password parameters  (promise)
  signIn: (email: string, password: string) => Promise<void>; // sign in function (email and password)  with email and password
  googleSignIn: () => Promise<void>;                          // sign in function with google
  logout: () => Promise<void>;                                // logout function  (sign out)  and clear local storage
  resetPassword: (email: string) => Promise<void>;            // reset password function (email)
  error: string | null;                                       // error message  (if any)  (null if no error)
  loading: boolean;                           // loading state (true if loading)  (false if not loading)
}

const AuthContext = createContext<IAuth>({    // Auth context creation  (context)
  user: null,                    // user object (null if no user) 
  signUp: async () => {},                        // sign up function (promise)
  signIn: async () => {},                 // sign in function (promise)
  googleSignIn: async () => {},            // sign in function with google (promise)
  logout: async () => {},                   // logout function (promise)
  resetPassword: async () => {},            // reset password function (promise)
  error: null,                              // error message (null if no error)
  loading: false,                           // loading state (true if loading) (false if not loading)
});

interface AuthProviderProps {
  children: React.ReactNode;    // Children of AuthProvider
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {    // onAuthStateChanged function call
        if (user) {
          // Logged in...
          setUser(user);  //  Set user
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);    //  Set user to null
          setLoading(true);
          router.push("/login");  //  Redirect to login page after successful sign up
        }

        setInitialLoading(false);
      }),
    [auth]
  );

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)   // Create user with email and password
      .then((userCredential) => {
        setUser(userCredential.user);   // Set user
        // router.push("/login");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)   // Sign in with email and password
      .then((userCredential) => {
        setUser(userCredential.user);
        // router.push("/characters");
        router.push("/home")
        setLoading(false);
      })
      .catch((error))
      .finally(() => setLoading(false));
  };

  const googleSignIn = async () => {
    setLoading(true);
    // Sign in using a popup.
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    // const result = await signInWithPopup(auth, provider);

    // // The signed-in user info.
    // const user = result.user;
    // // This gives you a Google Access Token.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    await signInWithPopup(auth, provider) // Sign in with google
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/characters");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }


  const logout = async () => {
    setLoading(true);

    signOut(auth)   // Logout
      .then(() => {
        router.push("/login");
        setUser(null);
        console.log("Logged out");
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)   // Send password reset email
  }

  const memoedValue = useMemo(      // Memoized value get value from local storage if there exists
    () => ({ user, signUp, signIn, googleSignIn, error, loading, logout, resetPassword }),
    [user, loading, error]
  );

  return (
    // Pass the memoed value to the context
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
export default function useAuth() {
  // Use the context to get the value
  return useContext(AuthContext);
}
