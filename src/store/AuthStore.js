import { create } from 'zustand';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const useAuthStore = create((set) => ({
  user: null,
  signUp: async (email, password, nome) => {
    try{
      const novoUsuario = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(novoUsuario.user, {displayName: nome})
      set({user: novoUsuario.user})
    }catch(error){
      console.log(error)
    }
  },
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