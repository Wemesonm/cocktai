import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { FIREBASE_AUTH } from "../services/firebaseConfig";

export function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {user};
}
