import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "../Footer"

function About() {
  return (
      <>
  <h1>ABOUT BANGLADESH</h1>;
  <Link to={{ pathname: "https://en.wikipedia.org/wiki/Bangladesh" }}target='_blank'><h1>Learn more here about Bangladesh</h1></Link>
  <Footer/>
  </>
  )}

export default About