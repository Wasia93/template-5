
import React from 'react'
import TopHeader from "@/components/topheader";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import Footer from "@/components/footer";
import Editors from "@/components/editors";
import Cards from "@/components/cards";
import Greendiv from "@/components/greendiv";
import Whitediv from "@/components/white-dic";

export default function page(){
  return(
    <div>
      <TopHeader/>
      <Navbar/>
      <HeroSection/>
      <Editors/>
      <Cards/>
      <Greendiv/>
      <Whitediv/>
      <Footer/>

    </div>
  )
}
