import React, { useState } from 'react'
import MainAPI from './API/MainAPI'
export default function Main() {
    const [data, setData] = useState(MainAPI)
    return (
        <>
            <div className="work-container container">
                <h1 className='main-heading text-center'>How does it work</h1>
                <div className="row">
                    {data.map((curElem) => {
                        return <>
                            <div className="col-12 col-lg-4 text-center">
                                <i class="fa-solid fa-download"></i>
                                <h2 className='sub-heading'>Download App</h2>
                                <p className='main-hero-para w-100' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid adipisci deserunt non aspernatur dignissimos maxime mollitia, eveniet, odio vel quod dolor suscipit provident beatae ex quam molestias voluptatibus? Dolorum.</p>
                            </div>
                        </>
                    })}

                </div>

            </div>

        </>
    )
}
