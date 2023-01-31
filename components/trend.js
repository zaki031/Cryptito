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
      <div className="trend-   flex bg-dark_bg ">
        <div className="trend bg-dark_bg  h-[650px] ">
          <div className="tswira h-85">
            <Image
              src={sec_pic}
              width="800"
              height="100"
              className="z-50 h-55"
            />
          </div>
        </div>
        <div className="text-center w-[50%]  ">
          <div className="trending mt-[125px] rounded-md m-auto bg-light_bg w-[400px] h-[400px] p-4">
            <div className="hightlight text-black flex justify-between">
              <h1>🔥 Trending</h1>
              
            </div>
            <div className="coins mt-[50px]">
                {trend_coins.map((item)=>{
                    return(
                        <div className="coin mb-2 mt-2 flex justify-between">
                            <Image src={item.item.small} width={30} height={30}></Image>
                            <div className="txt flex gap-3">
                                                            <h2>{item.item.id}</h2>
                                                            <p className="bg-dark_bg rounded-md px-2 text-white">{item.item.symbol}</p>

                            </div>
                            <a href="">
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
