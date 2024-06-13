import { create } from 'zustand';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const useAuthStore = create((set) => ({
  user: null,
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      set({ user });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
}));

export default useAuthStore;