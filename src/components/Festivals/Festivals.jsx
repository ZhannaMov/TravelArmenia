import { useEffect, useState } from 'react';
import css from './Fesivals.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFestivals } from '../../redux/slices/festivalsSlice';
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
function Festivals() {
    const { t } = useTranslation()
    const dispatch = useDispatch();

    const { festivals } = useSelector(state => state.festivalsReducer);

    useEffect(() => {
        dispatch(getFestivals());
        console.log(festivals)
    }, [])

    const [modal, setModal] = useState(false)
    const handleModalToggle = () => {
        setModal(!modal); // Toggle the modal state
    };

    const [info, setInfo] = useState(null);
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const onCloseClick = () => {
        setModal(false);
    }

    return (
        // <div className={css.festCont}>
        <div className={`${css.festCont} ${modal ? css.darkBackground : ''}`}>
            <div className={css.imgCont}>
                <img src='../../../../images/festivalBack.webp'></img>
                <p className={css.festTitle}>{t("Take part in a Festival")}</p>
            </div>
            <div className={css.festInfo}>
                <p>
                    {t("festText")}
                </p>
            </div>
            <div className={css.regionFestsCont}>
                {
                    festivals.map(({ id, region, name, img, info }) => {
                        return (
                            <div key={id} className={css.festCard} onClick={() => {
                                handleModalToggle();
                                setInfo(t(info));
                                setName(name);
                                setImg(img)
                            }}
                            >
                                <img className={css.festImg} src={img} />
                                <div className={css.festCardInfo}>
                                    <span className={css.region}>{t(region)}</span>
                                    <span className={css.festName}>{t(name)}</span>
                                </div>
                            </div>
                        )
                    })
                }
                {modal && <Modal info={info} name={name} img={img} onCloseClick={onCloseClick} />}
            </div>
            <div className={css.mapfest}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771050.7555359331!2d43.8305715311111!3d40.9832979655572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041d1c1f284ea5f%3A0x77b9a6f72074803f!2z0JvQvtGA0Lg!5e0!3m2!1sru!2sam!4v1713364800135!5m2!1sru!2sam" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default Festivals;