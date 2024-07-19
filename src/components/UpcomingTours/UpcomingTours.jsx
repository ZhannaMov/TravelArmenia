import css from './UpcomingTours.module.css'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getTours} from "../../redux/slices/toursSlice";
import {useEffect} from "react";
import {CiHeart} from "react-icons/ci";
import {FESTIVALS_URL, HIKING_URL} from "../../helpers/urls";
import {addUserIdGeneral, getUsers} from "../../redux/slices/userSlice";
import {useTranslation} from "react-i18next";
import {getFestivals} from "../../redux/slices/festivalsSlice";


function UpcomingTours(){

    const {t}= useTranslation()
    const dispatch = useDispatch();
    const {tours} =  useSelector(state => state.toursReducer);
    const {users} = useSelector(state => state.userReducer);
    const {festivals} = useSelector(state => state.festivalsReducer);


    useEffect(()=>{
        dispatch(getFestivals());
        console.log(festivals)
    }, [])


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


    const checkingDate = (tourDate)=>{
        if (!tourDate) return false;
        const parts = tourDate.split('.');
        const month = parseInt(parts[1], 10);
        const currentDate = new Date();
        const currentMonthIndex = currentDate.getMonth();
        if( currentMonthIndex+1===month){
            return true;
        }
    }
    useEffect(() => {
        tours.forEach(tour => checkingDate(tour.date));
    }, []);

     return(
         <div className="w-full h-auto overflow-auto border border-red-500">
       <h2 className={css.upcomingH}>{t("upcomingInfo")} 2024</h2>
             <div className={css.container}>
                 {tours.filter(t => checkingDate(t.date)).map(({id, title, img, userId, typeId, date}) => (
                     <div className={css.card} key={id}>
        <span className={css.heartCont}>
          <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)}/>
        </span>
                         <div className={css.imgWrapper}>
                             <Link key={id} to={`${HIKING_URL}/${id}`}>
                                 <img src={img} alt='img' className={css.pic}/>
                             </Link>
                         </div>
                         <div className={css.title}>{t(title)}<span className={css.upDate}>{date}</span></div>
                     </div>
                 ))}

                 <div className={css.upcomingFest}>
                     <h2 className={css.upFestH}>{t("upcomingInfo2")}</h2>
                     <div className={css.upfestCards}>
                     {
                         festivals.filter(festival => {
                             const matchingTour = tours.find(tour => tour.id === festival.tourId && tour.date === festival.date);
                             return matchingTour !== undefined;
                         }).map(({id, region, name, img}) => (
                             <div key={id} className={css.festCard}>
                                <Link to={FESTIVALS_URL}><img className={css.festImg} src={img}/></Link>
                                 <div className={css.festCardInfo}>
                                     <span className={css.region}>{t(region)}</span>
                                     <span className={css.festName}>{t(name)}</span>
                                 </div>
                             </div>
                         ))
                     }
                     </div>
                 </div>

             </div>
         </div>
     )
}

export default UpcomingTours;