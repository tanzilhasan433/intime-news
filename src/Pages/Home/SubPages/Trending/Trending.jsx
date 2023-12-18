import TrendingCard from "../../../../Components/SubComponents/TrendingCard";
import useTrending from "../../../../hooks/subHooks/useTrending";



const Trending = () => {
    const [trending] = useTrending();
    return (
        <div>

                <div  className="" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '9', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className="grid    md:grid-cols-3 justify-center gap-2">
                {
                    trending.map(trendingItem => <TrendingCard
                        key={trendingItem._id}
                        trendingItem={trendingItem}
                    ></TrendingCard>)
                }
                </div>

        </div>
        <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
            
        </div>
    </div>
        </div>
    );
};

export default Trending;