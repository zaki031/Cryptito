import React from "react";
import Image from "next/image";
async function getCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  return res.json();
}

const all_coins = async () => {
  const data = await getCoins();
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-[450]">
        Cryptocurrency Prices by Market Cap
      </h2>
      <br />
      <div className="bg-[#fff] rounded-md p-[20px]">
        <div className="  grid grid-cols-4 lg:grid-cols-7  text-center bg-light font-semibold px-[20px] py-[10px] mb-[10px] rounded-lg">
          <p className="hidden lg:block">#</p>
          <p>image</p>
          <p>name</p>
          <p className="hidden lg:block">symbol</p>
          <p>current price</p>
          <p>24h%</p>
          <p className="hidden lg:block">market cap</p>
        </div>
        {data.map((item) => (
          <div key={item.market_cap_rank} className="shadow-sm grid text-center lg:grid-cols-7 grid-cols-4 justify-between  bg-light lg:px-[20px] py-[10px] mb-[10px] rounded-lg">
            <p  className="hidden lg:block">#{item.market_cap_rank}</p>
            <Image
              className="mx-auto"
              src={item.image}
              alt="coin_icon"
              width={25}
              height={25}
            />
            <p>{item.name}</p>
            <p className="hidden lg:block">{item.symbol}</p>
            <p>{item.current_price}$</p>
            <p
              className={
                item.price_change_percentage_24h > 0
                  ? "text-[#008000]"
                  : "text-[#FF0000]"
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="hidden lg:block">{item.market_cap}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default all_coins;
