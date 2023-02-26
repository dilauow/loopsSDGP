import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import Leftpane from '../../components/Leftpane/Leftpane'
import Rightpane from '../../components/Rightpane/Rightpane'
import "./home.css"


export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="bottomcontainer">
      <Leftpane/>
      <Rightpane/>
    </div>
    </>
  )
}
