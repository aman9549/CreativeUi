"user clinet"
import Link from "next/link";
import { TiArrowDown } from "react-icons/ti";
import { PiBag } from "react-icons/pi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Button from "../ui/Button";

const Navbar = () => {

  return (
   <>
   <nav className="flex items-center justify-between px-[100px] py-[25px]   shadow-[0_0.1px_1px_rgba(147,197,253,0.6)]">
    <h1 className="heading text-white text-4xl font-extrabold">Aithm</h1>
    <ul className="flex text-white gap-5 text-lg">
        <Link href={''} className="flex items-center" ><li>Home</li>< TiArrowDown /></Link>
        <Link href={''} className="flex items-center" ><li>About Us</li></Link>
        <Link href={''} className="flex items-center" ><li>Portfolio</li>< TiArrowDown /></Link>
        <Link href={''} className="flex items-center" ><li>Services</li>< TiArrowDown /></Link>
        <Link href={''} className="flex items-center" ><li>Pages</li>< TiArrowDown /></Link>
        <Link href={''} className="flex items-center" ><li>Blogs</li>< TiArrowDown /></Link>
        <Link href={''} className="flex items-center" ><li>Contact</li></Link>
    </ul>
    <div className="flex items-center text-white text-lg gap-5">
  
<PiBag className="text-2xl" />
<HiMiniMagnifyingGlass className="text-3xl" />
<Button name="Get Started" />
    </div>
   </nav>
   </>
  )
}

export default Navbar