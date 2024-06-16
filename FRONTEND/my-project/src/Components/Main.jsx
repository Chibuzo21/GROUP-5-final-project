import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from "./Footer"

function Main() {
  return (
<main>
    <Header/>
    <Outlet/>
     {/* <Footer/> */}
</main>
  )
}

export default Main