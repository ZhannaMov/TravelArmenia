import css from './Registration.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "react-i18next";

const schema = yup.object().shape({
  name: yup.string().required('Полное имя обязательно'),
  mail: yup.string().email('Неверный формат email').required('Email обязателен'),
  password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
  checkPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required('Подтвердите пароль'),
});

function Registration(){
    const {t} = useTranslation()
  const { register, handleSubmit, formState: { errors, isValid }, getValues, reset } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
});
      console.log(getValues())
     
      console.log(errors)
      const registerFn = async (data) => {
        const { checkPassword, ...userData } = data;
        try {
            await axios.post('http://localhost:8000/users', userData);
            alert('Регистрация успешна!');
            reset();
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
     return (
      
            <div className={css.customerReg}>
            <div className={css.container}>
                <div className={css.signuph}> <h2>{t( "signUp")}</h2></div>

            <form className={css.contInput} onSubmit={handleSubmit(registerFn)}>
                <input placeholder={t( "fullName")} {...register("name")} className={css.regInput}/>
                {errors.name && <span className={css.error}>{errors.name.message}</span>}
                <input placeholder={t( "placeholderEmail")} {...register("mail")} className={css.regInput}/>
                {errors.mail && <span className={css.error}>{errors.mail.message}</span>}
                <input type = "password" placeholder={t( "password")} {...register("password")} className={css.regInput}/>
                {errors.password && <span className={css.error}>{errors.password.message}</span>}
                <input type = "password" className={css.regInput}  placeholder={t( "password2")} {...register("checkPassword")}/>
                {errors.checkPassword && <span className={css.error}>{errors.checkPassword.message}</span>}
                <button type="submit" disabled={!isValid || getValues().password !== getValues().checkPassword}>{t( "signUp")}</button>
            </form>
            <div className={css.loginInfo}> 
            <p>{t("alreadyhave")} </p>
            <Link to='/Login'>{t("logHere")}</Link>
            </div>
           </div>
           
          
        </div>
       
     )
}
export default Registration;