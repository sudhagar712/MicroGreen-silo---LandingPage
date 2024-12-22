import React from 'react'
import Homeprofile from './Homeprofile'
import HomeCount from './HomeCount'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
      <Homeprofile/>
      <HomeCount/>
      <Footer />
    </div>
  )
}

export default Home
