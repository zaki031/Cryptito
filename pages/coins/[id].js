import Navbar from "../../components/navbar";
import Image from "next/image";
import axios from "axios";
const coin = ({ data }) => {
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
              width={"100"}
              height={"100"}
            />
            <h1 className="ml-3 text-[70px]">{data.name}</h1>
            <h4 className="h-6 px-3 mt-2 rounded-md text-light_bg bg-dark_bg">
              {data.symbol}
            </h4>
            
          </div>
         
          <div className="prices">
          <h1 className=" mr-[100px] text-[70px] font-bold">${data.market_data.current_price.usd}</h1>
          <h4 className="text-dark_bg ">{data.market_data.current_price.btc} BTC</h4>
          <h4 className="text-dark_bg ">{data.market_data.current_price.eth} ETH</h4>


          </div>

        </div>
        <div className="links ">
            <a className="bg-dark_bg rounded-md text-white p-3" href="bitcoin.org">bitcoin.org</a>

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
  console.log(data.market_data.current_price.aed)

  return {
    props: {
      key: id,
      data,
      
    },
  };
}
