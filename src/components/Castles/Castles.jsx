import css from './Castles.module.css'
import {Link, useNavigate} from 'react-router-dom';
import {CASTLES_URL, HIKING_URL, LOG_IN} from '../../helpers/urls';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHiking} from "../../redux/slices/hikingSlice";
import {getUsers} from "../../redux/slices/userSlice";
import { addUserId } from "../../redux/slices/userSlice";
import {removeUserId} from "../../redux/slices/userSlice";
import {getTours} from "../../redux/slices/toursSlice";
import tour from "../../pages/Tour";
import { addUserIdGeneral } from "../../redux/slices/userSlice";
import {CiHeart} from "react-icons/ci";
import {useTranslation} from "react-i18next";
import {getLoggedUser} from "../../redux/slices/loggedUserSlice";




function Castles(){
    const {t} = useTranslation();
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



    const handleAddUserId = (userId, castleId) => {

        if(token){
            userId = [...userId, loggedUser.id]
            dispatch(addUserIdGeneral({ userId:userId , resourceId: castleId, resourceType: 'tours' }))
        }
        else{
            navigate(LOG_IN)
        }
    };

     return(
      <div className={css.container}>
          {tours.filter(t => t.typeId === 5).map(({ id, title, img, userId, typeId }) => (
              <div className={css.card} key={id}>
        <span className={css.heartCont}>
          <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)} />
        </span>
                  <div className={css.imgWrapper}>
                      <Link key={id} to={`${CASTLES_URL}/${id}`}>
                          <img src={img} alt='img' className={css.pic} />
                      </Link>
                  </div>
                  <div className={css.title}>{t(title)}</div>
              </div>
          ))}
    </div>
     )
}
export default Castles;