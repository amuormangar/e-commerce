"use client";
import Image from "next/image";
import { useState } from "react";
import Buttons from "../Shared-components/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Header from "../Shared-components/Header";
import Navigation from "../Shared-components/Nav-bar";
import Footer from "../Shared-components/Footer";
const LoginForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Header />
      <Navigation />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-40 py-12  ">
        <div className=" flex ">
        <Image
  src="/Images/login-image.jpg" 
  alt="Phone"
  width={900}
  height={900}
/>
        </div>
            <div className="flex-1 flex flex-col justify-center max-w-md w-full pt-20">
              <h1 className="text-4xl  mb-3 text-black">Log in to Exclusive</h1>
              <p className="mb-7">Enter your details below</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-90" />
              <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Email or Phone Number" className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"/>
              
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"/>
    <div className="flex items-center gap-20">
                  <Link href="/home" >
                  <Buttons variant="default" size="short" onClickHandler={() => {}} className="mb-4"buttonText="Log in"/>
                  </Link>
                  <p className="text-sm text-pink-700 "> <Link href={"/signup"} className="font-medium">Forgot your password?</Link> </p>
              </div>

              <p className="text-sm text-gray-600 text-center"> Already have account?{" "}
              <Link href={"/signin"} className="underline font-medium">Log In</Link> </p>
            </div>
      </div>
            <Footer/>
     </>
  );
};
export default LoginForm;