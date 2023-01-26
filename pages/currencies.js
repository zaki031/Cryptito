import Navbar from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const prices = () => {
  const [search, SetSearch] = useState("");
  const [coins, SetCoins] = useState([])
  

  return (
    useEffect(()=>{
        axios
        .get("https://api.coingecko.com/api/v3/coins/list")
        .then((res)=>{
            console.log(res.data)
            
        })
    },[]),
    <>
      <Navbar />

      <div className="h-[100vh] currencies_container bg-hero">
        <div className="text-center input ">
        <a href={`/search/${search}`} className="p-1 mr-2 text-white rounded bg-dark_bg">Search</a>

          <input
            value={search}
            onChange={(event) => SetSearch(event.target.value)}
            type="text"
            className="w-[500px] rounded mt-[100px] text-center"
            placeholder="Search any crypto currency"
          />
        </div>
        <div className="coins">
        <div className="grid items-center  justify-center lg:grid-cols-3 gap-10 text-center place-items-center	 mt-[100px] cards">
            <div className="w-[350px] rounded border-2 border-dark_bg p-4 justify-center card bg-light_bg">
              <div className="flex gap-2 title ">

                <h3>Bitcoin</h3>
              </div>
              <p>Price : 69k $</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default prices;
