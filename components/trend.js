import React, { useState } from "react";
import sec_pic from "../public/pic.png";
import axios from "axios";
import { useEffect } from "react";
import Image from "next/image";
const trend = () => {
  const [trend_coins, SetTrend_coins] = useState([])
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {

        SetTrend_coins(res.data.coins)
        console.log(trend_coins)
      });
  },[]);

  return (
    <>
      <div className="trend sm:block  w-full  lg:flex bg-main_color ">
        <div className="trend bg-main_color  lg:h-[650px] sm:h-[500px] ">
          <div className="tswira h-85">
            <Image
              src={sec_pic}
              width="800"
              height="50"
              className="z-50 h-55"
            />
          </div>
        </div>
        <div className="text-center bg-main_color my-auto  rounded-md  lg:w-[50%] sm:m-6:w-full  ">
          <div className="trending mt-[5px]  rounded-md m-auto bg-light_bg lg:w-[400px] sm:w-[200px] p-4">
            <div className="hightlight text-black flex justify-between">
              <h1>🔥 Trending</h1>
              
            </div>
            <div className="coins mt-[30px]">
                {trend_coins.map((item)=>{
                    return(
                        <div className="coin mb-2 mt-2 flex justify-between">
                            <Image src={item.item.small} width={30} height={30}></Image>
                            <div className="name flex justify-evenly w-full">
                                                                                            <h2>{item.item.id}</h2>
<div className="symbol text-center   ">
                                                                                            <p className="bg-dark_bg rounded-md px-2 text-white">{item.item.symbol}</p>

                            </div>
                            </div>
                            

                            <a className="hover:bg-dark_bg p-2 transition-[0.5s] hover:text-white rounded-[50%]" href={`/coins/${item.item.id}`}>
               <i class="uil uil-angle-right-b"></i>
              </a>


                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default trend;
