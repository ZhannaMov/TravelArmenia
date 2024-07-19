
 import css from './Home.module.css'
 import { Link } from 'react-router-dom';
 import {useDispatch, useSelector} from "react-redux";
 import tourTypesReducer, {getTourTypes} from "../../redux/slices/tourTypesSlice";
 import {useEffect} from "react";
 import {useTranslation} from "react-i18next";

function Home(){
    const {t} = useTranslation()
  const dispatch = useDispatch();
  const { tourTypes } = useSelector(state => state.tourTypesReducer); // Make sure to use correct reducer name

  useEffect(() => {
    dispatch(getTourTypes());
    console.log(tourTypes)
  }, []);
  return(
    <div className={css.container}>
            {tourTypes.map(({id, name, link, img})=>{
                return (

                    <div key={id} className={css.card}>
                        <Link to={link}>
                            <img src={img} alt='img' className={css.cardImg}/>
                        </Link>
                        <div className={css.text}>{t(name)}</div>
                    </div>

                )
            })}
    </div>
  )
}
export default Home;