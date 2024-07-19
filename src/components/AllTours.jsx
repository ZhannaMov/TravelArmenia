import { Link } from 'react-router-dom';
import css from './Hiking.module.css';
import { HIKING_URL } from '../../helpers/urls';
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
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
function Hiking(){
    const {t} = useTranslation()
    const {hiking} =  useSelector(state => state.hikingReducer);
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userReducer);
    const {tours} = useSelector(state => state.toursReducer);


    useEffect(() => {
        dispatch(getTours());
    }, []);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const handleAddUserId = (userId, hikingId) => {
        if (users.length > 0) {
            // Assuming users array has at least one user
            userId = [...userId, users[0].id]
            dispatch(addUserIdGeneral({ userId:userId , resourceId: hikingId, resourceType: 'tours' }));
        }
    };


    return(

        <div className={css.container}>
            {tours.filter(t => t.typeId === 1).map(({ id, title, img, userId, typeId }) => (
                <div className={css.card} key={id}>
        <span className={css.heartCont}>
          <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)} />
        </span>
                    <div className={css.imgWrapper}>
                        <Link key={id} to={`${HIKING_URL}/${id}`}>
                            <img src={img} alt='img' className={css.pic} />
                        </Link>
                    </div>
                    <div className={css.title}>{t(title)}</div>
                </div>
            ))}
        </div>
    )
}

export default Hiking;