import React, { useState } from 'react'
import ServicesApi from './API/ServicesApi'

export default function Services() {
    const [data, Setdata] = useState(ServicesApi);

    return (
        <>
            <section className='services'>
                <div className="container  service-container">
                    <h1 className="main-heading text-center fw-bold">
                        How to send money
                    </h1>
                    <div className="row  w-100 ">
                        {data.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <div className="col-11 col-lg-4 work-container-subdiv " key={id}>
                                    <i className={`fontawsome-style services-logo ${logo}`}></i>
                                    <h2 className='sub-heading'>{title}</h2>
                                    <p className="main-hero-para">{info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
