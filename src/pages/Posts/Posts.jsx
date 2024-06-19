import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import useAuthStore from '../../store/AuthStore';
import { Link } from 'react-router-dom';
import  {Card} from '../../components/Card/Card'
import styles from './Posts.module.css'
export function Posts(props){

  const [ posts, setPosts ] = useState([])
  const [ filtro, setFiltro ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ isLoading, setLoading ] = useState(true)

  const usuario = useAuthStore((state) => state.usuario);

  useEffect(() => {
    const fetchPosts = async () => {
      if (usuario) {
        try {
          const consultaDados = await getDocs(query(collection(db, "posts"), where("userId", "==", usuario.uid)))
          const dadosPosts = consultaDados.docs.map(doc => ({id:doc.id, ...doc.data()}))
          setPosts(dadosPosts)
        } catch (erro) {
          setMessage(erro.message)
        }finally{
          setLoading(false)
        }
      }
    }
    fetchPosts()
  }, [usuario])

  const removerPost = async(postId)=>{
    try {
      await deleteDoc(doc(db,'posts',postId))
      setPosts(posts => posts.filter(post => post.id !== postId))
      setMessage('post deletado')
    } catch(error){
      setMessage(error.message)
    }finally{
      setLoading(false)
    }
  }

  function filterPostsList(){
    if(!filtro){
      return posts
    } else {
      let palavra = filtro.toLowerCase()
      return posts.filter(post => {
        const artista = post.artista.toLowerCase()
        const local = post.local.toLowerCase()
        return artista.includes(palavra) || local.includes(palavra)})
    }
  }

  return (
    <div className={styles["container"]}>

    <div className={styles["title"]}>
      <h2>Posts</h2>
    </div>

    {isLoading && <div className={styles["loading"]} />}
    {message && <p>{message}</p>}

    {posts &&
    <div className={styles["filtro"]}>
      <label htmlFor='inputSearch'>Filtro: </label>
      <input value={filtro} onChange={(event) => setFiltro(event.target.value)} id='inputSearch' placeholder='Buscar um post'></input>
    </div>}

    {posts && filterPostsList().map((post) => 

      <Card key={post.titulo} post={post} onDeletePost={removerPost} />
      
      
    )}

   
    <div className={styles["buttonContainer"]}>
    <Link to='/addPost'>
      <button className={styles["buttonPlus"]}>+</button>
      </Link>
    </div>
    
    </div>
  )
}
export default Posts