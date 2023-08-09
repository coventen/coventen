import { OAuthProvider, signOut, getAuth, signInWithRedirect,createUserWithEmailAndPassword, getRedirectResult } from "firebase/auth";
import { app } from "./fireabase.config";



const provider = new OAuthProvider('oidc.google');
const auth = getAuth(app);

export async function signInWithRedirectGoogle() {
    await signInWithRedirect(auth, provider);
}


// sign up with email and password
export async function signUpWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user.uid);
      return user;
    } catch (error: any) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  }







export async function syncUser() {
    const result = await getRedirectResult(auth);
    // After returning from the redirect when your app initializes you can obtain the result
    if (result) {
        // This will be only called once, as for the next time, it will return null
        // This is the signed-in user
        const user = result.user;
        // This gives you a Google Access Token.
        const credential = OAuthProvider.credentialFromResult(result);

        if (credential) {
            const token = credential.accessToken;
            const idToken = credential.idToken;
        }

    }

}






export function logout() {
    signOut(auth).then(() => {
    }).catch((error) => {
        // An error happened.
    });
}

// Returns current logged in user
export const currentUser = () => {
    return auth.currentUser;
}



