import css from './Reviews.module.css'
import img from '../../images/arevatsag.jpg'
import {useDispatch, useSelector} from 'react-redux';
import { getReviews } from '../../redux/slices/reviewsSlice';
import { useEffect } from 'react';
import { LiaStarSolid } from "react-icons/lia";
import Paginate from './Paginate';
import {useState} from "react";
import {useTranslation} from "react-i18next";
function Reviews(){
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {reviews} = useSelector(state => state.reviewsReducer);

    const [page, setPage] = useState(1);
    const reviewsPerPage = 9;


    useEffect(()=>{
        dispatch(getReviews());
        console.log('ssd')
        console.log(reviews)
     }, [])

    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const paginatedReviews = reviews.slice(startIndex, endIndex);

     return (
        <div className={css.reviewsCont}>
           <div className={css.reviewImgCont}>
            <div className={css.revCover}>  
                <p className={css.revH}>{t("REVIEWS")}</p>
            </div>
           </div>

      <div className={css.userRevCont}>
       {
           paginatedReviews.map(({ id, userName, review }) => (
                   <div key={id} className={css.revCard}>
                       <p className={css.stars}><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></p>
                       <p className={css.revName}>{userName}</p>
                       <p>{review}</p>
                   </div>
               ))
       }
          <Paginate pageCount={Math.ceil(reviews.length / reviewsPerPage)} setPage={setPage} />
           </div>
        </div>
     )
}
export default Reviews;