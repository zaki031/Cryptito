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

import Image from "next/image";
import Navbar from "../components/navbar";
import Trend from "../components/trend";
import { Link as LinkS } from "react-scroll";

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
      <div className="bg-white w-full">
        <Head>
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
          <title>Cryptito</title>
        </Head>
        <Navbar />

        <div className="flex justify-between  text-white h-[90vh] landing bg-white">
          <div className="mt-[150px]   txt">
            <h1 className="mx-20 font-semibold text-5xl text-dark_bg">
              Cryptito
            </h1>
            <p className="mx-20  mt-10 text-3xl text-dark_bg">
              For live crypto currency news and prices
            </p>

            <div className="lg:flex sm:block  mx-20  mt-10 gap-[80px] bh-w ">
              <div className="mt-[20px] gap-[10px] flex  w-[200px] ">
                <LinkS
                  smooth={true}
                  to="trend"
                  className="text-md py-5   hover:bg-brighter_main  lg:px-[80px] sm:px-[40px] text-dark_bg  see_more rounded-xl bg-main_color"
                >
                  See more <i className="uil uil-arrow-down "></i>
                </LinkS>
                <a className="text-md py-4 hover:bg-dark_bg border-4 hover:text-light_bg lg:px-[50px] sm:px-[30px] text-dark_bg  see_more rounded-xl border-dark_bg bg-transparent" href="">
                Github repo
              </a>
              </div>
              
              
              
            </div>
          </div>
          <div className="tswira  h-85">
            <Image src={pic} width="600" height="50" className="z-50  h-55" />
          </div>
        </div>

        <Trend name="trend" />
      </div>
    )
  );
}
