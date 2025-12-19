import Image from "next/image"
import { TiTick } from "react-icons/ti";
import Button from "../ui/Button";

const HomeAbout = () => {
  return (
    <>
    <div className="grid grid-cols-2 pb-[70px] px-28 gap-4 text-white ">
        <div className="">
            <Image src={'/imgi_2_image.webp'} width={600} height={200}  alt="" />
        </div>
        <div className="grid items-center grid-rows-[120px_120px_120px_120px_120px]">
            <p className="gradient-text text-lg font-medium para">
    <span className="border-s-2 border-white ps-3"></span>
    What Aithm Do
  </p>
  <h1 className="heading text-6xl font-bold">Create your own AI business easily.</h1>
  <p className="para text-xl text-[#b9b9ba]">AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time. Whether it's speech recognition, image processing, or problem solving.</p>
  <ul className="leading-8 text-[#b9b9ba]">
    <li className="flex gap-3 items-center"> <TiTick className="text-[#43a5fe]" /> <span>Natural Language Processing</span></li>
    <li className="flex gap-3 items-center"><TiTick className="text-[#43a5fe]" /> <span>AI refers to the simulation of human</span></li>
    <li className="flex gap-3 items-center"><TiTick className="text-[#43a5fe]" /><span>Generating art, music, and literature.</span></li>
  </ul>
<Button name="About Us" />
        </div>
    </div>
    </>
  )
}

export default HomeAbout