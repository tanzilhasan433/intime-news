import TrendingFirstCard from "../../../../Components/SubComponents/TrendingFirstCard";
import useTrendingFirst from "../../../../hooks/subHooks/useTrendingFirst";



const TrendingFirst = () => {
    const [trendingfirst] = useTrendingFirst();
    return (
            <div>
                   <div  className="" style={{ display: 'flex', width: '100%' }}>
                      <div  style={{ flex: '9', padding: '5px', background: '#f2f2f2', border: '5px' }}>                        
                             <div className="grid   h-[100%] w-[100%]  justify-center">
                                    {
                                        trendingfirst.map(trendingfirstItem => <TrendingFirstCard
                                            key={trendingfirstItem._id}
                                            trendingfirstItem={trendingfirstItem}
                                        ></TrendingFirstCard>)
                                    }
                             </div>

                         </div>
                     <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                        
                    </div>
                 </div>
             </div>
    );
};

export default TrendingFirst;