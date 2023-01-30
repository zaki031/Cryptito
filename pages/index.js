import bg from "../public/bg.jpg";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import pic from "../public/pic.gif";
import sec_pic from "../public/pic.png";

import Image from "next/image";
import Navbar from "../components/navbar";
import axios from "axios";
import btc from "../public/bitcoin.svg";
import eth from "../public/eth.svg";
import dog from "../public/dogecoin.svg";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [search, SetSearch] = useState("");
  const [coins, SetCoins] = useState([]);

  return (
    useEffect(() => {}, []),
    (
      <div className="bg-light_bg">
        <Head>
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
          <title>Cryptito</title>
        </Head>
        <Navbar />

        <div className="flex justify-between  text-white h-[90vh] landing bg-light_bg">
          <div className="mt-[150px] txt">
            <h1 className="mx-20 font-semibold text-9xl text-dark_bg">
              Cryptito
            </h1>
            <p className="mx-20 mt-10 text-3xl text-dark_bg">
              For live crypto currency news and prices
            </p>

            <div className="flex mx-20  mt-10 gap-[80px] bh-w ">
              <div className="">
                <button className="text-md py-5 px-[80px] text-dark_bg  see_more rounded-xl bg-main_color">
                  See more <i className="uil uil-arrow-down"></i>
                </button>
              </div>
              <div className="mt-[20px]">
                <a
                  href="https://github.com/zaki031/Cryptito"
                  className="p-4 border-4 text-md mt- rounded-xl hover:bg-dark_bg hover:text-light_bg text-dark_bg border-dark_bg"
                >
                  Github repo <i className="uil uil-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="tswira h-85">
            <Image src={pic} width="800" height="100" className="z-50 h-55" />
          </div>
        </div>
        <div className="trend-   flex bg-dark_bg "> 
          <div className="trend bg-hero  h-[650px] ">
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
              <div className="trending mt-[80px] rounded-md m-auto bg-light_bg w-[400px] h-[500px] p-4">
                <div className="hightlight text-black flex justify-between">
                  <h1>🔥 Trending</h1>
                  <a href="">
                    see more <i class="uil uil-angle-right-b"></i>
                  </a>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    )
  );
}
