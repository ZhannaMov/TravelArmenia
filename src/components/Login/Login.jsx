import { Link, useNavigate } from "react-router-dom";
import css from './Login.module.css'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { HOME_URL } from "../../helpers/urls";
import { addLoggedUser } from "../../redux/slices/loggedUserSlice";
import { useDispatch } from "react-redux";
import {useTranslation} from "react-i18next";

function Login() {
    const {t} = useTranslation()
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate()
    const getUsers = async () => {
        const response = await axios.get("http://localhost:8000/users")
        setUsers(response.data);
    }


    const dispatch = useDispatch();
    const loginFn = async () => {
        try {
            const user = users.find(el => el.mail === mail && el.password === password);
            if (user) {
                localStorage.setItem("token", "phhgsgvsdvg");
                dispatch(addLoggedUser(user))
                await axios.put("http://localhost:8000/user", user);
                navigate(HOME_URL)
                window.location.reload();
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred while logging in.");
        }
    }


    useEffect(() => { getUsers() }, [])
    return (
        <div className={css.customerLog}>

            <div className={css.containerLog}>

                <h2 className={css.loginh2}>{t("CustomerLog")}</h2>

                <div className={css.contInput}>
                    <input placeholder={t("placeholderEmail")}
                        onChange={(e) => setMail(e.target.value)}
                        className={css.loginInput} />
                    <input type="password" placeholder={t("password")}
                        onChange={(e) => setPassword(e.target.value)}
                        className={css.loginInput} />
                    <button type="submit" onClick={loginFn}
                        className={css.logBtn}>{t("Login")}</button>
                </div>

                <div className={css.loginInfo}>
                    <p>{t("dontHave")} </p>
                    <Link to='/Registration'>{t("signUp")}</Link>
                </div>

            </div>
        </div>
    )
}
export default Login;