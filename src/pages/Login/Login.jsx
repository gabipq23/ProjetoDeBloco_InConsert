import { useState } from 'react';
import { Navigate } from 'react-router-dom'; 
import useAuthStore from '../../store/AuthStore';
import styles from './Login.module.css'

export function Login() {

  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ loggedIn, setLoggedIn ] = useState(false)
  
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, senha)
    setLoggedIn(true)
  };

  if (loggedIn) {
    return <Navigate to="/profile" />
  }

  return (

    <div className={styles["container"]}>
     <div className={styles["center"]}>
        
        <div  className={styles["lateral"]}>
  
          <h1>Bem-vindo</h1>
          <div>
            <p>Faça login </p>
            <p>para continuar </p>
          </div>
  
          </div>
        <form onSubmit={handleSubmit} className={styles["container-login"]}>
            <div className={styles["container-img"]}>
              <img src='./src/assets/logo.png'></img>
            </div>
            <div className={styles["container-input"]}>
              <div className={styles["input-box"]}>
                <p>Email:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <div className={styles["input-box"]}>
                <p>Senha:</p>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Password"/>
            </div>
          </div>
          <div className="flex items-center justify-center m-2">
            <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login