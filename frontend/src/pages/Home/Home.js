import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import Leftpane from '../../components/Leftpane/leftpane'
import Rightpane from '../../components/Rightpane/rightpane'
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
