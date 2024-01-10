import TrendingCard from "../../../../Components/SubComponents/TrendingCard";
import useTrending from "../../../../hooks/subHooks/useTrending";



const Trending = () => {
    const [trending] = useTrending();
    return (
        <div className="mt-12">

                <div  className="flex flex-col sm:flex-row">
        <div  className="flex-9 sm:flex-1 p-2 bg-gray-200 border-2">
            
        <div className="grid   h-full w-full md:grid-cols-3 justify-center gap-2">
                {
                    trending.map(trendingItem => <TrendingCard
                        key={trendingItem._id}
                        trendingItem={trendingItem}
                    ></TrendingCard>)
                }
                </div>

        </div>
        <div  className="flex-3 sm:p-2 bg-gray-300 lg:w-1/4 shadow-xl">
            
        </div>
    </div>
        </div>
    );
};

export default Trending;