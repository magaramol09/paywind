import React from 'react'
// import heroimg from '../../public/images/hero4.jpg'
export default function Header() {
  return (
    <>
      <header>
        <section className='container main-hero-container'>
          <div className='row'>
            {/* this is frist grid */}
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt necessitatibus consectetur quo voluptatibus deleniti totam? Fuga doloremque repellat, atque magnam necessitatibus facere pariatur cumque, voluptas officiis suscipit, eum odit provident repellendus?</p>
              <h3>Get early access to you</h3>
              <div className="input-group mt-3">
                <input type="text" placeholder='Enter You Email' className='rounded-pill w-75 p-2 me-3 form-control-text' />
                <div className="input-group-btn btn-style">
                  Get it now
                </div>
              </div>
            </div>
            {/* this is second grid */}
            <div className="col-12 col-lg-6 header-right-side justify-content-center align-items-center main-hero-img mx-y">

              <img src="./images/hero1.jpg" alt="" className='img-fluid' />
              {/* <img src="./images/hero4.jpg"  alt="" className='img-fluid main-hero-img2' /> */}

            </div>
          </div>
        </section>
      </header>
    </>
  )
}
