import React from 'react'
import Navbar from './componets/Navbar'
import About from "./componets/About";
import ContactUs from "./componets/ContactUs";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Services from "./componets/Services";

export default function Home() {
  return (
    <>
    
  <Navbar/>
  <Header/>
  <Main/>
  <About/>
  <Services/>
  <ContactUs/>
  <Footer/>
    
    </>
  )
}
