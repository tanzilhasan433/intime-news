import PoliticsCard from "../../Components/PoliticsCard";
import usePolitics from "../../hooks/usePolitics";



const Politics = () => {
    const [politics] = usePolitics();
    return (
        <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '9', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className='grid pt-10 mb-10 md:grid-cols-3 justify-center gap-2'>
            {
                politics.map(politicsItem => <PoliticsCard
                    key={politicsItem._id}
                    politicsItem={politicsItem}
                ></PoliticsCard>)
            }
        </div>

        </div>
        <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
           
        </div>
    </div>
    );
};

export default Politics;