import { Link } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';
import { FaAward } from "react-icons/fa";
import { Accordion } from '../../components/Accordion/Accordion';
import { useState, useEffect } from 'react';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase';

export function Profile(){

  const usuario = useAuthStore((state) => state.usuario)
  const logout = useAuthStore((state) => state.logout)
  const [ numPosts, setNumPosts ] = useState(0)
  const [ pontos, setPontos ] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
      if(usuario){
      try {
        const consultaDados = await getDocs(query(collection(db, "posts"), where("userId", "==", usuario.uid)))
        const dadosPosts = consultaDados.docs.map(doc => ({id:doc.id, ...doc.data()}))
        setNumPosts(dadosPosts.length)
        let somaDePontos = 0
        for(let i=0;i<dadosPosts.length; i++){
          somaDePontos += dadosPosts[i].pontos || 0
        }
        setPontos(somaDePontos)
      } catch (error) {
        console.log('Erro: ', error)
      }
    }}

    fetchPosts()
  }, [])

  const handleLogout = async() => {
    await logout()
  }

  return (

  <div className="h-full">

    <div className="flex gap-5 flex-col items-center h-[280px] bg-[#EEE5EA] justify-center">

      <div className="flex gap-1 flex-col items-center">
        <div className="rounded-full w-20 h-20 bg-[#d6d6d6]" ></div> 
      <div className="flex gap-2 items-center p-2">
        <p className="text-[#25452E] text-lg">{usuario.displayName}</p>
        <FaAward  />
      </div>
      </div>

      <div className="flex gap-4 text-sm">
        <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
          <p className="text-[#CD168A]">{numPosts}</p>
          <p className="text-[#EE5DB6]">Posts</p>
        </div>

        <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
          <p className="text-[#CD168A]">{pontos}</p>
          <p className="text-[#EE5DB6]">Pontos</p>
        </div>

        <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
          <p className="text-[#CD168A]">2#</p>
          <p className="text-[#EE5DB6]">Ranking</p>
        </div>

      </div>

    </div>

    <div className="flex flex-col gap-4 justify-center p-4">

      <Accordion  />

    </div>
    <div className="flex flex-col gap-2">

      <Link to="/posts">
        <div className="flex items-center justify-center m-2">
          <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]">Ver Meus Posts</button>
        </div>
      </Link> 

      <Link to={'/'}>
        <div className="flex items-center justify-center m-2">
          <button onClick={handleLogout} className="bg-[#cd163ee1] hover:bg-[#cd163ecb] px-5 py-1 rounded-2xl text-[#EAEAEA]">Logout</button>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default Profile