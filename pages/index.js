import bg from "../public/bg.jpg";

import pic from "../public/pic.png";
import Image from "next/image";
import Navbar from "../components/navbar";
import axios from "axios";
import btc from "../public/bitcoin.svg";
import eth from "../public/eth.svg";
import dog from "../public/dogecoin.svg";
import Head from 'next/head'


export default function Home() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://coinapi.p.rapidapi.com/v1/exchanges",
    headers: {
      "X-RapidAPI-Key": "8384663475msh5c9c9061e332b38p138057jsnaf946d40899b",
      "X-RapidAPI-Host": "coinapi.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
    <Head><title>Cryptito</title></Head>
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
                See more <i class="uil uil-arrow-down"></i>
              </button>
            </div>
            <div className="mt-[20px]">
              <a
                href="https://github.com/zaki031/Cryptito"
                className="p-4 border-4 text-md mt- rounded-xl hover:bg-dark_bg hover:text-light_bg text-dark_bg border-dark_bg"
              >
                Github repo <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="tswira h-85">
          <Image src={pic} width="800" height="200" className="h-85" />
        </div>
      </div>

      <div className="prices-container bg-hero">
        <div class="custom-shape-divider-bottom-1673602727 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill fill-light_bg"
            ></path>
          </svg>
        </div>
        <div className="w-full h-[100vh] justify-center text-center prices">
        <h1 className="text-5xl font-thin text-dark_bg ">
            Popular crypto currencies prices
          </h1>

          <div className="grid items-center  justify-center lg:grid-cols-3 gap-10 text-center place-items-center	 mt-[100px] cards">
            <div className="w-[350px] rounded border-2 border-dark_bg p-4 justify-center card bg-light_bg">
              <div className="flex gap-2 title ">
                <Image src={btc} width="30" height="30" />

                <h3>Bitcoin</h3>
              </div>
              <p>Price : 69k $</p>
            </div>
            <div className="w-[350px] rounded  border-2 border-dark_bg  p-4 justify-center card bg-light_bg">
              <div className="flex gap-2 title">
                <Image src={eth} width="20" height="20" />

                <h3>Ethereum</h3>
              </div>
              <p>Price : 1.03k $</p>
            </div>
            <div className="w-[350px] rounded border-2 border-dark_bg p-4 justify-center card bg-light_bg">
              <div className="flex gap-2 title">
                <Image src={dog} width="30" height="30" />

                <h3>Dogecoin</h3>
              </div>
              <p>Price : 0.1 $</p>
            </div>
          </div>
        </div>
        <div className="text-center latest-news">
          <h1 className="text-5xl font-thin text-dark_bg ">
            Latest crypto news
          </h1>

          <br />
          <div className="grid items-center  justify-center lg:grid-cols-3 gap-10 text-center place-items-center	 mt-[100px] news">

          <div className="rounded new border-dark_bg border-2 bg-light_bg w-[300px] p-4">
            <h3>
              bitcoin price increased again omg not expected at all no way
            </h3>
            <p>17/01/2023</p>
          </div>
          <div className="rounded new border-dark_bg border-2 place-content-center bg-light_bg w-[300px] p-4">
            <h3>
              bitcoin price increased again omg not expected at all no way
            </h3>
            <p>17/01/2023</p>
          </div>
          <div className="rounded new border-dark_bg border-2 place-content-center bg-light_bg w-[300px] p-4">
            <h3>
              bitcoin price increased again omg not expected at all no way
            </h3>
            <p>17/01/2023</p>
          </div>
          <div className="rounded new border-dark_bg border-2 place-content-center bg-light_bg w-[300px] p-4">
            <h3>
              bitcoin price increased again omg not expected at all no way
            </h3>
            <p>17/01/2023</p>
          </div>
          <div className="rounded new border-dark_bg border-2 place-content-center bg-light_bg w-[300px] p-4">
            <h3>
              bitcoin price increased again omg not expected at all no way
            </h3>
            <p>17/01/2023</p>
          </div>
          </div>
          <br /><br />
          
        </div>
      </div>
    </>
  );
}
