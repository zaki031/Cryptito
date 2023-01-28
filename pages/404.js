import Navbar from "../components/navbar";
import Image from "next/image";
const err = () => {
    return ( 
        <>
        <Navbar/>
        <div className="txt text-center text-dark_bg">
            <h1 className="text-9xl mt-[100px]">404 Error</h1>
        <h3 className="text-3xl">There is nothing here...</h3>
        </div>
        
        </>
     );
}
 
export default err;