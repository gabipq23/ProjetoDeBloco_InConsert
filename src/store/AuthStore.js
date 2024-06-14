import { create } from 'zustand';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const useAuthStore = create((set) => ({
  user: null,
  login: async (email, password) => {
    try {
      const dadosUsuario = await signInWithEmailAndPassword(auth, email, password)
      const usuario = dadosUsuario.user
      set({ usuario })
    } catch (error) {
      console.log("Login failed:", error)
    }
  },
  logout: async () => {
    try {
      await signOut(auth)
      set({ user: null })
    } catch (error) {
      console.log("Logout failed:", error)
    }
  }
}))

export default useAuthStore