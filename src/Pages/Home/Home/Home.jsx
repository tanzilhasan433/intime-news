
import InternationalDisplay from "../../International/InternationalDisplay";
import NationalDisplay from "../../National/NationalDisplay";
import PoliticsDisplay from "../../Politics/PoliticsDisplay";
import SportsDisplay from "../../Sports/SportsDisplay";
import Header from "../Header/Header";
import CountryNews from "../News-Portal/CountryNews";
import ElectionHome from "../SubPages/ElectionHome/ElectionHome";
import Trending from "../SubPages/Trending/Trending";
import TrendingFirst from "../SubPages/TrendingFirst/TrendingFirst";
import TrendingSecond from "../SubPages/TrendingSecond/TrendingSecond";

const Home = () => {
    return (
        <div>     
                  
            <Header></Header>
            <TrendingFirst></TrendingFirst>
            <TrendingSecond></TrendingSecond>
            <Trending></Trending>
            <ElectionHome></ElectionHome>           
            <NationalDisplay></NationalDisplay>
            <SportsDisplay></SportsDisplay>
            <InternationalDisplay></InternationalDisplay>
            <CountryNews></CountryNews>
            <PoliticsDisplay></PoliticsDisplay>
            
        </div>
    );
};

export default Home;