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
        coins.map((item) => {
          if (item.price_change_percentage_24h < 0) {
            console.log("nikymak");
          }
        });
      });
  }, []);
  return (
    <div className="h-full text-center justify-center pb-[200px] pt-[50px] bg-dark_bg">
      
      <h1 className="lg:text-6xl sm:text-5xl text-light_bg">Top Market Cap value coins</h1>
      <br />
      <br />
      <br />

      <div className="hh  mb-[20px] lg:text-2xl sm:text-2xl rounded-xl justify-evenly pt-2 w-[80%] m-auto text-dark_bg bg-light_bg flex lg:gap-[50px] ">
      <div className="rank   lg:ml-[20px] text-center hidden sm:block ">
                <td className="">#</td>
              </div>
              <td className="text-light_bg hidden sm:block">
                img
              </td>
              <div className="name  text-center">
                <td className="" href="">
                  Coin
                </td>
              </div>

              <div className="price  text-center">
                <td className="">Price</td>
              </div>
              <div className="percentage   text-center flex  items center  justify-between mb-[15px] ">
               <td>24h%</td>
              </div>
              <div className="marketcap  text-center hidden   sm:block ">
                <td className="">Market Cap</td>
              </div>
      
      </div>

      <div className="coins_container max-w-[80%] p-4   text-sm rounded-xl m-auto bg-light_bg ">
        {coins.map((item) => {
          return (
            <div className="coins_container justify-evenly overflow-auto"><a href={`/coins/${item.id}`}>
                <div className="hh text-left scroll-m-1 mb-[20px] lg:text-2xl justify-evenly hover:bg-gray-100 pt-2  rounded-xl text-dark_bg flex gap-4 ">
              <div className="rank w-[30px] text-center ">
                <td className="">{item.market_cap_rank}</td>
              </div>
              <td>
                <Image src={item.image} width="30" height="30"></Image>
              </td>
              <div className="name w-[100px] text-center">
                <td className="" href="">
                  {item.id}
                </td>
              </div>

              <div className="price  w-[50px] text-center">
                <td className="">{item.current_price}$</td>
              </div>
              <div className="percentage text-white w-[150px] text-center flex  items center  justify-between mb-[15px] ">
                {item.price_change_percentage_24h > 0 ? (
                  <div className="day">
                    <a className=" w-[10rem]  text-center  text-green-500  ">
                      <i class="uil uil-angle-up"></i>
                      {Math.round(item.price_change_percentage_24h * 100) / 100}
                      %
                    </a>
                  </div>
                ) : (
                  <div className="day ">
                    <a className=" text-red-500 w-[10rem]  text-center">
                      <i class="uil uil-angle-down"></i>
                      {Math.round(item.price_change_percentage_24h * 100) / 100}
                      %
                    </a>
                  </div>
                )}
              </div>
              <div className="marketcap w-[80px] hidden sm:block ">
                <td className="">{item.market_cap}$</td>
              </div>
              {/* 
              <td className="">{item.current_price}$</td>
                
               */}
            </div>
            </a></div>
            
          );
        })}
      </div>
    </div>
  );
};

export default coins;
