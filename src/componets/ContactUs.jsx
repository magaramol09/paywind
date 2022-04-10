import React from 'react'

export default function ContactUs() {
    return (
        <section>
            <div className="container contact-section">
                <div className="row">
                    <div className="col-12 col-lg-11 mx-auto">
                        <div className="row">
                            <div className='col-12 col-lg-5'>
                                <h3 className='fw-bold contact-heading'> Connect With Our <br /> Sales Team.</h3>
                                <p className='main-hero-para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur</p>
                                <img src="./images/hero1.jpg" className='img-fluid w-100 contact-left-side-img' alt="ContactUsimg " />
                            </div>
                            <div className="col-12 col-lg-7 contact-right-side">
                                <form method="Post">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" className="form-control margin-buttom" placeholder='First Name' />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="text" className="form-control margin-buttom" placeholder='Last Name' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" className="form-control margin-buttom" placeholder='Phone Number' />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="text" className="form-control margin-buttom" placeholder='Email ID' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" className='form-control margin-buttom' placeholder='Add Address' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" className='form-control' placeholder='Enter Your Message' />
                                        </div>
                                    </div>
                                    <div class="form-check form-checkbox-style">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckChecked"
                                        />
                                        <label
                                            class="form-check-label"
                                            className="main-hero-para">
                                            I agree that the pay Wind may contact me at the
                                            email  address or phone number above
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-style w-100"
                                    >
                                        Submit
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
