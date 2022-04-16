
import React from 'react'
import Home from './Home'
import {Routes,Route,} from "react-router-dom";
import Contactpage from './componets/Contactpage';
import Servicespage from './Servicespage';
import Aboutuspage from './Aboutuspage';


export default function App() {
  return (
    <>

          <Routes>

             <Route path='/' element={<Home/>} /> 
             <Route path='/contactus' element={<Contactpage/>} /> 
             <Route path='/services' element={<Servicespage/>} />
             <Route path='/aboutus' element={<Aboutuspage/>} />
    
          
 
         </Routes> 
    </>
  )
}
