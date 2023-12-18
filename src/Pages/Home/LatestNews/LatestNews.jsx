import LatestCard from "../../../Components/LatestCard";
import useLatest from "../../../hooks/useLatest";

const LatestNews = () => {
    const [latest] = useLatest();
    return (
        <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '8', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className='grid pt-10 ms-20  md:grid-cols-1 justify-center gap-2'>
            {
                latest.map(latestItem => <LatestCard
                    key={latestItem._id}
                    latestItem={latestItem}
                ></LatestCard>)
            }
        </div>

        </div>
        <div  style={{ flex: '4', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
            
        </div>
    </div>
    );
};

export default LatestNews;