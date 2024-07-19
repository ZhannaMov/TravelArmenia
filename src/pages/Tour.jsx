
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
import axios from 'axios'
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";
import {addBooking} from "../redux/slices/bookingSlice";
import BookingForm from "./BookingForm";


const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required('Phone number is required'),
    citizenship: yup.string().required(),
    mail: yup.string().email('Invalid email format').required('Email is required'),
    date: yup.date().required('Date is required'),
    quantity: yup.number().required('Quantity is required'),

});

function Tour () {
    const {t} = useTranslation()
    const notify = () => toast("You have booked successfully!");



    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });


  //const data = useHikingData();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tourData, setTourData] = useState(null);
  const {tours} =  useSelector(state => state.toursReducer);
  const {loggedUser} = useSelector(state => state.loggedUserReducer);
  const{bookings} =  useSelector(state => state.bookingReducer);

const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(getTours());
  }, []);

  useEffect(()=>{
    dispatch(getLoggedUser());
   
  },[]);



  useEffect(() => {
    if (id && tours.length > 0) {
     
      let tour = tours.filter(t => t.typeId === 1).find(d => d.id === id);
      setTourData(tour);
      console.log(tourData)
    }
  }, [id, tours]);

  if(!tourData){
    return null
  }
console.log(tourData.id)

    const getPriceWithDiscount = (price) => {
        if (loggedUser) {
            return price - (price * 0.05);
        } else {
            return price;
        }
    };

  return (
      <div className={css.container}>
          <div className={css.tourDescrip}>
              <img src={tourData.img} className={css.tourImg}/>
              <div className={css.nameAndInfo}>
                  <h1 className={css.tourName}>{t(tourData.title)}</h1>
                  <p>{t(tourData.info)}</p>
                  {/*<p>{tourData.info}</p>*/}
              </div>
          </div>

          <p className={css.upcomingTime}><span><FaCalendarAlt/></span>{t("upcoming")}- {tourData.date}</p>
          <p className={css.departure}>
        <span><BsClockHistory/></span>
              {t("departure")} - 08:00PM,  {t("arrival")} - 07:00PM,
              {t("address")} - {t("Komitas Avenue")} 21 </p>
          <p className={css.price}><span><RiMoneyDollarCircleFill/></span>{t("price")} - {token ? getPriceWithDiscount(tourData.price) : tourData.price}
              {t("amd")}</p>
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

export default Tour;
