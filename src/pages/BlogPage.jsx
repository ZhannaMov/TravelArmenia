import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import css from './BlogPage.module.css'
import { getBlog } from '../redux/slices/blogSlice';
import {useTranslation} from "react-i18next";



const BlogPage = () => {
  //const data = useHikingData();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState(null);
  const {blog} =  useSelector(state => state.blogReducer);
  const {t} =useTranslation()

  useEffect(() => {
    dispatch(getBlog());
    console.log(blogData)
  }, [dispatch]);


  useEffect(() => {
    if (id && blog.length > 0) {
        let blogItem= blog.find(d => d.id === id);
      setBlogData(blogItem);
      console.log(blogData)
    }
  }, [id, blog]);

  if(!blogData){
    return null
  }

  return (
      <div className={css.blogPageCont}>
          <h1 className={css.blogPageName}>{t(blogData.name)}</h1>
          <p className={css.blogPageP}>{t(blogData.description)}</p>
          <img src={blogData.backImg}/>
          <div className={css.blogItemCont}>
              <h2 className={css.blogH1}>{t(blogData.h1)}</h2>
              <p className={css.blogText}>{t(blogData.txt1)}</p>
              <img src={blogData.img1} className={css.blogImg}/>
          </div>

          <div className={css.blogItemCont}>
              <h2 className={css.blogH1}>{t(blogData.h2)}</h2>
              <p className={css.blogText}>{t(blogData.txt2)}</p>
              <img src={blogData.img2} className={css.blogImg}/>
          </div>


          <div className={css.blogItemCont}>
              <h2 className={css.blogH1}>{t(blogData.h3)}</h2>
              <p className={css.blogText}>{t(blogData.txt3)}</p>
              <img src={blogData.img3} className={css.blogImg}/>
          </div>

          <div className={css.blogItemCont}>
              <h2 className={css.blogH1}>{t(blogData.h4)}</h2>
              <p className={css.blogText}>{t(blogData.txt4)}</p>
              <img src={blogData.img4} className={css.blogImg}/>
          </div>

          <div className={css.blogItemCont}>
              {blogData.h5 && <h2 className={css.blogH1}>{t(blogData.h5)}</h2>}
            <p className={css.blogText}>{t(blogData.txt5)}</p>
              { blogData.img5 && <img src={blogData.img5} className={css.blogImg}/>}
          </div>


      </div>
  )
}
export default BlogPage;
