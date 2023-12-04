import React from 'react'
import Image from 'next/image'
import gif from "../../../public/pic.png"
const hero = () => {
  return (
    <div className="lg:flex lg:mt-[250px] mt-[50px] justify-between">
      <div className="txt lg:max-w-[600px]">
        <h1 className='font-bold lg:text-4xl text-2xl'>The Fastest Way To <br/> Follow Crypto Market</h1>
        <p className='mt-[15px]  mb-[30px]'>Swiftly navigate crypto markets with real-time updates for informed decisions, your go-to platform for effortless cryptocurrency tracking.</p>
        <a href="#trend" className='py-[7.5px] px-[15px] w-[170px] shadow-lg bg-blue text-lg rounded-md text-light font-bold  '>Explore now</a>
      </div>


      <Image className='w-[300px] lg:-mt-[100px]' src={gif} width={400} height={400} alt="crypto image"/>
      
    </div>
  )
}

export default hero