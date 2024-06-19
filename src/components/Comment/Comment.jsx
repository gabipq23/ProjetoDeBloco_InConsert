// import  { useEffect, useState } from "react";
// import { db } from '../../firebase';
// import useAuthStore from '../../store/AuthStore';
// import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";


// export default function Comment({id}) {

//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   const usuario = useAuthStore((state) => state.usuario)
//   const commentInfo = doc(db,"posts", id)
//   useEffect(() => {
//     const docInfo = doc(db, "posts", id)
//     onSnapshot(docInfo, (snapshot) => {
//       setComments(snapshot.data().comments)
//     })
//   }, [])

//   const handleComment = (e) => {
//     e.preventDefault()
//     if(e.key === 'Enter'){
//     updateDoc(commentInfo, {
//       comments: arrayUnion({
//         user:usuario.uid,
//         userName:usuario.displayName,
//         comment:comment,
//         createdAt:new Date(),
//         commentId: comments.length() + 1
//       }),
//     }).then(() => {
//       setComment('')
//     }) 
//   }

//   }
//   return (
//     <div>
//       {comments && 
//         comments.map(({commentId, comment, userName, createdAt}) => (
//           <div key={commentId}>

//             <p>{userName}</p>
//             <p>{createdAt}</p>
//             <p>{comment}</p>

//           </div>
//         ))
//       }

//       {usuario && (
//         <div>

// <label>Novo comentário: </label>
//           <input onKeyUp={(e) => handleComment(e)} type="text" value={comment} onChange={(e) => {setComment(e.target.value)}}></input>
      
//         </div>
//       )}
      
//     </div>
//   )
// }
