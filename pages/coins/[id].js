import Navbar from "../../components/navbar";
import Image from "next/image";
const coin = () => {
  return (
    <div className="h-[100vh] ">
      <Navbar />
      <div className="bg-light_bg rounded-[10px] p-2 m-4 coin_info">
        <div className="flex justify-between txt">
          <div className="flex title">
            <Image
              src={
                "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              }
              width={"100"}
              height={"100"}
            />
            <h1 className="ml-3 text-[70px]">Bitcoin</h1>
            <h4 className="h-6 px-3 mt-2 rounded-md text-light_bg bg-dark_bg">
              BTC
            </h4>
          </div>
          <h1 className=" mr-[100px] text-[70px] font-bold">$22,955.44</h1>

        </div>
        
      </div>
    </div>
  );
};

export default coin;
