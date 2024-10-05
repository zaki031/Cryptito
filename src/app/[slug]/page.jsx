"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const path = usePathname().replace("/","");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getCoinById() {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${path}`);
        const json = await res.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }
    getCoinById();
  }, []);

  return (
    <div className='bg-[#fff] p-[20px] rounded-md lg:mt-[250px] mt-[50px]'>
        { data?

        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
            <Image className='rounded-lg' src={data.image.large} width={100} height={100} alt="coin_img"></Image>
            <p className='bg-light text-black p-1 rounded-lg'>#{data.market_cap_rank}</p>

            <h1 className='font-extrabold text-xl'>{data.name}</h1>
            <p className='text-[#ccc] italic'>/{data.symbol}/</p>
            </div>
            <div className='flex gap-4'>
            <h2 className=''>Market cap : ${data.market_data.market_cap.usd}</h2>
            <h2 className=''>High 24h : <span className='text-[#008000]'>${data.market_data.high_24h.usd}</span></h2>
            <h2 className=''>Low 24h : <span className='text-[#FF0000]'>${data.market_data.low_24h.usd}</span></h2>
            </div>
            <h2 className='font-bold  text-3xl'>${data.market_data.current_price.usd}</h2>
            
        </div>
         : <p>loading</p>
        }
    </div>
  )
}