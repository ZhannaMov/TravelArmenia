

import css from './Favorite.module.css'
import { Link } from 'react-router-dom';
import Wishlist from './Wishlist';
import { getLoggedUser } from "../../redux/slices/loggedUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Favorite() {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const { loggedUser } = useSelector(state => state.loggedUserReducer);
    console.log(loggedUser.length);

    useEffect(() => {
        dispatch(getLoggedUser());
    }, []);
    const token = localStorage.getItem("token")

    return (
        <>
            <h2 className={css.savedH}>{t("Saved")}</h2>
            {token ? (
                <div className={css.wishlistFav}>
                    <Wishlist />
                    </div>

            ) : (
                <div className={css.favContainer}>
                    <div className={css.favMessage}>
                        <h3>{t("don't lose")}</h3>
                        <div className={css.contLinkandText}>
                            <p>{t("yourWishlist")}
                            </p>
                            <div className={css.linkCont}>
                                <Link to='/Login' className={css.linkBtn}>{t("Login")}</Link>
                                <Link to='/Registration' className={css.linkBtn}>{t("sign")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className={css.goToHome}>
                        <p>{t("noAdventures")}<Link to='/' className="text-blue-600 hover:underline">{t("wishlistLink")}</Link> {t("heartIcon")}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Favorite;
