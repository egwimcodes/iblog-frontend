"use client"
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Home from "@/components/pages/home"
import Portfolio from "@/components/pages/portfolio";
import ContactUs from "@/components/pages/contactus";

export default function Page() {
  const [CurrentPage, setCurrentPage] = useState("Home")
  const handleScreen = (currentPage: string) => {
    setCurrentPage(currentPage);

  }
  return (<div className="w-full">
    <div className="h-12 md:h-14 ">

    <Header currentPage={handleScreen} />
    </div>
    {CurrentPage == "Home" ? <Home /> : CurrentPage == "ContactUs" ? <ContactUs /> : <ContactUs />}


  </div>
  );
}
