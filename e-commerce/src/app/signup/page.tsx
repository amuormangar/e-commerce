"use client";
import Image from "next/image";
import { useState } from "react";
import Buttons from "../Shared-components/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Header from "../Shared-components/Header";
import Navigation from "../Shared-components/Nav-bar";
import Footer from "../Shared-components/Footer";
const SignUpForm = () => {
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
              <h1 className="text-4xl  mb-3 text-black">Create an account</h1>
              <p className="mb-7">Enter your details below</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-90" />
              <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Email or Phone Number" className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"/>
              
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border-0 border-b-2 border-gray-400 py-2 px-0 rounded-none mb-9"/>
  <div className="w-100 px-5">
  <Buttons
    variant="default"
    onClickHandler={() => {}}
    className="mb-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-base w-100"
    buttonText={<a href="/home">Create Account</a>}
  />

  <Buttons
    variant="default"
    className="w-100 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-600 text-white py-3 px-6 text-base "
    onClickHandler={() => {}}
    buttonText={
      <>
        <FcGoogle className="text-3xl" /> Sign up with Google
      </>
    }
  />
</div>

              <p className="text-sm text-gray-600 text-center"> Already have account?{" "}
              <Link href={"/signin"} className="underline font-medium">Log In</Link> </p>
            </div>
      </div>
            <Footer/>
     </>
  );
};
export default SignUpForm;