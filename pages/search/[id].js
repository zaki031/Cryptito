import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";

const coin = ({ data }) => {
    return ( 
        useEffect(()=>{
           

        },[]),
        <>
        <Navbar/>
        {
           data.map((item)=>
           {
            return(
                <div className="div">
                      <div className="grid items-center  justify-center lg:grid-cols-3 gap-10 text-center place-items-center	 mt-[100px] cards">
            <div className="w-[350px] rounded border-2 border-dark_bg p-4 justify-center card bg-light_bg">
              <div className="flex gap-2 title ">

                <h3>{item.id}</h3>
              </div>
              <p>Price : {item.price}</p>
            </div>
           
          </div>
                </div>
           )
           }

           
            
            
)
        }



        


        
        </>
     );
}
 
export default coin;




export async function getServerSideProps({ params }) {
    const { id } = params;
   
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${id}`
    );
    const data = response.data.coins;
    console.log(data[0])
 
 
    return {
      props: {
        key: id,
        data,
        
      },
    };
  }
  