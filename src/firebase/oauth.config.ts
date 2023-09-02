import { OAuthProvider, signOut, getAuth, signInWithRedirect,createUserWithEmailAndPassword,signInWithEmailAndPassword, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { app } from "./fireabase.config";



const provider = new OAuthProvider('oidc.google');
export const auth = getAuth(app);

export let authLoading = false;

export async function signInWithRedirectGoogle() {
  try {
    authLoading=true;
      await signInWithRedirect(auth, provider);
  } catch (error: any) {
      console.error("Error signing in with Google:", error.message);
      throw error;
  } finally {
    authLoading=false
  }
}

export async function signUpWithEmailAndPassword(email: string, password: string) {
  try {
    authLoading=true;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user.uid);
      return user;
  } catch (error: any) {
      console.error("Error creating user:", error.message);
      throw error;
  } finally {
    authLoading=false
  }
}

export async function logInWithEmailAndPassword(email: string, password: string) {
  try {
    authLoading=true;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed in:", user.uid);
      return user;
  } catch (error: any) {
      console.error("Error signing in:", error.message);
      throw error;
  } finally {
    authLoading=false
  }
}

export async function syncUser() {
  try {
    authLoading=true;
      const result = await getRedirectResult(auth);
      if (result) {
          const user = result.user;
          const credential = OAuthProvider.credentialFromResult(result);

          if (credential) {
              const token = credential.accessToken;
              const idToken = credential.idToken;
          }
      }
  } catch (error: any) {
      console.error("Error syncing user:", error.message);
  } finally {
    authLoading=false
  }
}

export const currentUserData =  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
   return user.email
  } else {
    // User is signed out
    // ...
  }
});


export function logout() {
    signOut(auth).then(() => {
    }).catch((error: any) => {
        // An error happened.
    });
}

// Returns current logged in user
export const currentUser = () => {
    return auth.currentUser;
    
}



