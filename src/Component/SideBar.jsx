import React, { useContext, useState } from 'react'
import { AiFillDashboard } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
import { SiCoveralls } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
import { datafile } from './../App';

function SideBar({ data }) {
    const [hide, sethide] = useState(true)
    const navigate = useNavigate();
    // const data_from_context=useContext(datafile);
    // console.log("this is context");
    // console.log(data_from_context )
    // console.log(data);
    let sidebar_scroll = document.querySelector('#sidebar_')
    console.log(sidebar_scroll);
    // sidebar_scroll.addEventListener("scroll",()=>{
    //     sidebar_scroll.style.height="100vh";
    // })
    // console.log(data.map(ele=>ele.name));
    const[open11,setopen]=useState({})
    function Handleclick(name){
        console.log(open11);
        setopen({...open11,[name]:!open11[name]})
        console.log(open11);
        }

   


    return (
        <>
            <div className="max-w-[220px] h-[89vh] bg-gradient-to-t from-primary-light to-[#6babf8] text-white px-2 py-3 sticky top-0 z-50" id="sidebar_">
                <ul className="flex flex-col gap-3">
                    {
                        data.map((ele, index) => (
                            <li key={index} className="group py-2 hover:bg-[#3986e3] border-0 rounded-xl hover:pl-2 transition-all duration-500">
                                <div className="flex flex-col">
                                    <div className='flex  text-white px-2 cursor-pointer items-center'>
                                    {ele.icon}
                                    <Link to={`${ele.path_link}`} className={`hidden  md:block  text-white text-lg ml-2 font-medium `} onClick={()=>Handleclick(ele.name)}>{ele.name}</Link>
                                    </div>
                                    {ele.sem && ele.hasdropdown && open11[ele.name] && (
                                    <ul className='px-10 font-normal h-auto  transition-all duration-200'>
                                        {ele.sem && ele.sem.map((sem, index) => (

                                            <li key={index} className='py-2 '>{`Semester - ${sem}`}</li>
                                        ))

                                        }
                                    </ul>)
                                    }
                                </div>
                            </li>
                        ))
                    }

                </ul>
                {/* <p onClick={()=>navigate('/',{replace:true})}    className='cursor-pointer'>BAck</p> */}
            </div>

        </>
    )
}

export default SideBar