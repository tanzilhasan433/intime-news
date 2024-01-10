import LatestNewsDisplay from "../Home/LatestNews/LatestNewsDisplay";
import CountryNews from "../Home/News-Portal/CountryNews";

const News = () => {
    return (
        <div  className=" flex-col md:flex-row mt-10">
            <div className=" p-5 bg-slate-200 border-[5px]" >       
                 <CountryNews></CountryNews>
            </div>
            <div className=" p-5 bg-slate-300 mt-5 md:mt-0  shadow-xl"  >
                <h2 className="mt-10 mb-5 text-xl">সর্বশেষ</h2>
                <LatestNewsDisplay></LatestNewsDisplay>
            </div>
        </div>
    );
};

export default News;