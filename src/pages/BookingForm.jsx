import React from 'react';
import css from "./bookingForm.module.css";
import {ToastContainer} from "react-toastify";
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {addBooking} from "../redux/slices/bookingSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required('Phone number is required'),
    citizenship: yup.string().required(),
    mail: yup.string().email('Invalid email format').required('Email is required'),
    date: yup.date().required('Date is required'),
    quantity: yup.number().required('Quantity is required'),

});
const BookingForm = ({id}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const{bookings} =  useSelector(state => state.bookingReducer);
    const onSubmitFn = async (data) => {

        try {
            await dispatch(addBooking({ tourId: id, formData: data }));
            notify();
            console.log("it is called")// Pass the entire form data

        } catch (error) {
            console.error('Error submitting booking:', error);
            // toast.error('Error submitting booking');
        }
    };



    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const notify = () => toast("You have booked successfully!");


    return (
        <div>
            <form className={css.booking}
                  onSubmit={handleSubmit(onSubmitFn)}>
                <h2 className={css.bookH}>{t("booking")}</h2>

                <div className={css.column}>
                    <label htmlFor="name">{t("fullName")}</label>
                    <input type="text" id='name' {...register('name')} className={css.bookingInputs}/>
                    {errors.name && <span className={css.bookError}>{errors.name.message}</span>}
                    <label htmlFor="phone">{t("phone")}</label>
                    <input type="number" id='phone' {...register('number')} className={css.bookingInputs}/>
                    {errors.number && <span className={css.bookError}>{errors.number.message}</span>}
                    <label htmlFor="date">{t("date")}</label>
                    <input type="date" id='date' className={css.bookingInputs} {...register('date')}/>
                    {errors.date && <span className={css.bookError}>{errors.date.message}</span>}
                </div>

                <div className={css.column}>
                    <label htmlFor="citizenship">{t("citizenship")}</label>
                    <input type="text" id='citizenship' className={css.bookingInputs} {...register("citizenship")} />
                    {errors.citizenship && <span className={css.bookError}>{errors.citizenship.message}</span>}

                    <label htmlFor="email">{t("email")}</label>
                    <input type="email" id='email' {...register("mail")} className={css.bookingInputs}
                        // defaultValue={loggedUser ? loggedUser[0].mail : ''}
                    />
                    {errors.mail && <span className={css.bookError}>{errors.mail.message}</span>}
                    <label htmlFor="quantity">{t("quantity")}</label>
                    <input type="number" id='quantity' className={css.bookingInputs}  {...register('quantity')}/>
                    {errors.quantity && <span className={css.bookError}>{errors.quantity.message}</span>}
                </div>

                <div className={css.note}>
                    <label htmlFor="note">{t("note")}</label>
                    <input type="text" id='note' className={css.noteInput}/>

                </div>

                <button type='submit' className={css.book}
                        onClick={onSubmitFn}>{t("submit")}</button>
                <ToastContainer/>

            </form>

        </div>
    );
};

export default BookingForm;
