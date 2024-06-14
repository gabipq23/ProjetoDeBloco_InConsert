import { FiAward } from "react-icons/fi";
import { FaRankingStar } from "react-icons/fa6";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    <div className="h-full"> 
      <div className="bg-[url('./src/assets/home1.jpg')] bg-cover bg-center flex flex-col justify-between gap-14">
          <div className="flex flex-col p-15 items-center text-xl"> 
              <p className="font-semibold pt-16 text-[#C6007D] text-2xl">In Consert</p> 
              <p className="text-[#25452E]">a nova plataforma gamificada</p>
              <p className="text-[#25452E]">sobre shows</p>
              <p className="text-[#25452E]">no Brasil</p>
          </div>

          <div className="flex gap-4 p-6 items-center justify-center">
              <div className="bg-[#F0D6E6] rounded-md text-center flex items-center  p-4 w-[220px] text-sm shadow h-24">
                  <p>Conecte-se com outros apaixonados por música</p>
              </div>
              <div className="bg-[#F0D6E6] rounded-md flex items-center text-center p-4 w-[200px] text-sm shadow h-24">
                  <p>Compatilhe as suas experiências</p>
              </div>
          </div>

      </div>


      <div className="flex items-center justify-center">
          <div className="bg-[#D2F0DB] p-5 m-3 rounded-md text-center flex flex-col items-center justify-center gap-8" >
      
              <div className="bg-[#EAFDF0] p-4 rounded-2xl shadow">
                  <p>Acumule pontos com as suas publicações, comentários e curtidas</p>

              </div>

              <div className="p-2">
                  <p className="flex items-center justify-center gap-2">Destaque-se na lista de ranking <FaRankingStar className="text-[#C6007D] "/> </p> 
                  <p className="flex items-center justify-center gap-2">e concorra a prêmios < FiAward className="text-[#C6007D]" /></p>
              </div>

              <div className="bg-[#EAFDF0] p-4 rounded-2xl shadow">
                  <p>Quer fazer parte desse show?</p>
                  <div className="flex items-center justify-center m-2">

                  <Link to='/login'>                                
                      <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]">Login</button>
                  </Link>
                        
                  </div>
              </div>
          </div>
      </div>

    </div> 
  )
}
