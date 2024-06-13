import styles from './Card.module.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <p>Título: {post.title}</p>
        <p>Artista: {post.artista}</p>
        <p>Local: {post.local}</p>
        <p>Data: {post.data}</p>
        <p>Descrição: {post.descricao}</p>
        {post.userId === 'GQfmG0Arw5dnicvhpNXDQQwesHe2' ? <p>Nome: Gabi</p> : <p>Nome: Ana</p>}
   
        <div className={styles["icons"]}> 
            <span className={styles["iconItem"]}>
              <p>{counter}</p>
              <button onClick={countLikes}>
                {liked ? <FaHeart size='20px' /> : <FaRegHeart size='20px'/>}</button>
                
              </span>
            <span className={styles["iconItem"]}>
              <FaRegCommentDots size='20px' />
              </span>
            <Link to={post.id}>
            <button   className={styles["iconItem"]}><CgDetailsMore size='20px' /></button>
            </Link>
            <button onClick={() => onDeletePost(post.id)}  className={styles["iconItem"]}><MdDeleteForever size='20px' /></button>
        
         </div>

      </div>
    
  )
}