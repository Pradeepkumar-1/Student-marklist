import React, { useContext } from 'react'
import SideBar from '../Component/SideBar'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Profile from '../Pages/Profile';
import {  datafile } from '../App';

function StudentLayout(props) {

  // const data_from_context = useContext(datafile);
  // console.log("this is context");
  // console.log(data_from_context)

  console.log(props);
  const { navbar, sidebar } = props
  return (
    <>

      <Navbar data={navbar} />
      <div className="flex">
        <SideBar data={sidebar} />

        <Outlet />
      </div>

    </>
  )
}

export default StudentLayout