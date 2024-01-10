import LatestCard from "../../../Components/LatestCard";
import useLatest from "../../../hooks/useLatest";

const LatestNews = () => {
    const [latest] = useLatest();
    return (
        <div  className="mt-10 flex w-[100%]">
        <div  className="flex-8 p-5 bg-slate-200 border-[5px]">
            
        <div className='grid pt-10 ms-20  md:grid-cols-1 justify-center gap-2'>
        <h2 className=" mb-5 text-xl">সর্বশেষ</h2>
            {
                latest.map(latestItem => <LatestCard
                    key={latestItem._id}
                    latestItem={latestItem}
                ></LatestCard>)
            }
        </div>

        </div>
        <div   className="flex-4 p-5 bg-slate-300 w-[50%] h-[50] shadow-xl">
            
        </div>
    </div>
    );
};

export default LatestNews;