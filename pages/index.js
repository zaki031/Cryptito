import bg from "../public/bg.jpg";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump';

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
import Coins from '../components/coins'
import Image from "next/image";
import Navbar from "../components/navbar";
import Trend from "../components/trend";
import { Link as LinkS } from "react-scroll";
import Footer from "../components/footer"
import axios from "axios";
import btc from "../public/bitcoin.svg";
import eth from "../public/eth.svg";
import dog from "../public/dogecoin.svg";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [search, SetSearch] = useState("");
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  const dmm =()=>{
    scroll.scrollToTop()
   }
  
  
  return (
  
    (
      <div className="bg-white w-full">
        <Head>
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
          <title>Cryptito</title>
        </Head>
        <Slide top>
        <Navbar name="navbar"/>
        </Slide>

       
        <div className="lg:flex justify-between  text-white h-[90vh] landing bg-white" name="top">
          <div className="mt-[150px]   txt">
          <Fade top>

            <h1 className="mx-10 font-semibold text-7xl  text-dark_bg">
              Cryptito
            </h1>
            <p className="mx-10  mt-10 text-3xl text-dark_bg">
              For live crypto currency news and prices
            </p>
            </Fade>
<Slide left>
            <div className="lg:flex sm:block  mx-20  mt-10 gap-[80px] bh-w ">
              <div className="mt-[20px]  mx-[-40px] flex justify-between  lg:w-[500px] ">
                <LinkS
                  smooth={true}
                  to="trend"
                  className="text-md py-5 cursor-pointer px-4  hover:bg-brighter_main  lg:px-[80px] sm:px-[40px] text-dark_bg  see_more rounded-xl bg-main_color"
                >
                  See more <i className="uil uil-arrow-down "></i>
                </LinkS>
                <a className="text-md py-4 hover:bg-dark_bg px-4 border-4 hover:text-light_bg lg:px-[50px] sm:px-[30px] text-dark_bg  see_more rounded-xl border-dark_bg bg-transparent" href=" lg:flex sm:block">
                Github repo
              </a>
              </div>
              
              
            
              
            </div>
            </Slide>
          </div>

          <Slide right>
          <div className="tswira  h-85">
            <Image src={pic} width="600" height="50" className="z-50   m-auto h-55" />
          </div>
          </Slide>
        </div>

        
        <fade>
        
        <Trend name="trend" />
        
        </fade>
        <Jump>
        <button className="fixed right-4 bottom-4  text-white text-3xl rounded-[100%] p-3 bg-dark_bg" onClick={dmm}>
        <i class="uil uil-arrow-up"></i>
        </button>
        </Jump>
        <br /><br /><br />

        <Coins/>
        <Footer/>
      </div>

    )
  );
}
