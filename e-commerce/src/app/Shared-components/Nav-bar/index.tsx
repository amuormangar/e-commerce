import Link from "next/link";
import SearchInput from "@/app/Search";
import { FaRegHeart} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navigation = () => {
  return (
    <div>
   <nav className="flex flex-wrap items-center justify-between px-6 py-2 bg-gray-100 shadow-md w-full md:px-20">
  <span className="font-bold text-3xl text-black cursor-pointer">Exclusive</span>
  <ul className="flex flex-wrap space-x-6 text-lg text-black">
    <li><Link href="/home" className="hover:underline">Home</Link></li>
    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
    <li><Link href="/about" className="hover:underline">About</Link></li>
    <li><Link href="/signup" className="hover:underline">Signup</Link></li>
  </ul>
  <div className="flex gap-4 md:gap-10">
    <SearchInput />
    <FaRegHeart className="w-8 h-8" />
    <AiOutlineShoppingCart className="w-8 h-8"/>
  </div>
</nav>


    </div>
  );
}

export default Navigation;
