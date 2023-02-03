import React, { useEffect, useState } from 'react'
import axios from 'axios'

const coins = () => {
    const [coins,SetCoins] = useState([]);
    useEffect(()=>{

        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then((res)=>{
            SetCoins(res.data)
        })
    },[])
  return (
    <div className='h-full bg-dark_bg'>

<div class="custom-shape-divider-top-1675418067">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill fill-main_color"></path>
    </svg>
</div>

    {
        coins.map((item)=>{
            return(
                <div className="hh text-center flex gap-4 text-white">
                    <h3>{item.market_cap_rank}</h3>
                    <a href="">{item.id}</a>
                    <h4>{item.current_price}$</h4>
                    <h4>{item.market_cap}</h4>
                </div>
            )
        })
    }
    </div>
  )
}

export default coins