import Image from "next/image";
import Link from "next/link";
import { FiTruck, FiHeadphones, FiShield } from "react-icons/fi";
const NewArrivals = () => {
  return (
    <div className="space-y-10 ml-5">

      <div className="bg-black text-white flex justify-around w-[720px] mt-7 h-[260px] ml-220">
        <div className="mt-7 max-w-xs">
          <p className="text-3xl font-semibold">Womens Collections</p>
          <p className="mt-2">
            Featured woman collections that <br /> give you another vibe
          </p>
          <Link href="#" className="underline underline-offset-2">
            Shop
          </Link>
        </div>
        <Image
          src="/Images/lady.jpg"
          alt="Girl"
          width={200}
          height={600}
        />
      </div>

      <div className=" gap-8">
        <div className="relative bg-black text-white flex justify-around w-[340px] mt-5 h-[350px] ml-220">
          <Image
            src="/Images/3speakers.png"
            alt="Speaker"
            width={300}
            height={300}
          />
          <div className="absolute top-4 left-4 text-white mt-60">
            <p className="font-bold text-lg">Speakers</p>
            <p>Amazon speakers</p>
            <Link href="#" className="underline underline-offset-2">
              Shop
            </Link>
          </div>
        </div>

        <div className="relative bg-black text-white flex justify-around w-[340px] -mt-87 h-[350px] ml-315">
          <Image
            src="/Images/gucci (1).png"
            alt="Perfume"
            width={300}
            height={300}
          />
          <div className="absolute mt-65 left-4 text-white">
            <p className="font-bold text-lg">Perfume</p>
            <p>GUCCI INTENSE OUD EDP</p>
            <Link href="#" className="underline underline-offset-2">
              Shop
            </Link>
          </div>
        </div>


        <div className="relative bg-black text-white flex justify-around w-[600px] -mt-162 h-[640px] ml-60">
          <Image
            src="/Images/bigSpeaker.png"
            alt="big"
            width={600}
            height={300}
            style={{ objectFit: 'contain' }}
          />
          <div className="absolute mt-130 left-4 text-white">
            <p className="font-bold text-lg">Play Station 5</p>
            <p>Black and white version of the PS5</p>
            <p>coming out on sale</p>
            <Link href="#" className="underline underline-offset-2">
              Shop
            </Link>
          </div>
        </div>


        <div className="flex justify-center gap-60 items-center py-12 bg-white">

          <div className="flex flex-col items-center space-y-3 max-w-xs text-center">
            <div className="bg-black rounded-full p-4">
              <FiTruck className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-sm md:text-base">FREE AND FAST DELIVERY</h3>
            <p className="text-xs md:text-sm text-gray-700">Free delivery for all orders over $140</p>
          </div>

          <div className="flex flex-col items-center space-y-3 max-w-xs text-center">
            <div className="bg-black rounded-full p-4">
              <FiHeadphones className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-sm md:text-base">24/7 CUSTOMER SERVICE</h3>
            <p className="text-xs md:text-sm text-gray-700">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center space-y-3 max-w-xs text-center">
            <div className="bg-black rounded-full p-4">
              <FiShield className="text-white text-2xl" />
            </div>
            <h3 className="font-bold text-sm md:text-base">MONEY BACK GUARANTEE</h3>
            <p className="text-xs md:text-sm text-gray-700">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;