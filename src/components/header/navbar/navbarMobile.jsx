import React, {useState} from 'react';
import  css from "./navbar.module.css"
import Navbar from "./navbar";
import { FaBars } from "react-icons/fa6";
// import { MdCancel } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";

function NavbarMobile(){
  const [open, setOpen] = useState(false);
  return (
    <div className={css.navbarMobile}>
      <div className={css.navbarIcon} onClick={() => setOpen(!open)}>
      {open ? <MdCancelPresentation /> : <FaBars />} 
      </div>
      
      {
        open && <div className={css.dropdown}>
          <Navbar mobile/>
        </div>
      }
    </div>
  );
};

export default NavbarMobile;