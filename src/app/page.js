import Image from 'next/image'
import Hero from "../components/hero/hero"
import Trend from "../components/trending/trending"
import Coins from "../components/all_coins/all_coins"

import vector from "../../public/vector.png"

export default function Home() {
  return (
    <div className="">
      <Image className="absolute  lg:scale-100 scale-50 lg:right-0 -right-[40px] " alt="vector" src={vector} />
      <Hero/>
      <Image className="absolute sm: rotate-[180deg] lg:scale-100 scale-50 lg:left-0 -left-[40px]" alt="vector" src={vector} />
      <Trend/>
      <Image className="absolute  lg:scale-100 scale-50 lg:right-0 -right-[40px] " alt="vector" src={vector} />
      <br/>
      <Coins/>
    </div>
  )
}
