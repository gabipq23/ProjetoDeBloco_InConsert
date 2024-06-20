import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import useAuthStore from '../../store/AuthStore';
import styles from './AddPost.module.css'

export function AddPost() {

  const [ titulo, setTitulo ] = useState('')
  const [ artista, setArtista ] = useState('')
  const [ descricao, setDescricao ] = useState('')
  const [ local, setLocal ] = useState('')
  const [ data, setData ] = useState('')

  const [ pontos, setPontos ] = useState(25)
  const [ likes, setLikes ] = useState(0)

  const usuario = useAuthStore((state) => state.usuario)

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        titulo: titulo,
        userId: usuario.uid ,
        userName: usuario.displayName ,
        artista:artista,
        descricao:descricao,
        local:local,
        data:data,
        pontos:pontos,
        likes:likes
      });
      setArtista('')
      setDescricao('')
      setLocal('')
      setData('')
      setTitulo('');
    } catch (error) {
      console.log("Erro: ", error)
    }
  };

  const adicionarPontos = () => {
    setPontos(25)
  }
  
  const handleClick = () =>{
    handleSubmit()
    adicionarPontos()
}

  return (
    <div className={styles["container"]}>

    <h1 className={styles["titulo"]}>Escreva aqui o seu novo post:</h1>


      <section className={styles["form"]} >

        <div className={styles["form-item"]}>
              <label htmlFor='titulo'>Titulo: </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          </div>

          <div className={styles["form-item"]}>
              <label htmlFor='artista'>Artista: </label>
              <input type="text" id='artista' value={artista} onChange={(e) => {setArtista(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='local'>Local: </label>
              <input type="text" id='local' value={local} onChange={(e) => {setLocal(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='data'>Data: </label>
              <input type="text" id='data' value={data} onChange={(e) => {setData(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='descricao'>Descricao: </label>
              <input type="text" className={styles["descricao"]} id='descricao' value={descricao} onChange={(e) => {setDescricao(e.target.value)}}></input>
            </div>

          <div className={styles["buttonContainer"]}>
        <button className={styles["buttonNew"]} onClick={handleClick}>Add Post</button>
        </div>

        </section>
    </div>
  )
}

export default AddPost