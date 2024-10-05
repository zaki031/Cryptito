import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";

async function getTrending(){
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
    return res.json();
}

const trending = async () => {
    const data = await getTrending();
    return (
    <div>
        <h2 id="trend" className='text-3xl font-[450]'>Trending cryptocurrencies</h2>
        <br />
        <div  className="grid bg-[#fff] p-[20px] rounded-md grid-cols-1 lg:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  gap-4">
             { data.coins? 
            data.coins.map((item)=>(

                <Link href={"/"+item.item.id} key={item.item.id} className="grid relative lg:grid-cols-4 grid-cols-3  hover:-translate-y-[2px] hover:duration-500 shadow-sm bg-light px-[20px] py-[10px] mb-[10px] rounded-lg">
                    <Image src={item.item.small} width={50} height={50} />
                    <p className='text-sm hidden lg:block mt-[15px] '>#{item.item.market_cap_rank}</p>
                    <p className='my-auto  ' >{item.item.name}</p>
                    <p className='my-auto text-left text-[rgb(150,141,141)]'>/{item.item.symbol}/</p>
                    <FaAngleRight className='absolute  hidden lg:block right-2 top-[25px]' />

                </Link>
            ))
            : <p>loading</p>
        }
        </div>
       
    </div>
  )
}

export default trending