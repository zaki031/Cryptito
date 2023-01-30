import Navbar from "../../components/navbar";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
const coin = ({ data }) => {
  const [website,SetWebsite] = useState('')
  return (
    <div className="h-[100vh] ">
      <Navbar />
      <div className="bg-light_bg rounded-[10px] h-full p-2 m-4 coin_info">
        <div className="flex justify-between txt">
          <div className="flex title">
            <Image
              src={
                data.image.large
              }
              width={"150"}
              height={"50"}
            />
            <div className="dmm">
                          <h1 className="ml-3 margin-auto text-[70px]">{data.name}</h1>
                          <h4 className="ml-3">Genesis date  : {data.genesis_date}</h4>

            </div>
            <h4 className="h-6 px-3 margin-auto  mt-2 rounded-md text-light_bg bg-dark_bg">
              {data.symbol}
            </h4>
            
          </div>
         
          <div className="prices">
          <h1 className=" mr-[100px] text-[70px] font-bold">${data.market_data.current_price.usd}</h1>
          <h4 className="text-dark_bg "><span className="font-bold">Price in bitcoin :</span>  {data.market_data.current_price.btc} BTC</h4>
          <h4 className="text-dark_bg "><span className="font-bold">Price in ethereium :</span> {data.market_data.current_price.eth} ETH</h4>


          </div>

        </div>
        <div className="links mt-5 ">
            <a className="bg-dark_bg transition-[2s] hover:bg-hover_dark rounded-md text-white p-3" href={data.links.homepage[0]}>{data.links.homepage[0].replace('http://www.','').replace('https://www.')}</a>

            </div>
        
      </div>
    </div>
  );
};

export default coin;





export async function getServerSideProps({ params }) {
  const { id } = params;
 
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  const data = response.data;
  const nigger = data.links.homepage[0]
  console.log(nigger.replace('http://www.',''))

  return {
    props: {
      key: id,
      data,
      
    },
  };
}
