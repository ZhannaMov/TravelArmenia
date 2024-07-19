import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {getLoggedUser} from '../redux/slices/loggedUserSlice'
import css from './Tour.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTours} from "../redux/slices/toursSlice";
import {CiHeart} from "react-icons/ci";
import {HIKING_URL} from "../helpers/urls";
import { FaCalendarAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import BookingForm from "./BookingForm";

const TourExclusive = () => {
    const {t} = useTranslation();
  //const data = useHikingData();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tourData, setTourData] = useState(null);
  const {tours} =  useSelector(state => state.toursReducer);
  const {loggedUser} = useSelector(state => state. loggedUserReducer);

  useEffect(() => {
    dispatch(getTours());
  }, []);

  useEffect(()=>{
    dispatch(getLoggedUser());
   
  },[])

  useEffect(() => {
    if (id && tours.length > 0) {
     
      let tour = tours.filter(t => t.typeId === 6).find(d => d.id === id);
      setTourData(tour);
      console.log(tourData)
    }
  }, [id, tours]);

  if(!tourData){
    return null
  }

  return (

      <div className={css.container}>

          <div className={css.tourDescrip}>
              <img src={tourData.img} className={css.tourImg}/>
              <div className={css.nameAndInfo}>
                  <h1 className={css.tourName}>{t(tourData.title)}</h1>
                  <p>{t(tourData.info)}</p>
              </div>
          </div>


          <p className={css.upcomingTime}><span><FaCalendarAlt/></span>{t("upcoming")}- {tourData.date}</p>
          <p className={css.departure}>
              <span><BsClockHistory/></span>
              {t("departure")} - 08:00PM, {t("arrival")} - 07:00PM,
              {t("address")} - {t("Komitas Avenue")} 21 </p>
          <p className={css.price}><span><RiMoneyDollarCircleFill/></span>{t("price")} - 6500 {t("amd")}</p>
          <div className={css.serviceInfo}>
              <p className={css.includes}><span><MdDoneOutline/></span> {t("Includes")}</p>
              <p className={css.transportInfo}><span><TbBus/></span>{t("transport")}</p>
              <p className={css.guideInfo}><span><FaUserTie/></span>{t("guide")} </p>
          </div>

          <div className={css.bookingCont}>
              <BookingForm id={id}/>
          </div>
      </div>

  );
};

export default TourExclusive;