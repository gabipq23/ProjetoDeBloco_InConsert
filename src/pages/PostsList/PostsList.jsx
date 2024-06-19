import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import  {Card} from '../../components/Card/Card'
import styles from './PostList.module.css'

export function PostsList(props) {

  const [ posts, setPosts ] = useState([])
  const [ filtro, setFiltro ] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const consultaDados = await getDocs(collection(db, 'posts'))
        const dadosPosts = consultaDados.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setPosts(dadosPosts)
      } catch (error) {
        console.log('Erro ao buscar posts: ', error)
      }
    }
    fetchPosts()
  }, [])
  
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

    {/* {isLoading && <div className={styles["loading"]} />}
    {message && <p>Erro: {message}</p>} */}

    {posts &&
    <div className={styles["filtro"]}>
      <label htmlFor='inputSearch'>Filtro: </label>
      <input value={filtro} onChange={(event) => setFiltro(event.target.value)} id='inputSearch' placeholder='Buscar um post'></input>
    </div>}

    {posts && filterPostsList().map((post) => 
      <Card key={post.id} post={post} />
     
      
    )}
    

    </div>
  )
}
export default PostsList