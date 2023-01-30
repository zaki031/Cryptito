import React from 'react'
import sec_pic from "../public/pic.png";
import Image from 'next/image';
const trend = () => {
  return (
    <>
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
    </>
  )
}

export default trend