import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'; 
import { useState } from 'react';
import styles from './SignUp.module.css'
import useAuthStore from '../../store/AuthStore';

export default function SignUp() {

    const formik = useFormik({
        initialValues:{
            nome:'',
            username:'',
            email:'',
            senha:'',
            confirmaSenha:''
        },
        validationSchema: Yup.object({
            nome: Yup
            .string()
            .min(2, '2 carac')
            .max(40, '40 carac')
            .required('obrigatorio'),
          username: Yup
            .string()
            .lowercase('so minuscula')
            .min(3, '3 carac')
            .max(16, '16 carac')
            .required('obrigatorio'),
          email: Yup.string().email('deve ser um email').required('obrigatorio'),
          senha: Yup
            .string()
            .min(6, '6 carac')
            .max(30, '30 carac')
            .required('obrigatorio'),
        confirmaSenha: Yup
            .string()
            .oneOf([Yup.ref('senha'), null], 'deve ser igual')
            .required('obrigatorio'),
        }),
        onSubmit: function(values, {resetForm}){
            resetForm({values:''})
        }

    })
    const signUp = useAuthStore((state) => state.signUp)
  const [ 
    registered, 
    setRegistered ] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, senha, nome } = formik.values
        await signUp(email,senha,nome)
        setRegistered(true)
        alert('Cadastro realizado com sucesso!')
    }

    if(registered) {
        return <Navigate to='/login' />
    }

  return (
    <div className={styles["container"]}>
      <div className={styles["center"]}>
        
      <div  className={styles["lateral"]}>

        <h1>Criar nova conta</h1>
        <div>
          <p>O universo dos shows </p>
          <p>esta ansioso pela sua chegada! </p>
        </div>

        </div>
        <form className={styles["container-signup"]} onSubmit={handleSubmit}>
        
        <div className={styles["container-input"]}>
          <div className={styles["input-box"]}>
            <label>Nome:</label>
            <input id='nome' type='text' value={formik.values.nome} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.nome && formik.errors.nome ? <div>{formik.errors.nome}</div> : null}
            </div>
            <div className={styles["input-box"]}>
            <label>Username:</label>
            <input id='username' type='text' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
            </div>
            <div className={styles["input-box"]}>
            <label>Email:</label>
            <input id='email' type='text' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className={styles["input-box"]}>
            <label>Senha:</label>
            <input id='senha' type='password' value={formik.values.senha} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.senha && formik.errors.senha ? <div>{formik.errors.senha}</div> : null}
            </div>
            <div className={styles["input-box"]}>
            <label>Confirma senha:</label>
            <input id='confirmaSenha' type='password' value={formik.values.confirmaSenha} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.confirmaSenha && formik.errors.confirmaSenha ? <div>{formik.errors.confirmaSenha}</div> : null}
            </div>
        
            <div className="flex items-center justify-center m-2">
                <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]" type="submit">Cadastrar</button>
              </div>
            </div>
        </form>
      </div>
       
    </div>
  )
}
