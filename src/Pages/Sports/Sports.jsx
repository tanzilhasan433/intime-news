import SportsCard from "../../Components/SportsCard";
import useSports from "../../hooks/useSports";
import LatestNewsDisplay from "../Home/LatestNews/LatestNewsDisplay";

const Sports = () => {
    const [sports] = useSports()
    return (
            <div  className="flex flex-col md:flex-row mt-10">
            <div  className="flex-8 p-5 bg-slate-200 border-[5px]">
                
            <div className='grid pt-10 mb-10 md:grid-cols-2 justify-center gap-2'>
                  {
                        sports.map(sport => <SportsCard
                        key={sport._id}
                        sports={sport}
                        ></SportsCard>)
                  }
                  </div>

            

            </div>
            <div  className="flex-4  p-5 bg-slate-300 mt-5 md:mt-0 md:w-1/2 shadow-xl">
            <h2 className="mt-10 mb-5 text-xl">সর্বশেষ</h2>
                  <LatestNewsDisplay></LatestNewsDisplay>
            </div>
        </div>
    );
};

export default Sports;