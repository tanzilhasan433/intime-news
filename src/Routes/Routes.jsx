
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import LatestNews from "../Pages/Home/LatestNews/LatestNews";
import National from "../Pages/National/National";
import Politics from "../Pages/Politics/Politics";
import Economy from "../Pages/Economy/Economy";
import International from "../Pages/International/International";
import Sports from "../Pages/Sports/Sports";
import Entertainment from "../Pages/Entertainment/Entertainment";
import Jobs from "../Pages/Jobs/Jobs";
import News from "../Pages/News/News";
import Trending from "../Pages/Home/SubPages/Trending/Trending";
import AllBd from "../Pages/AllBD/AllBd";
import Details from "../Components/SubComponents/Details";
import TrendingFirst from "../Pages/Home/SubPages/TrendingFirst/TrendingFirst";
// import NewsList from "../Components/NewsList";
// import NewsDetails from "../Components/NewsDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/latest',
                element: <LatestNews></LatestNews>
            },
            {
                path: '/national',
                element: <National></National>
            },
            {
                path: '/politics',
                element: <Politics></Politics>
            },
            {
                path: '/economy',
                element: <Economy></Economy>
            },
            {
                path: '/international',
                element: <International></International>
            },
            {
                path: '/sports',
                element: <Sports></Sports>
            },
            {
                path: '/entertainment',
                element: <Entertainment></Entertainment>
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'allbd',
                element: <AllBd></AllBd>
            },
            {
                path: 'trending',
                element: <Trending></Trending>
            },
            {
                path: 'trendingfirst',
                element: <TrendingFirst></TrendingFirst>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    },
 
    {
        path: '*',
        element: <NotFound/>
    }
]);