import ExclusiveHomeCard from "../../../../Components/SubComponents/ExclusiveHomeCard";
import useExclusiveHome from "../../../../hooks/subHooks/useExclusiveHome";


const ExclusiveHome = () => {
    const [exclusive] = useExclusiveHome();
    return (
        <div className="mt-10 mb-10 bg-sky-100">   
            <h1 className=" text-2xl"> এক্সক্লুসিভ </h1>  
            <div className="grid mt-2 mb-5 md:grid-cols-4 justify-center gap-2">
                    {
                        exclusive.map(exclusiveItem => <ExclusiveHomeCard
                            key={exclusiveItem._id}
                            exclusiveItem={exclusiveItem}
                        ></ExclusiveHomeCard>)
                    }
           </div>
        </div>

    );
};

export default ExclusiveHome;