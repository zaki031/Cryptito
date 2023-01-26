import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";

const coin = ({ data }) => {
    const [coins,SetCoins] = useState([])
    return ( 
        useEffect(()=>{
           

        },[]),
        <>
        <Navbar/>
        <h4>{data[0].id}</h4>



        


        
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
 
 
    return {
      props: {
        key: id,
        data,
        
      },
    };
  }
  