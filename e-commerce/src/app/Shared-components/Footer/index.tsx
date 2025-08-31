"use client";
import Link from "next/link";
import {FaTwitter, FaInstagram ,FaLinkedinIn,FaFacebookF} from 'react-icons/fa';
import { MdSend } from "react-icons/md";
const Footer = ()=>{
    return(
<footer className="bg-black text-white h-90 ;">
    <div className="container mx-auto px-2 py-4 grid grid-cols-1 md:grid-cols-5 gap-12 ">
    <div>
    <h4>Exclusive</h4> 
    <h4>Subscribe</h4>
    <p>Get 10% off your first order</p>
     <div className="flex max-w-md mx-auto outline-2 outline-white-500 py-3 px-1">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-gray-800 text-white px-2 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
      />
      <button
        className="hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors flex items-center justify-center"
        aria-label="Send email"
      >
        <MdSend className="text-white"/>
      </button>
      </div>
        </div>

     <div>
      <h3>Support</h3>  
      <h4>111 Bijoy sarani, Dhaka,  DH 1515,         Bangladesh.</h4>
      <h4>exclusive@gmail.com</h4>
      <h4>+88015-88888-9999</h4>
    </div>
    
    <div>
        <h1>Account</h1>
        <h3><Link href="/login">Login/Register</Link></h3>
        
        <h3>Cart</h3>
        <h3>Wishlist</h3>
        <h3>Shop</h3>
    </div>
    <div>
          
          <Link href=""><h1>Quick Link</h1></Link>
          <Link href=""><h3>Privacy Policy</h3></Link>
          <Link href=""><h3>Terms of use </h3></Link>
          <Link href=""><h3>FAQ </h3></Link>
           <Link href=""><h3>Contact</h3></Link>
    </div>
   <div>
         <div>
          <h3 className="text-lg font-semibold mb-2">Download App</h3>
          <p className="text-gray-400 text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex items-start gap-3">
          
                <div className="ml-2">
                  <p className="text-[10px]">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              <a href="#" className="border-2 flex items-center  text-white px-3 py-1 rounded-lg w-42 hover:opacity-80 transition">
               
                <div className="ml-2">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
           <FaFacebookF/>
           <FaTwitter/>
           <FaInstagram/>
           <FaLinkedinIn/>
            </div>
   </div>
   </div>
   </footer>
    )  
}
 export default Footer;
