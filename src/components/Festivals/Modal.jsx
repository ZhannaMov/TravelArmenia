import React from 'react';
import css from './Modal.module.css'
import {useTranslation} from "react-i18next";

const Modal = ({info, name, img, onCloseClick}) => {
    const {t} = useTranslation()
    return (
        <div className={css.modalFestival}>
            <img src={img}/>
            <button className={css.modalBtn} onClick={onCloseClick}>X</button>
            <h2 className={css.modalName}>{t(name)}</h2>
            <p className={css.modalInfo}>{info}</p>
            
        </div>
    );
};

export default Modal;