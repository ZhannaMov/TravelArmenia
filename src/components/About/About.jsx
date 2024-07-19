import img from "../../images/ararat.jpg"
import css from './About.module.css'
import logo from '../../images/logo2.png'
import {useTranslation} from "react-i18next";
function About(){
    const {t} = useTranslation();
     return(
        <div className={css.aboutCont}>
            <div className={css.imgCont}>
           <img src={img} className={css.aboutPic}></img>
           <p className={css.aboutTxt}>{t("ABOUT US")}</p>
           </div>

        <div className={css.infoCont}>
           <div className={css.aboutInfo}>
            <h2 className={css.aboutH}>{t("SHORTLY ABOUT US")}</h2>
               <p>{t("textAboutUs")}</p>
            </div>
            <div className={css.ourGoal}>
               <h2 className={css.aboutH}>{t("WHAT IDEAS DO WE PURSUE?")}</h2>
               <ul className={css.aboutList}>
                  <li>{t("goal1")}</li>
                  <li>{t("goal2")}</li>
                  <li>{t("goal3")}</li>
               </ul>
               <p className={css.goalInfo}>
                   {t('goal')}
               </p>
            </div>

          
         </div>
         <div className={css.AboutimgCont}>
            <img src={logo} className={css.aboutLogo}></img>
            </div>
        </div>
     )
}
export default About;