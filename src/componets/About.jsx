import React, { useState } from 'react'
import AboutUsApi from './API/AboutUsApi'

export default function About() {
  const [data, setData] = useState(AboutUsApi);
  return (
    <>
      <section className='common-section our-services'>
        <div className="container mb-5">
          <div className="row demo1">
            <div className="col-12 col-lg-5 img-fluid text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusIMg" />
            </div>
            {/* Right side colum  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading ">How to use the App?</h1>

              {data.map((curElem)=>{
                const{id,title,info}=curElem
                return(
                  <div className="row our-services-info" key={id}>
                  <div className="col-1 our-services-number">{id}</div>
                  <div className="col-10 our-services-list">
                    <h2>{title}</h2>
                    <p className='main-hero-para'>
                     {info}
                    </p>
                    <br />
                  </div>
                </div>
                )
              })}
                  <button className=' services-btn'> Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
