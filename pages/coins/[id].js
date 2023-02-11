import Navbar from "../../components/navbar";
import Image from "next/image";
import axios from "axios";
import dollar from "../../public/dollar.png";
import { useState } from "react";
import Footer from '../../components/footer'
const coin = ({ data }) => {
  const [website, SetWebsite] = useState("");
  const clean = data.description.en.replace(/<\/?[^>]+(>|$)/g, "");
  console.log(data.market_data.price_change_percentage_1y_in_currency)

  return (
    
    <div className="h-[100vh] p-0 w-full">
      <Navbar />
      <div className="bg-light_bg shadow-xl rounded-[10px] p-2 w-full m-4 coin_info">
        <div className=" txt">
          <div className="flex justify-center mt-10 title">
            <div className="rank rounded-md bg-dark_bg text-white my-auto mr-[20px]  h-6 mt-10 px-3">
                          <h3 >#{data.market_cap_rank}</h3>

            </div>
            <Image src={data.image.large} width={"100"} height={"50"} />
            <div className="dmm">
              <h1 className="ml-3 margin-auto text-[40px] ">{data.name}</h1>
            </div>
            <h4 className="h-6 px-3 margin-auto  mt-2 rounded-md text-light_bg bg-dark_bg">
              {data.symbol}
            </h4>
          </div>
          <br />
          <br />
          <div className="prices_container justify-center text-center  rounded-xl ">
            <div className="prices lg:flex sm:block justify-evenly text-xl   text-dark_bg ">
              <div className="btc flex gap-4 mb-[10px]">
                <Image src={dollar} width="30" height="20"                   className="w-[30px] h-[30px]"
></Image>
                <h4 className="">
                  <span className="font-bold">Price in usd :</span>$
                  {data.market_data.current_price.usd}
                </h4>
              </div>
              <div className="btc flex gap-4 sm:mb-[10px]">
                <Image
                  src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
                  width="30"
                  height="20"
                  className="w-[30px] h-[30px]"

                ></Image>
                <h4 className=" ">
                  <span className="font-bold">Price in bitcoin :</span>{" "}
                  {data.market_data.current_price.btc} BTC
                </h4>
              </div>
              <div className="btc flex gap-4 sm:mb-[10px]">
                <Image
                  src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
                  width="30"
                  height="5"
                  className="w-[30px] h-[30px]"
                ></Image>
                <h4 className="">
                  <span className="font-bold">Price in ethereium :</span>{" "}
                  {data.market_data.current_price.eth} ETH
                </h4>
              </div>
            </div>
            <br />
           
            <div className="content lg:flex sm:block rounded-xl justify-evenly  p-4   text-white text-center  ">
              <div className="namosa max-w-[570px] overflow-auto">

              <div className="tbl my-auto  align-center text-2xl p-4 overflow-auto rounded-xl bg-dark_bg">
                <table className="">
                  <thead className="mb-5 ml-[40px]">
                    <tr>
                      <th>1h </th>
                      <th>24h </th>
                      <th>7d </th>
                      <th>14d </th>
                      <th>30d </th>
                      <th>1yr </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border  border-white border-t-1 border-l-0 border-r-0 border-b-0">
                      <td>
                        {data.market_data
                          ?.price_change_percentage_1h_in_currency ? (
                          <p>
                            {data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </td>
                      <td>
                        {data.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p className="ml-[30px]">
                            {data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </td>
                      <td>
                        {data.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p className="ml-[30px]">
                            {data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </td>
                      <td>
                        {data.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p className="ml-[30px]">
                            {data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </td>
                      <td>
                        {data.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p className="ml-[30px]">
                            {data.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </td>
                      <td>
                        {data.market_data.price_change_percentage_1y_in_currency.usd == undefined ? (
                          <p className="ml-[30px]">
                            {data.market_data.price_change_percentage_1y_in_currency.usd}
                            %
                          </p>
                        ) :<p className="ml-[30px]">
                        {data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}
                        %
                      </p> }
                      </td>
                    </tr>
                  </tbody>
                </table>
                

              </div>
              <br />
<div className="description bg-dark_bg  mb-[50px] rounded-xl text-white text-center p-4">
                <p>{clean}</p>
              </div>
              </div>
              <div className="nn bg-dark_bg max-h-[128px] rounded-xl">
                <div className="hh flex justify-evenly">
                  <div className="left block  p-4">
                    <div className="row   flex  p-3">
                      <h4 className="font-bold  mr-[10px]">24 Hour Low : </h4>
                      {data.market_data?.low_24h ? (
                        <p>${data.market_data.low_24h.usd}</p>
                      ) : null}
                    </div>
                    <div className="row flex ml-[14px] mr-[10px] ">
                      <h4 className="font-bold mr-[10px] ">24 Hour High : </h4>
                      {data.market_data?.high_24h ? (
                        <p>${data.market_data.high_24h.usd}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="right block border h-full border-white border-l-1 border-t-0 border-r-0 border-b-0 p-4 ">
                    <div className="row  p-3  flex  mb-[-13px] ">
                      <h4 className="font-bold mr-[10px]">Market Cap : </h4>
                      {data.market_data?.market_cap ? (
                        <p>${data.market_data.market_cap.usd}</p>
                      ) : null}
                    </div>
                    <div className="row flex  p-3  ">
                      <h4 className="font-bold mr-[10px]">
                        Circulating Supply :
                      </h4>
                      {data.market_data ? (
                        <p>{data.market_data.circulating_supply}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
              
              
            </div>
            
          </div>
        </div>
      </div>
      <br /><br />
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
  const nigger = data.links.homepage[0];
  console.log(data.market_data.price_change_percentage_1y_in_currency.usd)

  return {
    props: {
      key: id,
      data,
    },
  };
}
