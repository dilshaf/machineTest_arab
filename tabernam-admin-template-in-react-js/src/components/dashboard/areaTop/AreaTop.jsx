import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { addDays } from "date-fns";

import Avatar from '@mui/material/Avatar';


const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Good Morning ! <img src="https://cdn-icons-png.flaticon.com/128/10423/10423984.png" alt="" style={{width: "12%",
    height: "20%"}}/></h2>
      </div>
      <div className="area-top-r">
        <div
          ref={dateRangeRef}
          className={`date-range-wrapper ${
            !showDatePicker ? "hide-date-range" : ""
          }`}
          onClick={handleInputClick}
        >
         

          <div className="user-profile">
            <div className="user-name">
              <p>John Doe</p>
              <p>jogn@gmail.com</p>
            </div>
            <Avatar alt="User Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zUkDk_pijuMPyTO5hOIlQYLc9ntXJxsHgA&usqp=CAU" sx={{ width: 60, height: 60 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaTop;
