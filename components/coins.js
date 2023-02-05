import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const coins = () => {
  const [coins, SetCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        SetCoins(res.data);
        coins.map((item)=>{
            if(item.price_change_percentage_24h<0){
                console.log("nikymak")
            }
        })
      });
  }, []);
  return (
    <div className="h-full text-center justify-center pb-[200px]  bg-dark_bg">

      <div class="custom-shape-divider-top-1675418067">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill fill-main_color"
          ></path>
        </svg>

      </div>
      <h1 className="text-6xl text-light_bg">Top Market Cap value coins</h1>
      <br /><br /><br />
       
      <div className="hh text-left mb-[20px] text-2xl rounded-xl py-2 w-[80%] m-auto text-dark_bg bg-light_bg flex gap-[100px] ">
              <div className="rank ml-[100px]  text-center">
              <h3>#</h3>

              </div>
              <div className="name ml-[150px]  text-center">
              <h3>Coin</h3>

              </div>

              <div className="price ml-[60px] text-center">
              <h3>Price</h3>
              </div>
              <div className="percentage  ml-[100px]    text-center">
                <h3>24%</h3>
              </div>
              <div className="marketcap ml-[50px] text-center">
               <h3>Market Cap</h3>

              </div>
              {/* 
              <td className="">{item.current_price}$</td>
                
               */}
</div>

      <div className="coins_container w-[80%] p-4  rounded-xl m-auto bg-light_bg ">
       
     

    
    {coins.map((item) => {
          return (


           
           <div className="hh text-left mb-[20px] text-2xl justify-evenly text-dark_bg flex gap-4 ">
              <div className="rank w-[30px] text-left ">
              <td className="">{item.market_cap_rank}</td>

              </div>
              <td><Image src={item.image} width="30" height="20"></Image></td>
              <div className="name w-[100px] text-left">
              <td className="" href="">{item.id}</td>

              </div>

              <div className="price w-[100px] text-left">
              <td className="">{item.current_price}$</td>
              </div>
              <div className="percentage text-white w-[150px] text-center flex  items center  justify-between mb-[15px] ">
              {item.price_change_percentage_24h>0?<div className="day"><a className=" w-[10rem]  text-center  text-green-500  "><i class="uil uil-angle-up"></i> {Math.round(item.price_change_percentage_24h * 100) / 100}%</a></div>:<div className="day"><a className=" text-red-500 w-[10rem] text-center"><i class="uil uil-angle-down"></i> {Math.round(item.price_change_percentage_24h * 100) / 100}%</a></div> }
              </div>
              <div className="marketcap w-[100px]">
                <td className="">{item.market_cap}$</td>

              </div>
              {/* 
              <td className="">{item.current_price}$</td>
                
               */}
</div>

          );
        })}
      
   

        
      </div>
    </div>
  );
};

export default coins;
