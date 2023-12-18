import ElectionHomeCard from "../../../../Components/SubComponents/ElectionHomeCard";
import useElectionHome from "../../../../hooks/subHooks/useElectionHome";

const ElectionHome = () => {
    const [electionhome] = useElectionHome();
    return (
        <div className="mt-10 mb-10 bg-sky-100">   
            <h1 className=" text-2xl">জাতীয় সংসদ নির্বাচন</h1> 
            <div className="grid mt-10  md:grid-cols-4 justify-center gap-2">
                    {
                        electionhome.map(electionhomeItem => <ElectionHomeCard
                            key={electionhomeItem._id}
                            electionhomeItem={electionhomeItem}
                        ></ElectionHomeCard>)
                    }
           </div>
        </div>

    );
};

export default ElectionHome;