import Navbar from "../components/navbar"
import axios from "axios";
import { useEffect } from "react";
const news = () => {
    useEffect(()=>{
        const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {q: 'crypto', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '8384663475msh5c9c9061e332b38p138057jsnaf946d40899b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    },[])
    return (  
        <>
        <Navbar/>
        </>
    );
}
 
export default news;