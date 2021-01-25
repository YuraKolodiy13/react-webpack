import React from "react"
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>home</h1>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta dolore doloremque eaque explicabo fugiat hic ipsum iste iure libero minima molestiae non officiis perspiciatis porro praesentium quasi quia, ratione!</p>
    </>
  )
};

export default Home