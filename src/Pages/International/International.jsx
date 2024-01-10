import InternationalCard from "../../Components/InternationalCard";
import useInternational from "../../hooks/useInternational";

const International = () => {
     const [international] = useInternational();
    return (
        <div  className="mt-10 flex w-[100%]">
        <div  className="flex-8 p-5 bg-slate-200 border-[5px]">

        {/* className="flex-8 p-5 bg-gray-200 border-5" */}
            
        <div className='grid pt-10  md:grid-cols-2 justify-center gap-2'>
            {
                international.map(internationalItem => <InternationalCard
                    key={internationalItem._id}
                    internationalItem={internationalItem}
                ></InternationalCard>)
            }
        </div>

        </div>
        <div  className="flex-4 p-5 bg-slate-300 w-[50%] h-[50] shadow-xl">
            
        </div>
    </div>
    );
};

export default International;