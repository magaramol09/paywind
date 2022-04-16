import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className='navbar-bg'>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <Link className="navbar-brand" to="/">Paywind</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/aboutus">About</Link>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">Contact</Link>
        </li>
  
      </ul>
      <form className="d-flex">
        <button className="btn  btn-style" type="submit">Sign Up</button>
        <button className="btn  btn-style" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
    </section>
  )
}
