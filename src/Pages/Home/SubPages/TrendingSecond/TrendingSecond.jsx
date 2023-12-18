import TrendingSecondCard from "../../../../Components/SubComponents/TrendingSecondCard";
import useTrendingSecond from "../../../../hooks/subHooks/useTrendingSecond";

const TrendingSecond = () => {
    const [trendingsecond] = useTrendingSecond();
    return (
        
        <div>

                <div  className="" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '9', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className="grid    md:grid-cols-2 justify-center gap-2">
                {
                    trendingsecond.map(trendingsecondItem => <TrendingSecondCard
                        key={trendingsecondItem._id}
                        trendingsecondItem={trendingsecondItem}
                    ></TrendingSecondCard>)
                }
                </div>

        </div>
        <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
            
        </div>
    </div>
        </div>
    );
};

export default TrendingSecond;