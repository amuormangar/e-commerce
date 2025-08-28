"use client";

import Footer from "@/app/Shared-components/Footer";
import Navigation from "@/app/Shared-components/Nav-bar";
import Buttons from "@/app/Shared-components/Button";
import Header from "./Shared-components/Header";
import BestSellingProducts from "./Home/Components/Products";
import NewArrivals from "./Home/Components/NewArrivals";
import FlashSale from "./Home/Components/FlashSales";
import CategoryBrowse from "./Home/Components/Catergory";
import Menu from "./Home/Components/LandingPage";
import ExploreProducts from "./Home/Components/ExporeProduct";
export default function Home() {
   const handleClick = () => alert('Clicked!');
  return (
    <div>
      <Header/>
     <Navigation/>
      <main className="">
        <Menu/>
        <FlashSale/>
        <CategoryBrowse/>
        <ExploreProducts/>
         <BestSellingProducts/>
        <NewArrivals/>
      </main>
      <Footer/>
    </div>
  );
}


