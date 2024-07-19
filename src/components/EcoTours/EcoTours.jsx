import css from './EcoTours.module.css'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHiking} from "../../redux/slices/hikingSlice";
import {getUsers} from "../../redux/slices/userSlice";
import { addUserId } from "../../redux/slices/userSlice";
import {removeUserId} from "../../redux/slices/userSlice";
import {getTours} from "../../redux/slices/toursSlice";
import tour from "../../pages/Tour";
import { addUserIdGeneral } from "../../redux/slices/userSlice";
import {useTranslation} from "react-i18next";
import {CiHeart} from "react-icons/ci";
import {Link, useNavigate} from "react-router-dom";
import {ECOTOURS_URL, HIKING_URL, LOG_IN} from "../../helpers/urls";
import {getLoggedUser} from "../../redux/slices/loggedUserSlice";

function EcoTours(){
    const {t} = useTranslation()

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);
    const {tours} = useSelector(state => state.toursReducer);
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

    useEffect(() => {
        dispatch(getTours());
    }, []);


    const handleAddUserId = (userId, ecoTid) => {

        if(token){
            userId = [...userId, loggedUser.id]
            dispatch(addUserIdGeneral({ userId:userId , resourceId: ecoTid, resourceType: 'tours' }));
        }
        else{
            navigate(LOG_IN)
        }
    };


    return(


            <div className={css.container}>
                {tours.filter(t => t.typeId === 3).map(({id, title, img, userId, typeId}) => (
                    <div className={css.card} key={id}>
        <span className={css.heartCont}>
          <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)}/>
        </span>
                        <div className={css.imgWrapper}>
                            <Link key={id} to={`${ECOTOURS_URL}/${id}`}>
                                <img src={img} alt='img' className={css.pic}/>
                            </Link>
                        </div>
                        <div className={css.title}>{t(title)}</div>
                    </div>
                ))}

        </div>
    )
}

export default EcoTours;