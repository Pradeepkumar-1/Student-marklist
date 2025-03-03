import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsFillImageFill, BsSearch } from "react-icons/bs";
import { RiReactjsFill, RiDashboardFill } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
 
function SideSidebar() {
 
  const [open, setOpen] = useState(true);
  
  // const [menu.isOpen, ] = useState(false);
  const Menus = [
    { title: "Dashboard", icon: <AiOutlineFileText/> },
    { title: "Pages" },
    { title: "Media", spacing: true, icon: <BsFillImageFill/> },
    {
      title: "Projects",
      submenu: true,
      
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox" },
    {
      title: "Projects1",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Profile", spacing:true },
    { title: "Setting" },
    { title: "Logout" },
  ];
  // const [Menus,setMenus]=useState(Menus_OG);
  const [getopen,setopen]=useState({});
  function Handlesub(title){
  //  const temp= Menus.map(ele=>{
  //     if(ele.title===title){
  //       console.log(ele.isOpen);
  //       ele.isOpen=!ele.isOpen;
  //       console.log(ele.isOpen +"aerr " + ele.title);
  //       // (prev=>!prev)
  //       // console.log(menu.isOpen +"sbb")
  //       return ele;
  //     }
  //     return ele;
    // })
    // setMenus(temp);
    
    setopen(prev=>({...prev,[title]:!prev[title]}));
    console.log(getopen);
 
  }
  console.log(Menus);
 
  return (
    <div className={`flex ` }>
      <div className={`bg-red-600  h-auto p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white  text-red-600 text-3xl rounded-full absolute -right-3 top-9 border border-red-600 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className={`inline-flex`}>
          <RiReactjsFill className={`bg-white text-sky-500 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 shrink-0  ${open && "rotate-[360deg] "}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>React Sidebar</h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>
        <ul className="">
          {Menus&&Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${menu.isOpen && "rotate-180"}`} onClick={() => Handlesub(menu.title)} />
                )}
              </li>
              {menu.submenu && getopen[menu.title] && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subindex) => (
                    <li key={subindex} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 hover:bg-light-white rounded-md`}>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
 
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  )
}
 
export default SideSidebar
 
 