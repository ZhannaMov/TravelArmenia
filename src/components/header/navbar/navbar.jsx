import React from 'react';
import css from "./navbar.module.css"
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { FaSearch } from "react-icons/fa";
import {SEARCH_URL} from "../../../helpers/urls";


const menuData = [
  { id: 1, title: "HOME", link: '/' },
  { id: 2, title: "ALL UPCOMING TOURS", link: '/UpcomingTours' },
  { id: 3, title: "FESTIVALS", link: '/Festivals' },
  { id: 4, title: "ABOUT US", link: '/About' },
  { id: 5, title: "CONTACT US", link: '/Contact' },
  { id: 6, title: 'BLOG', link: '/Blog' },
  { id: 7, title: 'REVIEWS', link: '/Reviews' }
];

const Navbar = ({mobile}) => {
  const {t} = useTranslation()
  return (

    <ul className={mobile ? css.navMobile : css.navbar}>
      {menuData.map(n => {
        return (
          <Link to= {n.link} key={n.id}><li  className={css.link}>{t(n.title)}</li></Link>)
      })}
      <li className={css.searchIcon}><Link to={SEARCH_URL}><FaSearch /></Link></li>
    </ul>
  )
    ;
};

export default Navbar;