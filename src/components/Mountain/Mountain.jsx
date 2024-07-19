import css from './Mountain.module.css'
import {Link, useNavigate} from 'react-router-dom';
import {HIKING_URL, LOG_IN, MOUNTAIN_URL} from '../../helpers/urls';
import { useDispatch,useSelector } from 'react-redux';
import { getMountain } from '../../redux/slices/mountainSlice';
import { CiHeart } from "react-icons/ci";
import { useEffect } from 'react';
import {getUsers} from "../../redux/slices/userSlice";
import { addUserIdGeneral } from "../../redux/slices/userSlice";
import {getTours} from "../../redux/slices/toursSlice";
import {useTranslation} from "react-i18next";
import {getLoggedUser} from "../../redux/slices/loggedUserSlice";

function Mountain(){
    const {t} = useTranslation();
  const dispatch = useDispatch();
  const {mountain} =  useSelector(state => state.mountainReducer);
  const {users} = useSelector(state => state.userReducer);
    const {tours} = useSelector(state => state.toursReducer);
    const{loggedUser} = useSelector(state=> state.loggedUserReducer)

    const token=localStorage.getItem("token");
    const navigate=useNavigate()


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

    useEffect(() => {
        dispatch(getTours());
        dispatch(getLoggedUser())
    }, []);

    const handleAddUserId = (userId, mountainId) => {

        if(token){
            userId = [...userId, loggedUser.id]
            dispatch(addUserIdGeneral({ userId:userId , resourceId: mountainId, resourceType: 'tours' }));
        }
        else{
            navigate(LOG_IN)
        }
    };


     return(
     <div className={css.container}>
      {tours.filter(t => t.typeId === 2).map(({ id, title, img, userId, typeId }) => (
          <div className={css.card} key={id}>
        <span className={css.heartCont}>
          <CiHeart className={css.addFav} onClick={() => handleAddUserId(userId, id)} />
        </span>
              <div className={css.imgWrapper}>
                  <Link key={id} to={`${MOUNTAIN_URL}/${id}`}>
                      <img src={img} alt='img' className={css.pic} />
                  </Link>
              </div>
              <div className={css.title}>{t(title)}</div>
          </div>
      ))}
  </div>
)
 
}
export default Mountain;