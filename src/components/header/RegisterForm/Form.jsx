import { Link } from 'react-router-dom';
import css from './Form.module.css'
import {useTranslation} from "react-i18next";

function Form(){
    const {t} = useTranslation()
     return(
        <div className={css.formCard}> 
       <h2>{t("account")}</h2>
       <div className={css.btns}>
       <Link to='/Login' className={css.formbtn1}>{t("Login")}</Link>
       <Link to='/Registration' className={css.formbtn2}>{t("signUp")}  </Link>
       </div>
        </div>
     )
}
export default Form;