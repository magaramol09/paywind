import React, { useState } from 'react'
import MainAPI from './API/MainAPI'
export default function Main() {
    const [data, setData] = useState(MainAPI)
    return (
        <>
            <div className="main-container container">
                <h1 className='main-heading text-center'>How does it work</h1>
                <div className="row main-line-spece">
                    {data.map((curElem) => {
                        const { id, logo, title, info } = curElem;
                        return <>
                            <div className="col-12 col-lg-4 text-center main-container-subdiv" key={id}>
                                <i className={`fontawsome-style ${logo}`}></i>
                                <h2 className='sub-heading'>{title}</h2>
                                <p className='main-hero-para w-100'>{info}</p>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
