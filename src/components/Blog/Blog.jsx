import css from './Blog.module.css'

import {useDispatch, useSelector} from 'react-redux';
import { getBlog } from '../../redux/slices/blogSlice';
import { useEffect } from 'react';
import { LiaStarSolid } from "react-icons/lia";
import { BLOG_URL } from '../../helpers/urls';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
function Blog(){
    const dispatch = useDispatch();
const {t} = useTranslation()
    const {blog} = useSelector(state => state.blogReducer);

     useEffect(()=>{
        dispatch(getBlog());
        console.log('ssd')
        
     }, [])

     return (
        <div className={css.blogCont}>
       { 
        blog.map(({id, name,img})=>{
            return(
                <div key={id} className={css.blogCard} >
                     <div className={css.blogImgWrapper}>
                        <Link key={id} to={`${BLOG_URL}/${id}`}>
                            <img src={img} alt='img' className={css.blogPic} />
                        </Link>
                    </div>
                <div className={css.blogName}>
                    <p>{t(name)}</p>
                </div>
                 
                </div>
            )
        })
       }
       
           </div>
     )
}
export default Blog;