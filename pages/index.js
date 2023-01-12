import bg from "../public/bg.jpg";
import pic from "../public/pic.png";
import Image from "next/image";
import Navbar from "../comps/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>    

    <div className="flex justify-between  text-white h-[100vh] landing bg-light_bg">
      <div className="mt-[150px] txt">
        <h1 className="mx-20 font-semibold text-9xl text-dark_bg">Cryptito</h1>
     <p className="mx-20 mt-10 text-3xl text-dark_bg">For live crypto currency news and prices</p>
     <div className="flex mx-20  mt-10 gap-[80px] bh-w ">
      <div className="">
      <button className="text-xl py-5 px-[80px]  see_more rounded-xl bg-main_color">See more <i class="uil uil-arrow-down"></i></button>

      </div>
      <div className="">
      <button className="p-4 text-xl border-4 rounded-xl hover:bg-dark_bg hover:text-light_bg text-dark_bg border-dark_bg">Github repo <i class="uil uil-arrow-up-right"></i></button>

      </div>

     </div>

      </div>
      <div className="tswira h-85">
      <Image src={pic}  width="800" height="200" className="h-85"/>

      </div>
      
      
    </div>


    </>
  );
}
