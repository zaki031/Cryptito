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
    <div class="custom-shape-divider-top-1675418296 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill fill-main_color "></path>
    </svg>
</div>
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
        <div className="text-center bg-main_color my-auto  rounded-md pb-[40px] p-4 lg:w-[50%] sm:m-6:w-full  ">
          <div className="trending mt-[5px]  rounded-md  m-auto bg-white  lg:max-w-[400px] sm:max-w-[200px] p-4">
            <div className="hightlight text-black flex justify-between">
              <h1 className="text-2xl">🔥 Trending</h1>
            </div>
            <div className="coins mt-[40px]">
              {trend_coins.map((item) => {
                return (
                  <div className="hh">
                    <a href={`/coins/${item.item.id}`}>
                    <div
                      onclick="window.location.href='/coins/bitcoin/';"
                      className="coin cursor-pointer mb-2 mt-2 p-2 rounded-xl hover:shadow-md flex hover:p-2.5 transition-[.5s] bg-light_bg gap-[30px] justify-evenly"
                    >
                      <Image
                        src={item.item.small}
                        width={30}
                        height={30}
                      ></Image>
                      <div className="name flex w-full text-left   ">
                        <div className="name_coin  w-[150px] ">
                          <h2>{item.item.id}</h2>
                        </div>
                        <div className="symbol text-center   ">
                          <p className=" text-sm text-gray-500">
                            {item.item.symbol}
                          </p>
                        </div>
                      </div>
                      <div className="arrow">
                                              <i class="uil uil-angle-right-b"></i>

                      </div>
                    </div>
                    </a>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        

      </div>
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
    </>
  );
};

export default trend;
