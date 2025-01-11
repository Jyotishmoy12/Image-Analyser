import React from 'react'
import { Link } from "react-router-dom"
import { BackgroundBeamsDemo } from '../components/elements/BackgroundBeams'
import { NavbarDemo } from '../components/elements/NavbarMenu'
import { WorldMapDemo } from '../components/elements/WorldMap'
import { WavyBackgroundDemo } from '../components/elements/WavyBackground'

const Home = () => {
  return (
    <>
      <NavbarDemo />
      {/* <BackgroundBeamsDemo /> */}
      <WavyBackgroundDemo/>
      
     

      <WorldMapDemo />
    </>
  )
}

export default Home
