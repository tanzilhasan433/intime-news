import InternationalCard from "../../Components/InternationalCard";
import useInternational from "../../hooks/useInternational";

const International = () => {
     const [international] = useInternational();
    return (
        <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '8', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className='grid pt-10  md:grid-cols-2 justify-center gap-2'>
            {
                international.map(internationalItem => <InternationalCard
                    key={internationalItem._id}
                    internationalItem={internationalItem}
                ></InternationalCard>)
            }
        </div>

        </div>
        <div  style={{ flex: '4', padding: '10px',  width: '50%', height:'50%', shadow: 'xl'  }}>
            
        </div>
    </div>
    );
};

export default International;