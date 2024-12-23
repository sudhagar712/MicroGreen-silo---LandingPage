import React from 'react'
import Homeprofile from './Homeprofile'
import HomeCount from './HomeCount'
import LatestPost from './LatestPost'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Footer from '../../Components/Footer'
import InstagramSection from './InstagramSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
      <Homeprofile/>
      <HomeCount/>
      <LatestPost />
      <InstagramSection/>
      <Footer />
    </div>
  )
}

export default Home
