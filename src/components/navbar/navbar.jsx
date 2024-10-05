import React from 'react'
import { FaGithub,FaMoon } from "react-icons/fa";
const navbar = () => {
  return (
    <div className='flex  justify-between mt-[10px]'>
        <a href="/" className='font-bold text-xl'>Cryptito</a>
        <div className="links  flex  gap-[10px] ">
            <button className='rounded-[50%] hidden text-[#fff] px-[8px] py-[7px] bg-[#000000]'><FaMoon />
            </button>
            <a href='https://github.com/zaki031/Cryptito' className="bg-[#000000] font-bold text-[#fff] text-base px-[8px] py-[3px] flex gap-[6px] rounded-md" >
                <FaGithub className='text-base mt-[3px]' />         
                github
                </a>
      

            
        </div>
            </div>
  )
}

export default navbar