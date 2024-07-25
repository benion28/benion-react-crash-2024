import React from "react"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import Navbar from "../components/Navbar"

const { Fragment } = React

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </Fragment>
  )
}

export default MainLayout