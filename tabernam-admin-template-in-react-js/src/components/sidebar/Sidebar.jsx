import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import Briefcase from '../../assets/images/Briefcase.png'
import StatBoard from '../../assets/images/StatBoard.png'
import Shutdown from "../../assets/images/Shutdown.png"
import CircledMenu from "../../assets/images/Circled Menu.png"
import Support from "../../assets/images/Support.png"
import Puzzle from "../../assets/images/Puzzle.png"
import Help from "../../assets/images/Help.png"
import {

  MdOutlineClose,
 
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);


  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
        <img src={Briefcase} alt=""/>
          <img src={StatBoard} alt="" />
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            

          <li className="menu-item">
              <Link to="/" className="menu-link" style={{backgroundColor:"white",color:"black"}}>
                <span className="menu-link-icon">
                 
                  <img src={CircledMenu} alt="" size={18}/>
                </span>
                <span className="menu-link-text" style={{backgroundColor:"white"}}>Dashboard</span>
              </Link>
            </li>



            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  
                  <img src={Support} alt="" size={20}/>
                </span>
                <span className="menu-link-text">Support</span>
              </Link>
            </li>




            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                 
                  <img src={Puzzle} size={20}/>
                </span>
                <span className="menu-link-text">Plugins</span>
              </Link>
            </li>


            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  
                  <img src={Help} alt="" size={18}/>
                </span>
                <span className="menu-link-text">Help</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list" style={{padding:"10px",backgroundColor:"white",width:"18rem"}}>
           
          <li >
              <Link to="/"  style={{    display:" flex",
    alignItems:" center",
    justifyContent: "center",
    textDecoration:" none",
    color: "red"}}>
                <span >
                  
                <span >Logout</span>
                <img src={Shutdown} alt="" size={18}/>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
