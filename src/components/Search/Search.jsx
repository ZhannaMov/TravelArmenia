import React, {useEffect, useState} from 'react';
import css from './search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTours} from "../../redux/slices/toursSlice";
import {Link} from "react-router-dom";
import {CASTLES_URL, EXCLUSIVE_URL, HIKING_URL, MOUNTAIN_URL, OFFROADTOURS_URL, PRIVATE_URL} from "../../helpers/urls";
import {useTranslation} from "react-i18next";

const Search = () => {
    const dispatch = useDispatch();
const {t} = useTranslation()
    const[search, setSearch] = useState("");
    const {tours} = useSelector(state => state.toursReducer);
 const [searchedTours, setSearchedTours] = useState([])

    useEffect(() => {
        dispatch(getTours());
    }, []);
    const searchTours = ()=> {
        setSearchedTours(tours.filter(t => t.title.toLowerCase().includes(search.toLowerCase())));
    }
    useEffect(() => {
        searchTours()
    }, []);
console.log(tours)
    return (
        <div className={css.searchPage}>

            <form className={css.searchInpCont}
                  onSubmit={(e) => {
                      e.preventDefault();
                      searchTours();
                  }}>
                <input className={css.searchInput} onChange={(e)=>setSearch(e.target.value)}/>
                <button className={css.searchBtn} onClick={()=>searchTours()}>{t("search")}</button>
            </form>

            {search &&
            <div className={css.searchedToursCont}>
                {
                    searchedTours.map(({id, title, img, typeId})=>{
                        let url = (typeId === 1 && HIKING_URL)
                            ||
                            (typeId === 2 && MOUNTAIN_URL)
                            ||(typeId === 3 && PRIVATE_URL)
                            ||(typeId === 4 && OFFROADTOURS_URL)
                            ||(typeId === 5 && CASTLES_URL)
                            || (typeId === 6 && EXCLUSIVE_URL)

                        return(
                            <div key={id} className={css.card}>
                                <Link key={id} to={`${url}/${id}`}>
                                <div className={css.imgWrapper}>
                                    <img src={img} alt='img' className={css.pic}/>
                                </div>
                                <div className={css.title}>{t(title)}</div>
                                </Link>
                            </div>
                        )
                    })
                }


            </div>
            }
        </div>
    );
};

export default Search;