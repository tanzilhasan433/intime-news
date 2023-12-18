import SportsCard from "../../Components/SportsCard";
import useSports from "../../hooks/useSports";
import LatestNewsDisplay from "../Home/LatestNews/LatestNewsDisplay";

const Sports = () => {
    const [sports] = useSports()
    return (
            <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
            <div  style={{ flex: '6', padding: '5px', background: '#f2f2f2', border: '5px' }}>
                
            <div className='grid pt-10 mb-10 md:grid-cols-2 justify-center gap-2'>
                  {
                        sports.map(sport => <SportsCard
                        key={sport._id}
                        sports={sport}
                        ></SportsCard>)
                  }
                  </div>

            

            </div>
            <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
                  <LatestNewsDisplay></LatestNewsDisplay>
            </div>
        </div>
    );
};

export default Sports;