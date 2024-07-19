import css from "./header.module.css"
import logo from "../../images/logo.png"
import Navbar from "./navbar/navbar";
import NavbarMobile from "./navbar/navbarMobile";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Form from "./RegisterForm/Form";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import EcoTours from "../EcoTours/EcoTours";
import {getUsers} from "../../redux/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import am from '../../images/hy.png'
import ru from '../../images/ru.png'
import en from '../../images/en.png'
import loggedUserReducer, {deleteLoggedUser, getLoggedUser} from "../../redux/slices/loggedUserSlice";
let languagesData = [
    {id: 1, slug: 'en', image: en},
    {id: 2, slug: 'am', image: am },
    {id: 3, slug: 'ru', image: ru},
]
const Header = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation()
  const dispatch = useDispatch();
  const {users} = useSelector(state=> state.userReducer)
    const {loggedUser}=useSelector(state=>state.loggedUserReducer)

  const[showCard, setShowCard] = useState(false);
  const token = localStorage.getItem('token');



 useEffect(() => {
  dispatch(getUsers());
  dispatch(getLoggedUser())
  }, []);


    const handleLogOut = () => {
        dispatch(deleteLoggedUser())
        localStorage.removeItem("token");
        window.location.reload()
    };
  return (
    <div>

        <div className={css.header}>
            <div className={css.phoneNumbers}>

                <p>+374707807</p>
                <p>+374993337</p>
            </div>

            <div className={css.logo}>
            <img src={logo} alt="logo"/>
            </div>

            <div className={css.addresAndFlags}>
                <div className={css.flagsCont}>
                    <ul className={css.languages}>
                        {
                            languagesData.map(({id, slug, image}) => {
                                return <li
                                    key={id}
                                    onClick={() => i18n.changeLanguage(slug)}
                                >
                                    <img src={image} alt="flag" className={css.flagItem}/>
                                    {/*<span style={{color: i18n.language === slug ? "lime" : "white"}}>{slug}</span>*/}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <Link to='/Favorite' className={css.iconFav}><CiHeart/></Link>
                {
                    token ? <div className={css.userName}>
                            <Link>{loggedUser.name}/</Link>
                            <span
                                onClick={handleLogOut}

                            >Log Out</span>
                        </div>
                        : <div className={css.userIcon} onClick={() => setShowCard(!showCard)}>
                            <FaRegUserCircle/>
                        </div>

                }
            </div>
            {showCard && <Form/>}
        </div>
        <Navbar/>
        <NavbarMobile/>
    </div>
  )
}
export default Header