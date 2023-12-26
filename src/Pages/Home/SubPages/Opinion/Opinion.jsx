import OpinionCard from "../../../../Components/SubComponents/OpinionCard";
import useOpinion from "../../../../hooks/subHooks/useOpinion";


const Opinion = () => {
    const [opinion] = useOpinion();
    return (                        
            <div className="">
                {
                    opinion.map(opinionItem => <OpinionCard
                        key={opinionItem._id}
                        opinionItem={opinionItem}
                    ></OpinionCard>)
                }
            </div>           
    );
};

export default Opinion;