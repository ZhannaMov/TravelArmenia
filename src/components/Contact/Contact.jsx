
import css from './Contact.module.css'
import img from '../../images/contact.jpg'
import { MdPlace } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import {useTranslation} from "react-i18next";
// import {mapOptions} from "../Map/MapConfiguration";
// import Map from '../Map/Map';
// import { useJsApiLoader } from '@react-google-maps/api';
function Contact(){
    // const { isLoaded } = useJsApiLoader({
    //     id: mapOptions.googleMapsApiKey,
    //     googleMapsApiKey: "YOUR_API_KEY"
    // })



    const {t} = useTranslation()
    return (
        <div className={css.contactCont}>

            <div className={css.contImg}>
                <div className={css.coverImg}>
                    <h2 className={css.contactH}>{t("contacts")}</h2>
                </div>
            </div>
            <p className={css.questionH}>{t("contactsUs")}</p>
            <div className={css.contactFormContainer}>

                <form className={css.questionForm}>
                    <input placeholder='Name Surname *' className={css.contactInp}/>
                    <input placeholder='E-Mail *' className={css.contactInp}/>
                    <input placeholder='Phone (+374 XX) XX XX XX * ' className={css.contactInp}/>
                    <input placeholder="Message" className={css.contactNote}/>

                    <button className={css.contactBtn}>SEND</button>
                </form>
                <div className={css.contactsCont}>
                    <p className={css.conatactsP}><span><MdPlace/></span> {t("Komitas Avenue")} 21</p>
                    <p className={css.conatactsP}><span><IoMdPhonePortrait/></span> +3747785665</p>
                    <p className={css.conatactsP}><span><FaViber/></span> +3747785665</p>
                    <p className={css.conatactsP}><span><FaWhatsapp/></span> +3747785665</p>
                    <p className={css.conatactsP}><span><IoMailSharp/></span> info@armenianjourney.am</p>

                    <div className={css.socialMedia}>
                        <p className={css.socialMediaItem}><FaFacebook/>
                        </p>
                        <p className={css.socialMediaItem}><AiFillInstagram/></p>
                        <p className={css.socialMediaItem}><FaTelegram/></p>
                    </div>
                </div>
            </div>
            {/*<Map isLoaded={isLoaded}/>*/}
            <div className={css.mapCont}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2208610662788!2d44.52386457652199!3d40.181898019897694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce8b5a5f73b%3A0x2bd8b308dba373ee!2z1LXWgNaH1aHVttWrINWK1aXVv9Wh1a_VodW2INWA1aHVtNWh1azVvdWh1oDVodW2!5e0!3m2!1shy!2sam!4v1713361907496!5m2!1shy!2sam"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title='Responsive Google Map'></iframe>
            </div>


</div>
)
}

export default Contact;