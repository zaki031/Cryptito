import Navbar from "../../components/navbar";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
const coin = ({ data }) => {
  const [website,SetWebsite] = useState('')
  const clean = data.description.en.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="h-[100vh] ">
      <Navbar />
      <div className="bg-light_bg rounded-[10px] h-full p-2 m-4 coin_info">
        <div className=" txt">
          <div className="flex justify-center mt-10 title">
            <Image
              src={
                data.image.large
              }
              width={"100"}
              height={"50"}
            />
            <div className="dmm">
                          <h1 className="ml-3 margin-auto text-[70px]">{data.name}</h1>

            </div>
            <h4 className="h-6 px-3 margin-auto  mt-2 rounded-md text-light_bg bg-dark_bg">
              {data.symbol}
            </h4>
            
          </div>
          <br /><br />
         <div className="prices_container justify-center text-center  rounded-xl ">
              
          <div className="prices flex justify-evenly text-xl  text-dark_bg ">
          <h1 className="   font-bold"><span className="font-bold">Price in usd :</span>${data.market_data.current_price.usd}</h1>
          <h4 className=" "><span className="font-bold">Price in bitcoin :</span>  {data.market_data.current_price.btc} BTC</h4>
          <h4 className=""><span className="font-bold">Price in ethereium :</span> {data.market_data.current_price.eth} ETH</h4>


          </div><br />
          <div className='content flex rounded-xl shadow-md p-4 flex-col	 justify-evenly bg-dark_bg text-white text-center mx-auto  align-center max-w-[740px]'>
                    <table>
                        <thead>
                            <tr className="mb-5">
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>

                        <tbody>
                          
                            <tr className="border border-white border-t-1 border-l-0 border-r-0 border-b-0">
                                <td>{data.market_data?.price_change_percentage_1h_in_currency ? <p>{data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                    <br /><br />

                    <p>
                    {clean}
                        </p>
                </div>
         </div>
         

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
