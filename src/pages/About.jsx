import React from "react"
import {Link} from "react-router-dom";
import img from '@/assets/img/bg5.jpg'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      <img src={img} alt=""/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta dolore doloremque eaque explicabo fugiat hic ipsum iste iure libero minima molestiae non officiis perspiciatis porro praesentium quasi quia, ratione!</p>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae corporis cumque deserunt, dicta et explicabo harum in libero natus nesciunt, nulla numquam odit officiis quisquam quo repellat repellendus sapiente.</p>
    </>
  )
};

export default About
