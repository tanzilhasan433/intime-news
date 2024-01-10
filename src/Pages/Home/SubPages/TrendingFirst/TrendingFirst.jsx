import TrendingFirstCard from "../../../../Components/SubComponents/TrendingFirstCard";
import useTrendingFirst from "../../../../hooks/subHooks/useTrendingFirst";


const TrendingFirst = () => {
    const [trendingfirst] = useTrendingFirst();
    return (
            <div>
                   <div  className="flex flex-col sm:flex-row" >
                      <div className="flex-9 sm:flex-1 p-2 bg-gray-200 border-2" >                        
                             <div className="grid h-full w-full justify-center">
                                    {
                                        trendingfirst.map(trendingfirstItem => <TrendingFirstCard
                                            key={trendingfirstItem._id}
                                            trendingfirstItem={trendingfirstItem}
                                        ></TrendingFirstCard>)
                                    }                                   
                             </div>                           
                         </div>
                         <div className="flex-3 sm:p-2 bg-gray-300 lg:w-1/4 shadow-xl" >
                            <h2>ADD details </h2>
                        </div>
                 </div>
             </div>
    );
};

export default TrendingFirst;