import React, { useState } from "react";
import sec_pic from "../public/pic.png";
import axios from "axios";
import { useEffect } from "react";
import Image from "next/image";
const trend = () => {
  const [trend_coins, SetTrend_coins] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        SetTrend_coins(res.data.coins);
        console.log(trend_coins);
      });
  }, []);

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
          <div className="trending mt-[5px]  rounded-md m-auto bg-white lg:w-[400px] sm:w-[200px] p-4">
            <div className="hightlight text-black flex justify-between">
              <h1>🔥 Trending</h1>
            </div>
            <div className="coins mt-[30px]">
              {trend_coins.map((item) => {
                return (
                  <div className="coin mb-2 mt-2 p-2 rounded-xl flex hover:p-4 bg-light_bg gap-[30px] justify-evenly">
                    <Image src={item.item.small} width={30} height={30}></Image>
                    <div className="name flex w-full text-left   ">
                        <div className="name_coin  w-[200px] ">
                             <h2>{item.item.id}</h2>

                        </div>
                      <div className="symbol text-center   ">
                        <p className=" text-sm text-white">
                          {item.item.symbol}
                        </p>
                      </div>
                    </div>

                  
                  
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default trend;
