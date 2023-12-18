

import EntertainmentCard from "../../Components/EntertainmentCard";
import useEntertainment from "../../hooks/useEntertainment";

const Entertainment = () => {
    const [entertainment] = useEntertainment();
    
    return (
        // <div className='grid pt-14 mb-14 md:grid-cols-3 justify-center gap-2'>
        //     {
        //         entertainment.map(entertainmentItem => <EntertainmentCard
        //             key={entertainmentItem._id}
        //             entertainmentItem={entertainmentItem}
        //         ></EntertainmentCard>)
        //     }
        // </div>
        <div  className="mt-10" style={{ display: 'flex', width: '100%' }}>
        <div  style={{ flex: '9', padding: '5px', background: '#f2f2f2', border: '5px' }}>
            
        <div className='grid pt-10 mb-10 md:grid-cols-3 justify-center gap-2'>
            {
                entertainment.map(entertainmentItem => <EntertainmentCard
                    key={entertainmentItem._id}
                    entertainmentItem={entertainmentItem}
                ></EntertainmentCard>)
            }
        </div>

        </div>
        <div  style={{ flex: '3', padding: '10px', background: '#e6e6e6', width: '50%', shadow: 'xl'  }}>
            
        </div>
    </div>
    );
};

export default Entertainment;