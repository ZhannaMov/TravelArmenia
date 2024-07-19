import React, { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { getHiking } from "../../redux/slices/hikingSlice";
import {getUsers, removeUserId} from "../../redux/slices/userSlice";
import css from './Wishlist.module.css'
import {getTours} from "../../redux/slices/toursSlice";
import {CASTLES_URL, EXCLUSIVE_URL, HIKING_URL, MOUNTAIN_URL, OFFROADTOURS_URL, PRIVATE_URL} from "../../helpers/urls";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Wishlist() {
   const dispatch = useDispatch();
   const {users} = useSelector(state => state.userReducer);
   const {tours} = useSelector(state => state.toursReducer);
   const {t} = useTranslation()

   useEffect(()=>{
      dispatch(getUsers());
   },[])


    useEffect(()=>{
        dispatch(getTours())
    },[])



    const handleDeleteFav = (itemId) => {
        const currentUserID = users.id;
        const selected = tours.find(item => item.id === itemId);
        if (selected && selected.userId && selected.userId.includes(currentUserID)) {
            const updatedUserIds = selected.userId.filter(id => id !== currentUserID);
            dispatch(removeUserId({ userId: updatedUserIds, itemId }));
        }
    };

   return (

       <div className={css.container}>
           {
               tours.filter(item => item.userId && item.userId.includes(users?.id))
                   .map(({id, title, userId, img, typeId}) => {

                       let url = (typeId === 1 && HIKING_URL)
                           ||
                           (typeId === 2 && MOUNTAIN_URL)
                           ||(typeId === 3 && PRIVATE_URL)
                           ||(typeId === 4 && OFFROADTOURS_URL)
                           ||(typeId === 5 && CASTLES_URL)
                           || (typeId === 6 && EXCLUSIVE_URL)

                       return (

                           <div className={css.card}>
                               <Link key={id} to={`${url}/${id}`}>
                                   <button className={css.deleteFav}
                                   // onClick={handleDeleteFav}
                                     onClick={() => handleDeleteFav(id)}
                               >X
                               </button>
                                   <div className={css.imgWrapper}>
                               <img src={img} className={css.pic} alt=""/>
                                   </div>
                               <div className={css.titleW}>
                                   <p>{t(title)}</p>

                               </div>
                           </Link>
                   </div>
                   )
                   })
           }
       </div>
   )

}

export default Wishlist;