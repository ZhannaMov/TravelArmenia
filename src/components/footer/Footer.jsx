import css from "./footer.module.css"
import { Link } from "react-router-dom"
import {useTranslation} from "react-i18next";

function Footer(){
    const {t} = useTranslation();
  return (
    <div>
       <div className={css.footer}> 
           
         <div className={css.col}>
         <ul>
          <Link to='/Hiking'><li>{t("HIKING")}</li></Link>
          <Link to='/Mountain'><li>{t("MOUNTAIN CLIMBING")}</li></Link>
          <Link to='/EcoTours'><li>{t("ECO TOURS")}</li></Link>
          <Link to='/OffRoadTours'><li>{t("OFF ROAD TOURS")}</li></Link>
          <Link to='/Castles'><li>{t("ARMENIAN CASTLES AND FORTRESSES")}</li></Link>
          <Link to='/Exclusive'><li>{t("EXCLUSIVE TOURS")}</li></Link>
        </ul>
   </div>

   <div className={css.col}>
   <ul>
          <Link to='/'><li>{t("HOME")}</li></Link>
          <Link to='/UpcomingTours'><li>{t("ALL UPCOMING TOURS")}</li></Link>
          <Link to='/Festivals'><li>{t("FESTIVALS")}</li></Link>
          <Link to='/About'><li>{t("ABOUT US")}</li></Link>
          <Link to='/Contact'><li>{t("CONTACT US")}</li></Link>
          <Link to='/Blog'><li>{t("BLOG")}</li></Link>
          <Link to='/Reviews'><li>{t("REVIEWS")}</li></Link>
        </ul>
    
    </div>
 
    <div className={css.col}>
        
        <ul>
            <a href='#'><li>21,{t("Komitas Avenue")}, {t("Yerevan")}</li></a>
            <a href='#'><li>+374606995</li></a>
            <a href='#'><li>info@armenianjouray.am</li></a>
        </ul>
       {/* <p>Subscribe and be the first to know about the upcoming tours.</p>
       <input type="text" placeholder="Email"/> */}
    </div>

    </div>
    </div>
   
  )
}
export default Footer;