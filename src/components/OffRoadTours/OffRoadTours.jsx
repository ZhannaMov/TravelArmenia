

import {Link, useNavigate} from "react-router-dom";
import {LOG_IN, OFFROADTOURS_URL} from "../../helpers/urls";
import css from './OffRoadTours.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../redux/slices/toursSlice";
import { addUserIdGeneral } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import {getUsers} from "../../redux/slices/userSlice";
import {useTranslation} from "react-i18next";
import {getLoggedUser} from "../../redux/slices/loggedUserSlice";

function OffRoadTours() {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.userReducer);
    const { tours } = useSelector(state => state.toursReducer);
    const{loggedUser} = useSelector(state=> state.loggedUserReducer)

    const token=localStorage.getItem("token");
    const navigate=useNavigate()


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTours());
        dispatch(getLoggedUser())
    }, []);

    const handleAddUserId = (userId, offRoadId) => {

        if(token){
            userId = [...userId, loggedUser.id]
            dispatch(addUserIdGeneral({ userId: userId, resourceId: offRoadId, resourceType: 'tours' }));
        }
        else{
            navigate(LOG_IN)
        }
    };



    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);


    return (
        <div className={css.container}>
            {tours.filter(t => t.typeId === 4).map(({ id, title, img, userId, typeId }) => (
                <div className={css.card} key={id}>
                    <span className={css.heartCont}>
                        <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)} />
                    </span>
                    <div className={css.imgWrapper}>
                        <Link key={id} to={`${OFFROADTOURS_URL}/${id}`}>
                            <img src={img} alt='img' className={css.pic} />
                        </Link>
                    </div>
                    <div className={css.title}>{t(title)}</div>
                </div>
            ))}
        </div>
    );
}

export default OffRoadTours;
