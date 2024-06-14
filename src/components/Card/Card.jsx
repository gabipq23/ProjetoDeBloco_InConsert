import styles from './Card.module.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';

export function Card(props) {

  const post = props.post;
  const onDeletePost = props.onDeletePost

  const [counter,setCounter] = useState(0)
  const [liked,setLiked] = useState(false)

  const countLikes = () =>{
    if(liked){
      setCounter(counter-1)
    }else{
      setCounter(counter+1)
    }
    setLiked(!liked)
  }

  return (
    
    <div data-cy="post_card" className={styles["containerPosts"]}>
      <p><strong>Título: </strong>{post.titulo}</p>
      <p><strong>Artista: </strong>{post.artista}</p>
      <p><strong>Local: </strong>{post.local}</p>
      <p><strong>Data: </strong>{post.data}</p>
      <p><strong>Descrição: </strong>{post.descricao}</p>
      {post.userId === 'GQfmG0Arw5dnicvhpNXDQQwesHe2' ? <p><strong>Nome:</strong> Gabi</p> : <p><strong>Nome:</strong> Ana</p>}
  
      <div className={styles["icons"]}> 
        <span className={styles["iconItem"]}>
          <p>{counter}</p>
          <button onClick={countLikes}>
            {liked ? <FaHeart size='20px' /> : <FaRegHeart size='20px'/>}</button>
            
          </span>
        <span className={styles["iconItem"]}>
          <FaRegCommentDots size='20px' />
          </span>
        
        <button onClick={() => onDeletePost(post.id)}  className={styles["iconItem"]}><MdDeleteForever size='20px' /></button>
    
      </div>

    </div>
    
  )
}