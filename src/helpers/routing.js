import {
    ABOUT_URL,
    BLOG_URL,
    CASTLES_URL,
    CONTACT_URL,
    EXCLUSIVE_URL,
    FAVORITE_URL,
    FESTIVALS_URL,
    HIKING_URL,
    HOME_URL,
    LOG_IN,
    MOUNTAIN_URL,
    PRIVATE_URL,
    REGISTRATION,
    REVIEWS_URL,
    TOURCASTLE_URL,
    TOUR_URL,
    UPCOMINGTOURS_URL,
    OFFROADTOURS_URL,
    TOURSOFFROAD_URL,
    TOUREXCLUSIVE_URL,
    BLOGPAGE_URL, SEARCH_URL, ECOTOURS_URL, TOURECO_URL
} from "./urls";
import Home from "../components/home/Home";
import UpcomingTours from '../components/UpcomingTours/UpcomingTours'
import Festivals from '../components/Festivals/Festivals'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Blog from '../components/Blog/Blog'
import Reviews from '../components/Reviews/Reviews'
import Hiking from '../components/Hiking/Hiking'
import Mountain from '../components/Mountain/Mountain'
import EcoTours from '../components/EcoTours/EcoTours'
import OffRoadTours from '../components/OffRoadTours/OffRoadTours'
import Castles from '../components/Castles/Castles'
import Exclusive from '../components/Exclusive/Exclusive'
import Tour from "../pages/Tour";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Favorite from "../components/Favorites/Favorite";
import TourMount from '../pages/TourMount'
import TourCastle from "../pages/TourCastle";
import TourOffRoad from "../pages/TourOffRoad";
import TourExclusive from "../pages/TourExclusive";
import BlogPage from "../pages/BlogPage";
import Search from "../components/Search/Search";
import React from "react";
import TourEco from "../pages/TourEco";

// import Tour from "../components/Tour";
// import Tours from "../components/Tours";
export const myRoutes= [
    {
        path: HOME_URL,
        element: <Home/>
    },
    {
        path: UPCOMINGTOURS_URL,
        element: <UpcomingTours/>
    },
    {
        path: FESTIVALS_URL,
        element: <Festivals/>
    },
    {
        path: ABOUT_URL,
        element: <About/>
    },
    {
        path: CONTACT_URL,
        element: <Contact/>
    },
    {
        path: BLOG_URL,
        children: [
       {
          element: <Blog/>,
          index: true
       },
       {
          element: <BlogPage/>,
          path: BLOGPAGE_URL

       }
        ]
        
    },
    {
        path: REVIEWS_URL,
        element: <Reviews/>
    },


    {
        path: HIKING_URL,
        children: [
            {
                element: <Hiking/>,
                index: true
            },
            {
                element: <Tour/>,
                path: TOUR_URL
            }
        ]
    },
    {
        // path: MOUNTAIN_URL,
        // element: <Mountain/>
        
        path: MOUNTAIN_URL,
        children: [
            {
                element: <Mountain/>,
                index: true
            },
            {
                element: <TourMount/>,
                path: TOUR_URL
            }
        ]
    },
    {
        path: PRIVATE_URL,
        element: <EcoTours/>
    },
    {
        path: OFFROADTOURS_URL,
        children:
      [
        {
            element: <OffRoadTours/>,
            index:true
        },
        {
            element: <TourOffRoad/>,
            path: TOURSOFFROAD_URL
        }

      ]     
    },
    {
        // path: CASTLES_URL,
        // element: <Castles/>
        path: CASTLES_URL,
        children: [
            {
                element: <Castles/>,
                index: true
            },
            {
                element: <TourCastle/>,
                path: TOURCASTLE_URL
            }
        ]
    },
    {
        path: EXCLUSIVE_URL,
        children:[
            {
                element: <Exclusive/>,
                index: true
            },
            {
                element: <TourExclusive/>,
                path: TOUREXCLUSIVE_URL
            }

        ]
       
    },
    {
        path: LOG_IN,
        element: <Login/>
    },
    {
        path: REGISTRATION,
        element: <Registration/>
    },
    {
        path: FAVORITE_URL,
        element: <Favorite/>
    },
    {
        path: SEARCH_URL,
        element: <Search/>
    },
    // {
    //     path: ECOTOURS_URL,
    //     element: <EcoTours/>
    // },

    {
        path: ECOTOURS_URL,
        children:
            [
                {
                    element: <EcoTours/>,
                    index:true
                },
                {
                    element: <TourEco/>,
                    path: TOURECO_URL
                }

            ]
    }


]