import React, { createContext, useState } from 'react'
import Navbar from './Component/Navbar'
import { createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import { HiAcademicCap } from "react-icons/hi";
import SideBar from './Component/SideBar';
import { AiFillDashboard } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
import { SiCoveralls } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { createBrowserRouter } from 'react-router';
import StudentLayout from './Layout/StudentLayout';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import Attendance from './Pages/Attendance';
import Semester from './Pages/Semester';
import Overall from './Pages/Overall';
import Missing from './Pages/Missing';
import SideSidebar from './Component/SideSidebar';
export const datafile = createContext()



function App() {
  const navbar = { title: "Student ERP", name: "Skill-Mine Technology", student_name: "Pradeep" }
  const [showsem, setshowsem] = useState(false)
  console.log(showsem);
  const SideBar1 = [
    { icon: <IoPerson size={"25px"} />, name: "Profile", path_link: "/" },
    { icon: <AiFillDashboard size={"25px"} />, name: "Dashboard", path_link: "/Dashboard" },
    { icon: <MdCoPresent size={"25px"} />, name: "Attendence", path_link: "/Attendence" },
    { icon: <FaGraduationCap size={"25px"} />, name: "Semester", sem: [1, 2, 3, 4],hasdropdown:true, showsem: { showsem }, setshowsem: { setshowsem } },
    { icon: <SiCoveralls size={"25px"} />, name: "Overall Performance", path_link: "/Overall Performance" }
  ]
  // data=SideBar1;
  // console.log(data);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<StudentLayout navbar={navbar} sidebar={SideBar1} />}>

      <Route index element={<Profile />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Attendence" element={<Attendance />}></Route>
      <Route path="/Semester" element={<Semester />}></Route>
      <Route path="/Overall Performance" element={<Overall />}></Route>
      <Route path="*" element={<Missing />} />
    </Route>
  ))



  return (
    <>
      {/* 
      <Navbar data={navbar} />
      <SideBar data={SideBar1} /> */}
      {/* <Navbar data={navbar}  /> */}

      {/* <Routes>
      <Route path='/' element={<Navbar data={navbar} /> }>

      </Route>
      <Route path='/' element={<SideBar data={SideBar1} /> }></Route>
    </Routes>  */}
      {/* <SideSidebar /> */}
      <datafile.Provider value={{ SideBar1 }} >
        <RouterProvider router={router} />
      </datafile.Provider>
    </>
  )
}

export default App