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
    useEffect(() => {
      
    
      
    }, []),
    (
      <>
        <Head>
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
            <Image src={pic} width="800" height="50" className=" h-35" />
          </div>
        </div>

        <div className="prices-container bg-hero">
          <div className="custom-shape-divider-bottom-1673602727 z-[-50] ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill fill-transparent"
              ></path>
            </svg>
          </div>
          <div className="w-full h-[100vh] justify-center text-center prices">
            <h1 className="text-5xl font-thin text-dark_bg ">
              Popular crypto currencies prices
            </h1>

            <div className="h-[100vh] currencies_container bg-hero">
              <div className="text-center input ">
                <a
                  href={`/search/${search}`}
                  className="p-1 mr-2 text-white rounded bg-dark_bg"
                >
                  Search
                </a>

                <input
                  value={search}
                  onChange={(event) => SetSearch(event.target.value)}
                  type="text"
                  className="w-[500px] rounded mt-[100px] text-center"
                  placeholder="Search any crypto currency"
                />
              </div>
              <div className="items-center justify-center coins">
              <table class="table-fixed bg-transparent text-dark_bg w-full align-center place-center justify-center">
  <thead>
    <br />
    <hr class="h-px my-8 w-[10000px] bg-white border-0"/>

    <tr>
      <th></th>
      <th>Coin</th>
      <th>Price</th>
      <th>Market Cap</th>
    </tr>
    <hr class="h-px overflow-hidden	 my-8 w-[10000px] bg-white border-0 "/>

  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr >
    <hr class="h-px overflow-hidden	 my-8 w-[10000px] bg-white border-0 "/>


  </tbody>
</table>
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>
      </>
    )
  );
}
