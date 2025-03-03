import React, { useState } from 'react'
// import { profile } from '..src/Images/profile.png'
import profile from '/src/Images/profile.png';
function Navbar(props) {
    // const src = "src\Images\profile.png";
    console.log(props);
    const {title,student_name,name}=props.data
    const [flag,setflag]=useState(false)
    function HandleProfile(){
        setflag(curr=>!curr);
        console.log(flag);
    }
    return (
        <>
            <div className="flex font-poppins relative bg-gradient-to-br from-primary-light to-primary-dark text-white items-center text-xl font-semibold py-3 justify-between">
                <p className="ml-5">{title}</p>
                <p>{name}</p>
                <div className="relative group flex items-center cursor-pointer mr-5 text-lg font-medium bg-primary-dark px-2 rounded-full " onClick={()=>HandleProfile()}>
                    <img src={profile} alt="profile" width="40px" />
                    <p>{student_name}</p>
                    <p className={`text-xl ml-1 mt-1 group-hover:-rotate-45 ${flag?"-rotate-45":""} transition-all duration-500`}>{`<`}</p>
                    <div className={`absolute  overflow-hidden rounded-b-xl bg-primary-dark -bottom-[56px] left-[21px]  transition-all group-hover:h-14 group-hover:opacity-100 duration-300 px-6 ${flag?"h-14 opacity-100":"h-0 opacity-0 group-hover:h-14 group-hover:opacity-100"}`} >
                        <p className="text-lg cursor-pointer">Profile</p>
                        <p className="text-lg cursor-pointer">Logout</p>
                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar